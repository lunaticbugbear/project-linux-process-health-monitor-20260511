# Generation Report

Source idea: Linux Process Health Monitor
Project type: web-app-nextjs
Generated features:
- Reads a user-defined list of process names, polls them on a configurable interval using ps and /proc, logs state changes to a structured log file, and fires a Slack webhook or desktop notification on threshold breach.

Validation result: passed
CI result: passed
Vercel: n/a

Known limitations:
- Working MVP only.

How to extend:
- Expand the core logic and add more tests.
