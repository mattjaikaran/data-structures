import sqlite3
from contextlib import closing
from pathlib import Path

query = Path(__file__).with_name('solution.sql').read_text()
with closing(sqlite3.connect(':memory:')) as database:
    database.executescript("CREATE TABLE activity(user_id INTEGER, event_date TEXT);\nINSERT INTO activity VALUES(1,'2025-12-31'),(1,'2026-01-01'),(1,'2026-01-01'),(2,'2025-12-31'),(2,'2026-01-02'),(3,'2026-01-01'),(3,'2026-01-02'),(4,'2026-01-03');")
    assert database.execute(query).fetchall() == [('2025-12-31',2,1,0.5),('2026-01-01',1,1,1.0),('2026-01-03',1,0,0.0)]
    database.execute("INSERT INTO activity VALUES(1,'2025-12-31'),(3,'2026-01-02')")
    assert database.execute(query).fetchall() == [('2025-12-31',2,1,0.5),('2026-01-01',1,1,1.0),('2026-01-03',1,0,0.0)]
print('PASS 16_sql/retention_cohorts (sql)')
