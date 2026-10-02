# Latest event

Choose exactly one latest event per user with a deterministic tie break.

## Contract

Table: events(id INTEGER PRIMARY KEY, user_id INTEGER, occurred_at TEXT, value TEXT). Use consistent UTC ISO date-time text. Return user_id, event_id, value ordered by user_id. Prefer later occurred_at, then greater id for equal timestamps.

Read the schema and synthetic data in [tests.py](tests.py). Write one query in
[solution.sql](solution.sql), then run it against an in-memory SQLite database:

```bash
npm run practice -- 16_sql/problems/latest_event sql
```

Use Python's standard-library sqlite3 module. Keep real customer or employee data
out of this folder. Window exercises require SQLite 3.25 or later.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
