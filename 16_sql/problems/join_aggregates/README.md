# Join aggregates

Summarize customer order counts and totals, including customers without orders.

## Contract

Tables: customers(id INTEGER PRIMARY KEY, name TEXT); orders(id INTEGER PRIMARY KEY, customer_id INTEGER, total INTEGER). Return customer_id, name, order_count, total_spent, ordered by customer_id. Distinguish customers with the same name; return zeros when they have no orders.

Read the schema and synthetic data in [tests.py](tests.py). Write one query in
[solution.sql](solution.sql), then run it against an in-memory SQLite database:

```bash
npm run practice -- 16_sql/problems/join_aggregates sql
```

Use Python's standard-library sqlite3 module. Keep real customer or employee data
out of this folder. Window exercises require SQLite 3.25 or later.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
