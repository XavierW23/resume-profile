# Interview Talking Points

## Core Narrative

I build production software systems that combine AI workflows, cloud infrastructure, automation, browser execution, and runtime reliability.

## Agency OS

- I can explain the architecture without exposing proprietary code.
- The hardest part was not calling an AI API; it was building state, validation, approval routing, and recovery around the workflow.
- I kept human approval gates for actions that could affect customers, outreach, publishing, DNS, or payments.
- The system uses structured artifacts so each stage can be audited and improved.

## Runtime Supervisor

- The supervisor turns long-running automation from a script into an observable system.
- Heartbeat files provide a simple external source of truth.
- Failure classification helps decide whether to recover, hold, retry, or alert.
- Runtime visibility matters because browser automation can fail in non-obvious ways.

## Enterprise Cloud

- At Chevron, I used Microsoft Graph and PowerShell to reduce more than 5,000 stale Microsoft Entra ID objects.
- I worked on cloud identity, Conditional Access, Azure DevOps, compliance, and reliability.
- This gave me enterprise context for designing safer automation systems.

## IP Boundary

Agency OS is proprietary because it is part of an active business. I publish architecture, examples, and reusable engineering patterns instead of production business logic.

