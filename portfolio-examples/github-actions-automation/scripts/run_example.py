import json
from datetime import datetime, timezone
from pathlib import Path


artifact_dir = Path("artifacts")
artifact_dir.mkdir(exist_ok=True)

payload = {
    "status": "ok",
    "generated_at": datetime.now(timezone.utc).isoformat(),
    "message": "Scheduled automation completed successfully.",
}

(artifact_dir / "result.json").write_text(json.dumps(payload, indent=2))
print("Wrote artifacts/result.json")

