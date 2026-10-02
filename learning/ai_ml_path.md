# AI/ML learning path

Use Python as your main language for data and models. Keep JavaScript as a reference
for DSA, then repeat selected problems in TypeScript and Rust. You do not need to
complete every DSA topic before you start machine learning.

Use [road-to-machine-learning](https://github.com/NabidAlam/road-to-machine-learning)
as a complementary curriculum. Its [foundation guide](https://github.com/NabidAlam/road-to-machine-learning/blob/main/FOUNDATION_AND_JOB_READINESS.md)
puts SQL alongside early data work and recommends projects after classical ML.
This handbook adds small, runnable exercises with explicit contracts and synthetic
tests. It does not copy that repository's lessons or replace its full curriculum.

## 1. Learn Python and retain DSA practice

Follow the [JavaScript-to-Python path](study_path.md). Write functions, classes,
loops, comprehensions, and file operations. Use lists, dictionaries, sets, heaps,
and queues. Explain mutation and object identity before you translate linked lists.

Practice two or three DSA problems per study session. Use the direct LeetCode
links on matching problem pages. Start with arrays, hashing, strings, binary
search, and BFS. Add recursion, dynamic programming, and trees as you need them.

**Check:** Solve an unfamiliar array or hashing problem in Python. Explain the
input contract, boundary cases, and time/space costs without translating line by line.

## 2. Build the math foundation

Start with these [machine-learning exercises](../15_machine_learning/README.md):

1. [Vectors](../15_machine_learning/fundamentals/vector_operations/README.md) and
   [matrix multiplication](../15_machine_learning/fundamentals/matrix_multiply/README.md).
2. [Mean and variance](../15_machine_learning/fundamentals/descriptive_statistics/README.md).
3. [Stable softmax](../15_machine_learning/fundamentals/stable_softmax/README.md),
   [losses](../15_machine_learning/fundamentals/loss_functions/README.md), and
   [numerical gradients](../15_machine_learning/fundamentals/gradient_check/README.md).

Study conditional probability, Bayes' rule, expectation, distributions, sampling,
confidence intervals, and hypothesis tests alongside these calculations. Learn
partial derivatives, the chain rule, and gradient descent. Do not treat a formula
as understood until you can connect it to shapes, units, and an example.

**Check:** Compute a matrix product by hand. Explain population versus sample
variance. Compare an analytic derivative with a central-difference estimate.

## 3. Learn data tools and SQL early

Translate the math exercises to arrays with the [NumPy quickstart](https://numpy.org/doc/stable/user/quickstart.html).
Learn shapes, axes, broadcasting, slicing, vectorization, and random generators.
Use the [pandas tutorials](https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html)
for tabular data, joins, missing values, aggregation, time series, and plotting.

Run the [SQL topic](../16_sql/README.md) now. Learn joins, group-by aggregation,
CTEs, window functions, distinct counting, and date-based cohorts. Check row counts
before and after each join. A many-to-many join can inflate a training dataset.

Practice exploratory data analysis with public or synthetic data. Record the
source and license. Inspect types, missing values, duplicates, distributions,
imbalance, outliers, and possible label leakage. Choose plots that answer a question.

**Check:** Produce the same grouped result with SQL and pandas. Explain which rows
you exclude, why you exclude them, and whether the choice affects evaluation.

## 4. Train and evaluate classical models

Run [train/test splitting](../15_machine_learning/problems/train_test_split/README.md)
and [standard scaling](../15_machine_learning/problems/standard_scaler/README.md).
Split before you fit preprocessing. Fit transforms on training data only, then
apply the fitted transform to validation and test data.

Train [linear regression](../15_machine_learning/problems/linear_regression/README.md),
[logistic regression](../15_machine_learning/problems/logistic_regression/README.md),
and [nearest neighbors](../15_machine_learning/problems/k_nearest_neighbors/README.md).
Study [classification metrics](../15_machine_learning/problems/classification_metrics/README.md)
and [k-means](../15_machine_learning/problems/k_means/README.md). Compare a model
with a simple baseline before you tune it.

Move to scikit-learn for pipelines, cross-validation, regularization, decision
trees, random forests, boosting, feature engineering, PCA, and clustering metrics.
Use the [cross-validation guide](https://scikit-learn.org/stable/modules/cross_validation.html).
Choose a split that matches deployment: time-based for forecasting, group-based
when rows share a person or entity, or stratified when class proportions matter.
Keep the final test set separate from model and threshold selection.

**Check:** Report held-out metrics, a baseline, errors, and limitations. Explain
why accuracy can hide poor performance on an imbalanced dataset. Explain which
mistake matters more before you choose precision, recall, or a decision threshold.

## 5. Complete a small end-to-end project

Start a project after classical ML rather than waiting for every topic. Choose a
public tabular dataset or a synthetic generator. Define the prediction target,
allowed features, split rule, and evaluation metric before you train.

Keep a reproducible data preparation script, a baseline, a model comparison,
held-out results, and a short error analysis. Record the dependency versions and
random seeds. Explain what the model cannot establish. Keep source data and
outputs outside Git unless you have a reason and permission to publish them.

**Check:** Reproduce the result from a clean environment. Predict on unseen input.
Show whether the trained model improves on the baseline; do not claim success
from training loss alone.

## 6. Learn neural networks with PyTorch

Run the [dense/ReLU/softmax forward pass](../15_machine_learning/fundamentals/neural_network_forward/README.md).
Then use [PyTorch's basic workflow](https://docs.pytorch.org/tutorials/beginner/basics/intro.html)
to learn tensors, autograd, datasets, batches, optimizers, training/evaluation
modes, checkpoints, and device placement. Train an actual small network rather
than treating a forward computation as a trained model.

Study initialization, learning rates, normalization, regularization, overfitting,
and gradient behavior. Compare the network with your classical baseline. Add
CNNs for image tasks and tokenization, embeddings, and sequence models for text.

Use a separate virtual environment for these libraries. The local handbook tests
remain standard-library-only; they do not install a GPU stack.

**Check:** Overfit a tiny batch to check training mechanics, then evaluate on
separate data. Reload a saved model and compare its predictions before and after reload.

## 7. Study embeddings, attention, and LLM systems

Run [cosine retrieval](../15_machine_learning/problems/cosine_retrieval/README.md)
and [scaled dot-product attention](../15_machine_learning/problems/scaled_dot_product_attention/README.md).
Explain Q/K/V dimensions, scaling, softmax, and causal masking. The retrieval
exercise ranks supplied vectors; it does not generate embeddings. The attention
exercise computes attention; it does not train a transformer.

Next, study tokenizers, transformer blocks, positional information, pretraining,
fine-tuning, context limits, and inference costs. Build retrieval with a real
embedding model and public documents. Evaluate retrieval before you add generated
answers. Compare lexical search with vector search and reranking.

For RAG, measure document relevance, grounded answers, citation correctness,
latency, and cost on a fixed evaluation set. Test prompt injection in retrieved
text. Treat model output and retrieved instructions as untrusted input. Keep
credentials and private documents out of prompts, fixtures, logs, and Git.

**Check:** Show retrieval results and grounded answers for unseen questions.
Include failure cases. Explain whether a failure comes from retrieval, generation,
or evaluation; do not use an LLM's self-rating as your only evidence.

## 8. Learn deployment and MLOps

Serve real inference behind a small API. Validate input shapes and versions.
Separate model loading from request handling. Record the dataset, feature logic,
model version, evaluation, and dependency versions for each release.

Learn experiment tracking, model registries, reproducible packaging, batch and
online inference, monitoring, drift, rollback, and retraining criteria. Monitor
latency, failures, and outcome quality where labels are available. Apply access
controls and retention limits to data and prediction logs.

**Check:** Start the service, send representative requests, and observe predictions
and error responses. Reload or roll back a model. Verify that private inputs and
credentials do not appear in repository files or logs.

## Keep your work public-safe

Use synthetic examples in tests. Put private notes in `.private/`, raw data in
`data/raw/`, and private data in `data/private/`; these paths are ignored. Keep API
keys in your environment, not in code. Publish only sanitized `.env.example`
templates. Do not commit browser state, database dumps, experiment logs, model
weights, or notebook outputs that contain private data.

Ignore rules do not remove previously tracked files or erase Git history. Review
tracked files and history before you publish. If you expose a credential, revoke
or rotate it first; removing the file does not make that credential safe.
