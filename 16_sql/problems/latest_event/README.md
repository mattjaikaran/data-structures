# Latest event

Choose exactly one latest event per user with a deterministic tie break.

## Contract

Table: events(id INTEGER PRIMARY KEY, user_id INTEGER, occurred_at TEXT, value TEXT). Use consistent UTC ISO date-time text. Return user_id, event_id, value ordered by user_id. Prefer later occurred_at, then greater id for equal timestamps.

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 16_sql/problems/latest_event sql
# Edit the private solution path printed above.
npm run practice -- attempt 16_sql/problems/latest_event sql
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.


Use Python's standard-library sqlite3 module. Keep real customer or employee data
out of this folder. Window exercises require SQLite 3.25 or later.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
