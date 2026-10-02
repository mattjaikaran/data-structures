# SQL

Practice SQL while you learn data preparation, not after deep learning. These four
queries run against synthetic, in-memory SQLite databases through Python.

```bash
npm run practice -- 16_sql sql
npm run test:sql
```

| Exercise | Purpose |
|---|---|
| [join aggregates](problems/join_aggregates/README.md) | Summarize customer order counts and totals, including customers without orders. |
| [window ranking](problems/window_ranking/README.md) | Rank employee salaries within each department without gaps after ties. |
| [latest event](problems/latest_event/README.md) | Choose exactly one latest event per user with a deterministic tie break. |
| [retention cohorts](problems/retention_cohorts/README.md) | Compute next-day retention for cohorts defined by each user’s first activity day. |

Read each schema and expected result in tests.py. Edit solution.sql and rerun
the exercise. Check duplicate rows, missing matches, tie breaks, integer division,
and calendar boundaries. Use SQLite 3.25 or later for window functions.

For explanations, use the [SQLite window function reference](https://www.sqlite.org/windowfunctions.html).
For the next steps, follow the [AI/ML path](../learning/ai_ml_path.md).
