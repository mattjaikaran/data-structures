# Applied ML projects

Run these projects after the [standard-library ML exercises](../15_machine_learning/README.md). Keep the core practice runner independent of scientific Python packages.

| Project | Behavior | Preparation |
|---|---|---|
| [Tabular prediction](tabular/README.md) | Prepare SQL features, compare models with training-only cross-validation, evaluate held-out rows, and reload a fitted pipeline. | SQL joins, train/test splitting, scaling, regression, and MAE |
| [Neural classifier](neural_classifier/README.md) | Train a real PyTorch network, select a validation checkpoint, evaluate unseen rows, and restore preprocessing and weights. | Softmax, cross-entropy, gradients, and classification metrics |
| [Embedding retrieval](retrieval/README.md) | Compare TF-IDF with a real pretrained sentence encoder on labeled questions. | Cosine similarity, text features, ranking, and evaluation splits |

## Set up and verify

Install [uv](https://docs.astral.sh/uv/getting-started/installation/). Run commands from the repository root. Use Python 3.12 and the committed `uv.lock` for the project environment.

```bash
uv sync --python 3.12 --all-extras --frozen
npm run test:projects
```

For one project, use its documented extra instead of installing all extras. Project tests exercise SQL time boundaries, isolated random generation, model quality, split isolation, checkpoint selection, and retrieval metric boundaries. They do not download a model. Run the retrieval script to verify real model inference.

## Keep outputs private

Each script prints metrics and writes them under `.private/project-runs/<project>/` by default. Repeated runs replace the named artifacts. Use `--output-dir` for another run directory outside Git or under `.private/`. Keep model caches, weights, datasets, and experiment output out of commits.

Use only trusted local artifacts. Joblib uses pickle; loading an untrusted file can execute code. PyTorch restores this project's checkpoint with `weights_only=True`, not an arbitrary serialized model object. Neither workflow is a security sandbox.

Use seeds, data provenance, recorded package versions, and the pinned encoder revision to reproduce a run. Expect numeric differences across library versions and hardware. Treat these small synthetic examples as learning exercises, not production evidence.

[AI/ML study path](../learning/ai_ml_path.md) · [Handbook](../README.md)
