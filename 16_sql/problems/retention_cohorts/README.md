# Retention cohorts

Compute next-day retention for cohorts defined by each user’s first activity day.

## Contract

Table: activity(user_id INTEGER, event_date TEXT). Dates use YYYY-MM-DD; duplicate events are allowed. Return cohort_date, users, retained_users, retention_rate ordered by cohort_date. Count each user once. Retained means any activity exactly one calendar day after the first activity.

Read the schema and synthetic data in [tests.py](tests.py). Write one query in
[solution.sql](solution.sql), then run it against an in-memory SQLite database:

```bash
npm run practice -- 16_sql/problems/retention_cohorts sql
```

Use Python's standard-library sqlite3 module. Keep real customer or employee data
out of this folder. Window exercises require SQLite 3.25 or later.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
