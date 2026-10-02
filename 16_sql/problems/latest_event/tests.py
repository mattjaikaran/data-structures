import sqlite3
from contextlib import closing
from pathlib import Path

query = Path(__file__).with_name('solution.sql').read_text()
with closing(sqlite3.connect(':memory:')) as database:
    database.executescript("CREATE TABLE events(id INTEGER PRIMARY KEY, user_id INTEGER, occurred_at TEXT, value TEXT);\nINSERT INTO events VALUES(1,1,'2026-01-01T09:00:00Z','old'),(2,1,'2026-01-02T09:00:00Z','tie-low'),(3,1,'2026-01-02T09:00:00Z','tie-high'),(4,2,'2026-01-01T08:00:00Z','only');")
    assert database.execute(query).fetchall() == [(1,3,'tie-high'),(2,4,'only')]
    database.execute("INSERT INTO events VALUES(5,1,'2025-12-31T00:00:00Z','older-high-id')")
    assert database.execute(query).fetchall() == [(1,3,'tie-high'),(2,4,'only')]
print('PASS 16_sql/latest_event (sql)')
