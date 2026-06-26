def build_prompt_contract(evidence: list[str], business_name: str) -> dict:
    return {
        "business_name": business_name,
        "evidence": evidence,
        "required_output_fields": [
            "observed_issue",
            "recommended_action",
            "confidence",
            "requires_review",
        ],
        "safety_rules": [
            "Do not invent claims not supported by evidence.",
            "Route uncertain outputs to human review.",
            "Keep recommendations specific and business-safe.",
        ],
    }


if __name__ == "__main__":
    contract = build_prompt_contract(
        ["Homepage lacks clear emergency service messaging."],
        "Example Roofing",
    )
    print(contract)

