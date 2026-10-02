# Embedding retrieval

Compare lexical retrieval with a real pretrained sentence encoder. Read [evaluate.py](evaluate.py) and the original [corpus and relevance judgments](corpus.json). This project performs retrieval, not generated answers or LLM training.

## Run

```bash
# Download the public encoder on the first run.
uv run --frozen --extra retrieval python projects/retrieval/evaluate.py

# Use cached weights on later runs.
uv run --frozen --extra retrieval python projects/retrieval/evaluate.py --offline
```

You need network access for the first public model download, but no API key or GPU. Missing packages or weights produce an error; the script does not replace the encoder with fake embeddings.

The default is [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2), pinned to commit `1110a243fdf4706b3f48f1d95db1a4f5529b4d41`. If you change `--model-name`, supply that model's own `--revision`. Use `--k` or `--output-dir` for experiments.

## Follow the experiment

1. Load 12 original public-safe documents, three development questions, and nine held-out test questions. Keep explicit relevant document IDs.
2. Fit unigram/bigram TF-IDF on documents, then score queries with cosine similarity.
3. Encode documents and questions with the actual local sentence-transformer. Normalize embeddings and use their dot product for cosine scores.
4. Resolve score ties by document ID. Compute mean Recall@k and mean reciprocal rank separately for development and test questions. Recall divides by all relevant documents; MRR uses the first relevant rank in the complete ranking.
5. Inspect each method's top-k documents and missing-relevance cases. Do not choose the model or k from test scores.

Observed default held-out results:

| Method | Recall@3 | MRR |
|---|---:|---:|
| TF-IDF | 0.778 | 0.694 |
| Sentence-transformer | 1.000 | 1.000 |

TF-IDF missed the delivery question and the question about customers without purchases in its top three. Inspect your generated `metrics.json` for all rankings, failures, corpus hash, model revision, package versions, and timing measurements. Batch timing is not per-request latency.

## Outputs, licenses, and limits

Keep `document_embeddings.npy`, metrics, and the model cache under `.private/`. The original corpus, judgments, and project source use the handbook's MIT license. The pretrained weights retain the publisher's [Apache 2.0 license](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2); do not relicense or commit them.

This small authored corpus is not a production benchmark. The encoder is not fine-tuned on these documents or labels. Preserve a separate test set when you change the corpus, and include harder queries and multiple relevant documents before drawing broader conclusions. Evaluate retrieval before you add generation, citations, or reranking.

[Projects](../README.md) · [Cosine retrieval exercise](../../15_machine_learning/problems/cosine_retrieval/README.md)
