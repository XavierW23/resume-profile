# Evidence Capture Flow

1. Start browser context.
2. Verify expected account/session identity.
3. Navigate to target page.
4. Wait for stable page state.
5. Capture screenshot.
6. Extract key visible text.
7. Validate expected UI condition.
8. Persist trace metadata.
9. Return structured result.

## Example Result

```json
{
  "target": "example.local",
  "status": "captured",
  "screenshot_path": "artifacts/example-homepage.png",
  "observed_state": "homepage_loaded",
  "validation_passed": true,
  "failure_classification": null
}
```

