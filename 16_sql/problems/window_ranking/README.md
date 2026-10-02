# Window ranking

Rank employee salaries within each department without gaps after ties.

## Contract

Table: employees(id INTEGER PRIMARY KEY, department TEXT, salary INTEGER). Return id, department, salary, salary_rank using DENSE_RANK. Order by department, descending salary, then id. Rank each department independently.

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 16_sql/problems/window_ranking sql
# Edit the private solution path printed above.
npm run practice -- attempt 16_sql/problems/window_ranking sql
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.


Use Python's standard-library sqlite3 module. Keep real customer or employee data
out of this folder. Window exercises require SQLite 3.25 or later.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
