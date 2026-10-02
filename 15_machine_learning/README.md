# Machine learning

Build the math and model behavior in Python before you move to larger libraries.
These 16 exercises use the standard library and synthetic inputs. They do not
require an API key, GPU, downloaded dataset, or network access.

```bash
npm run practice -- 15_machine_learning py
```

## Fundamentals

| Exercise | Purpose |
|---|---|
| [vector operations](fundamentals/vector_operations/README.md) | Compute dot products and Euclidean norms. |
| [matrix multiply](fundamentals/matrix_multiply/README.md) | Multiply rectangular matrices without NumPy. |
| [descriptive statistics](fundamentals/descriptive_statistics/README.md) | Compute a mean and population variance. |
| [stable softmax](fundamentals/stable_softmax/README.md) | Convert logits into normalized probabilities without overflow. |
| [loss functions](fundamentals/loss_functions/README.md) | Compute regression and binary-classification losses. |
| [gradient check](fundamentals/gradient_check/README.md) | Approximate a multivariable gradient with central differences. |
| [neural network forward](fundamentals/neural_network_forward/README.md) | Run a dense, ReLU, dense, softmax forward pass. |

## Problems

| Exercise | Purpose |
|---|---|
| [train test split](problems/train_test_split/README.md) | Split features and labels reproducibly without changing global randomness. |
| [standard scaler](problems/standard_scaler/README.md) | Fit feature statistics on training data and reuse them on held-out rows. |
| [linear regression](problems/linear_regression/README.md) | Train a one-feature linear model with batch gradient descent. |
| [logistic regression](problems/logistic_regression/README.md) | Train a one-feature binary classifier with stable sigmoid and gradient descent. |
| [k nearest neighbors](problems/k_nearest_neighbors/README.md) | Classify a query from its closest labeled training rows. |
| [k means](problems/k_means/README.md) | Cluster vectors with deterministic Lloyd updates. |
| [classification metrics](problems/classification_metrics/README.md) | Compute binary confusion counts and derived metrics. |
| [cosine retrieval](problems/cosine_retrieval/README.md) | Rank supplied vectors by cosine similarity. |
| [scaled dot product attention](problems/scaled_dot_product_attention/README.md) | Compute scaled dot-product attention and optional causal masking. |

## Practice order

1. Learn vectors, matrices, statistics, softmax, losses, and numerical gradients.
2. Split data before you fit a scaler. Train and evaluate regression baselines.
3. Compare nearest neighbors and clustering. Explain confusion counts and metrics.
4. Run the neural forward pass, vector retrieval, and causal attention.
5. Follow the [AI/ML path](../learning/ai_ml_path.md) for NumPy, pandas,
   scikit-learn, PyTorch training, projects, and production topics.

Study [SQL](../16_sql/README.md) alongside data preparation. Keep DSA practice
in Python; hashing, heaps, graphs, and dynamic programming remain useful.

The neural forward and attention exercises implement their named computations,
not a full training framework or transformer. Linear and logistic regression
include real gradient-descent training. Move to PyTorch for autograd and larger models.
