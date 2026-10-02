import sqlite3
from contextlib import closing
from pathlib import Path

query = Path(__file__).with_name('solution.sql').read_text()
with closing(sqlite3.connect(':memory:')) as database:
    database.executescript("CREATE TABLE customers(id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE orders(id INTEGER PRIMARY KEY, customer_id INTEGER, total INTEGER);\nINSERT INTO customers VALUES(1,'A'),(2,'A'),(3,'B');\nINSERT INTO orders VALUES(1,1,20),(2,1,30),(3,2,7);")
    assert database.execute(query).fetchall() == [(1,'A',2,50),(2,'A',1,7),(3,'B',0,0)]
    database.execute('DELETE FROM orders')
    assert database.execute(query).fetchall() == [(1,'A',0,0),(2,'A',0,0),(3,'B',0,0)]
print('PASS 16_sql/join_aggregates (sql)')
