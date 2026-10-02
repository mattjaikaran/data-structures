import sqlite3
from contextlib import closing
from pathlib import Path

query = Path(__file__).with_name('solution.sql').read_text()
with closing(sqlite3.connect(':memory:')) as database:
    database.executescript("CREATE TABLE employees(id INTEGER PRIMARY KEY, department TEXT, salary INTEGER);\nINSERT INTO employees VALUES(1,'A',100),(2,'A',100),(3,'A',80),(4,'B',80),(5,'B',60);")
    assert database.execute(query).fetchall() == [(1,'A',100,1),(2,'A',100,1),(3,'A',80,2),(4,'B',80,1),(5,'B',60,2)]
    database.execute('DELETE FROM employees')
    assert database.execute(query).fetchall() == []
print('PASS 16_sql/window_ranking (sql)')
