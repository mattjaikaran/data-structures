# Window ranking

Rank employee salaries within each department without gaps after ties.

## Contract

Table: employees(id INTEGER PRIMARY KEY, department TEXT, salary INTEGER). Return id, department, salary, salary_rank using DENSE_RANK. Order by department, descending salary, then id. Rank each department independently.

Read the schema and synthetic data in [tests.py](tests.py). Write one query in
[solution.sql](solution.sql), then run it against an in-memory SQLite database:

```bash
npm run practice -- 16_sql/problems/window_ranking sql
```

Use Python's standard-library sqlite3 module. Keep real customer or employee data
out of this folder. Window exercises require SQLite 3.25 or later.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
