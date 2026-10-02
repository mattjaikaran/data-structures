# Join aggregates

Summarize customer order counts and totals, including customers without orders.

## Contract

Tables: customers(id INTEGER PRIMARY KEY, name TEXT); orders(id INTEGER PRIMARY KEY, customer_id INTEGER, total INTEGER). Return customer_id, name, order_count, total_spent, ordered by customer_id. Distinguish customers with the same name; return zeros when they have no orders.

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 16_sql/problems/join_aggregates sql
# Edit the private solution path printed above.
npm run practice -- attempt 16_sql/problems/join_aggregates sql
```

Repeat the exercise from your explanation before you compare reference solutions.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.


Use Python's standard-library sqlite3 module. Keep real customer or employee data
out of this folder. Window exercises require SQLite 3.25 or later.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
