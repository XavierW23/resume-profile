import json
from dataclasses import dataclass
from datetime import UTC, datetime, timedelta
from pathlib import Path


@dataclass(frozen=True)
class SupervisorDecision:
    healthy: bool
    reason: str
    action: str


def load_heartbeat(path: str | Path) -> dict:
    return json.loads(Path(path).read_text(encoding="utf-8"))


def evaluate_heartbeat(
    heartbeat: dict,
    stale_after_seconds: int = 120,
    now: datetime | None = None,
) -> SupervisorDecision:
    now = now or datetime.now(UTC)
    status = heartbeat.get("status")
    last_seen_raw = heartbeat.get("last_seen_utc")

    if not last_seen_raw:
        return SupervisorDecision(False, "missing heartbeat timestamp", "alert")

    last_seen = datetime.fromisoformat(last_seen_raw.replace("Z", "+00:00"))
    stale_after = timedelta(seconds=stale_after_seconds)

    if now - last_seen > stale_after:
        return SupervisorDecision(False, "heartbeat is stale", "restart_runner")

    if status in {"failed", "stopped"}:
        return SupervisorDecision(False, f"runner status is {status}", "alert")

    if status == "recovering":
        return SupervisorDecision(False, "runner is already recovering", "observe")

    return SupervisorDecision(True, "runner is healthy", "continue")


if __name__ == "__main__":
    heartbeat = load_heartbeat("examples/heartbeat.json")
    decision = evaluate_heartbeat(heartbeat)
    print(decision)

