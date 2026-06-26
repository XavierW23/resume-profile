from datetime import UTC, datetime

from src.supervisor import evaluate_heartbeat


def test_healthy_runner_continues():
    decision = evaluate_heartbeat(
        {
            "status": "running",
            "last_seen_utc": "2026-06-26T16:00:00Z",
        },
        now=datetime(2026, 6, 26, 16, 0, 30, tzinfo=UTC),
    )

    assert decision.healthy is True
    assert decision.action == "continue"


def test_stale_runner_restarts():
    decision = evaluate_heartbeat(
        {
            "status": "running",
            "last_seen_utc": "2026-06-26T16:00:00Z",
        },
        stale_after_seconds=120,
        now=datetime(2026, 6, 26, 16, 5, 0, tzinfo=UTC),
    )

    assert decision.healthy is False
    assert decision.action == "restart_runner"

