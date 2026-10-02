import sqlite3
import unittest
from contextlib import closing
from tempfile import TemporaryDirectory

import numpy as np

from projects.tabular.train import FEATURE_QUERY, prepare_data, run


class TabularTests(unittest.TestCase):
    def test_features_exclude_future_transactions_and_keep_empty_customers(self):
        with closing(sqlite3.connect(':memory:')) as database:
            database.executescript('''
                CREATE TABLE customers(id INTEGER PRIMARY KEY, age REAL, segment INTEGER, future_spend REAL);
                CREATE TABLE transactions(id INTEGER PRIMARY KEY, customer_id INTEGER, day INTEGER, amount REAL);
                INSERT INTO customers VALUES(1,30,0,50),(2,NULL,1,80);
                INSERT INTO transactions VALUES(1,1,-30,20),(2,1,-1,10),(3,1,0,900),(4,1,-31,100);
            ''')
            self.assertEqual(database.execute(FEATURE_QUERY).fetchall(), [(1,30.0,2,30.0,0,50.0),(2,None,0,0,1,80.0)])

    def test_seed_reproduces_missing_values_and_targets_without_global_randomness(self):
        global_before = np.random.get_state()
        first = prepare_data(100,27)
        second = prepare_data(100,27)
        for left,right in zip(first,second):
            np.testing.assert_array_equal(left,right)
        global_after = np.random.get_state()
        self.assertEqual(global_before[0],global_after[0])
        np.testing.assert_array_equal(global_before[1],global_after[1])
        self.assertEqual(global_before[2:],global_after[2:])

    def test_trained_pipeline_beats_mean_baseline_and_survives_reload(self):
        with TemporaryDirectory() as output:
            result = run(300,42,output)
        self.assertLess(result['heldout_mae'],result['baseline_mae'] * 0.5)


if __name__ == '__main__':
    unittest.main()
