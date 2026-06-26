import json
from pathlib import Path


REQUIRED_FIELDS = {
    "business_name",
    "industry",
    "observed_issue",
    "recommended_action",
    "evidence",
    "validation",
    "requires_review",
    "confidence",
}


def validate_payload(payload: dict) -> list[str]:
    errors = []
    missing = REQUIRED_FIELDS - payload.keys()
    if missing:
        errors.append(f"Missing required fields: {sorted(missing)}")

    if not isinstance(payload.get("evidence"), list) or not payload.get("evidence"):
        errors.append("Evidence must be a non-empty list.")

    confidence = payload.get("confidence")
    if not isinstance(confidence, (int, float)) or not 0 <= confidence <= 1:
        errors.append("Confidence must be a number between 0 and 1.")

    validation = payload.get("validation", {})
    if validation.get("contains_unverified_claims") is True:
        errors.append("Payload contains unverified claims and should not be sent.")

    return errors


if __name__ == "__main__":
    payload = json.loads(Path("examples/sample_output.json").read_text())
    result = validate_payload(payload)
    if result:
        raise SystemExit("\n".join(result))
    print("Payload is valid.")

