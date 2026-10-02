# Neural network forward

Run a dense, ReLU, dense, softmax forward pass.

## Contract

forward(features, hidden_weights, hidden_bias, output_weights, output_bias) uses weight matrices shaped input-by-hidden and hidden-by-output. Return class probabilities. Reject mismatched biases and shapes. Supply weights explicitly; this exercise does not train them.

Use finite numeric inputs unless the contract explicitly supports infinity masks.
Read [tests.py](tests.py) before [solution.py](solution.py). Follow the synthetic
examples and boundary cases, then change the implementation and run:

```bash
npm run practice -- 15_machine_learning/fundamentals/neural_network_forward py
```

Use Python 3.10 or later. No third-party packages or network calls are required.

[Back to the topic](../../README.md) · [AI/ML path](../../../learning/ai_ml_path.md)
