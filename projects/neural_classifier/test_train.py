import unittest
from tempfile import TemporaryDirectory

import numpy as np
import torch

from projects.neural_classifier.train import prepare_data, run


class NeuralTests(unittest.TestCase):
    def setUp(self):
        self.addCleanup(torch.set_rng_state, torch.get_rng_state())
        self.addCleanup(torch.set_num_threads, torch.get_num_threads())
        self.addCleanup(
            torch.use_deterministic_algorithms,
            torch.are_deterministic_algorithms_enabled(),
            warn_only=torch.is_deterministic_algorithms_warn_only_enabled(),
        )

    def test_split_is_disjoint_and_scaler_uses_only_training_rows(self):
        data = prepare_data(200,19)
        groups = [set(data[name]) for name in ('train','validation','test')]
        self.assertFalse(groups[0] & groups[1] or groups[0] & groups[2] or groups[1] & groups[2])
        self.assertEqual(set.union(*groups),set(range(200)))
        np.testing.assert_allclose(data['scaler'].mean_,data['features'][data['train']].mean(axis=0))
        np.testing.assert_allclose(data['x_train'].numpy().mean(axis=0),np.zeros(8),atol=1e-6)

    def test_training_selects_lowest_validation_loss_and_beats_majority_baseline(self):
        with TemporaryDirectory() as output:
            result = run(300,42,15,output)
        losses = [epoch['validation_loss'] for epoch in result['training_history']]
        self.assertEqual(result['selected_validation_loss'],min(losses))
        self.assertGreater(result['heldout_accuracy'],result['baseline_accuracy'])


if __name__ == '__main__':
    unittest.main()
