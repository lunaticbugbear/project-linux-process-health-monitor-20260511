Most process monitoring tools are either too heavy or locked behind a paid tier. So I built a minimal one from scratch.

Linux Process Health Monitor is a CLI tool that watches a list of processes you care about — think nginx, postgres, your custom app daemon — and alerts you the moment something goes wrong.

It polls process state and resource usage on a configurable interval, logs everything to structured JSON, and fires a Slack webhook or desktop notification when a process dies or crosses a CPU/memory threshold.

No agent. No SaaS. Runs anywhere with Python and a cron job.

Tech stack: Python, psutil, Bash, Slack Webhooks, /proc filesystem, JSON logging.

Built it in an afternoon. It is now the first thing I would drop onto any Linux server I am responsible for.

If you manage Linux infrastructure and want a zero-dependency health check you actually own, the repo is on my GitHub.

What is your go-to tool for lightweight process monitoring?

#Linux #SysAdmin #Monitoring #Python #Bash #ITOperations #OpenToWork

#ITSupport #Linux #Automation #DevOps #Cloud #JobSearch
