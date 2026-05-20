# Linux Process Health Monitor

A lightweight Bash and Python hybrid CLI that continuously monitors critical system processes, logs anomalies, and sends a local desktop or webhook alert when a process goes down or spikes CPU/memory.

## What it does

Reads a user-defined list of process names, polls them on a configurable interval using ps and /proc, logs state changes to a structured log file, and fires a Slack webhook or desktop notification on threshold breach.

## Install

```powershell
npm install
```

## Run

```powershell
npm run dev
```

## Test

```powershell
npm run lint
npm run typecheck
npm test
npm run build
```
