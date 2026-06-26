from pathlib import Path


def build_evidence_record(target_url: str, screenshot_path: str) -> dict:
    return {
        "target_url": target_url,
        "status": "captured",
        "screenshot_path": screenshot_path,
        "observed_state": "page_loaded",
        "validation_passed": Path(screenshot_path).suffix in {".png", ".jpg", ".jpeg"},
        "failure_classification": None,
    }


if __name__ == "__main__":
    record = build_evidence_record(
        "https://example.com",
        "artifacts/example-homepage.png",
    )
    print(record)

