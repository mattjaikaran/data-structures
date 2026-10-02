import unittest

import numpy as np

from projects.retrieval.evaluate import rank, retrieval_metrics


class RetrievalTests(unittest.TestCase):
    def test_recall_counts_multiple_relevant_documents_and_mrr_counts_first_hit(self):
        metrics = retrieval_metrics([['b','a','c'],['d','c','a']], [['a','c'],['x']],2)
        self.assertEqual(metrics['recall_at_k'],0.25)
        self.assertEqual(metrics['mrr'],0.25)
        self.assertEqual(retrieval_metrics([['b','a','c']],[['a','c']],3)['recall_at_k'],1)

    def test_equal_scores_have_stable_document_ties(self):
        self.assertEqual(rank(np.array([0.5,0.5,-1.0]),['z','a','b']),['a','z','b'])

    def test_nonfinite_scores_and_duplicate_rankings_are_rejected(self):
        for scores in [np.array([np.nan]),np.array([np.inf]),np.array([[1.0]])]:
            with self.assertRaises(ValueError):
                rank(scores,['a'])
        with self.assertRaises(ValueError):
            retrieval_metrics([['a','a']],[['a']],1)
        with self.assertRaises(ValueError):
            retrieval_metrics([['a']],[[]],1)


if __name__ == '__main__':
    unittest.main()
