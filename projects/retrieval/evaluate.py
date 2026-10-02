"""Compare a real pretrained sentence encoder with lexical retrieval on held-out questions."""

import argparse
import hashlib
import json
import sys
from pathlib import Path
from time import perf_counter

import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from projects.common import ROOT, output_directory, package_versions, publish_result

CORPUS = Path(__file__).with_name('corpus.json')
DEFAULT_REVISION = '1110a243fdf4706b3f48f1d95db1a4f5529b4d41'


def load_corpus(path: Path = CORPUS) -> dict:
    data = json.loads(path.read_text())
    document_ids = [document['id'] for document in data['documents']]
    if len(set(document_ids)) != len(document_ids) or not document_ids:
        raise ValueError('Document identifiers must be unique and nonempty')
    question_ids = [question['id'] for question in data['questions']]
    if len(set(question_ids)) != len(question_ids):
        raise ValueError('Question identifiers must be unique')
    for question in data['questions']:
        if question['split'] not in ('development', 'test') or not question['relevant'] or not set(question['relevant']).issubset(document_ids):
            raise ValueError('Questions require a supported split and known relevance labels')
    return data


def rank(scores: np.ndarray, document_ids: list[str]) -> list[str]:
    if scores.ndim != 1 or len(scores) != len(document_ids) or not np.isfinite(scores).all():
        raise ValueError('Require one finite score per document')
    positions = sorted(range(len(document_ids)), key=lambda index: (-float(scores[index]), document_ids[index]))
    return [document_ids[index] for index in positions]


def retrieval_metrics(rankings: list[list[str]], relevance: list[list[str]], k: int) -> dict[str, float]:
    if len(rankings) != len(relevance) or not rankings or k < 1:
        raise ValueError('Require paired nonempty rankings and positive k')
    recalls, reciprocal = [], []
    for ranked, relevant in zip(rankings, relevance):
        if not relevant or len(set(ranked)) != len(ranked):
            raise ValueError('Require nonempty relevance and unique ranked identifiers')
        labels = set(relevant)
        recalls.append(len(set(ranked[:k]) & labels) / len(labels))
        first = next((index for index, document in enumerate(ranked, 1) if document in labels), None)
        reciprocal.append(1 / first if first else 0.0)
    return {'recall_at_k': float(np.mean(recalls)), 'mrr': float(np.mean(reciprocal))}


def run(model_name: str, k: int, offline: bool, requested_output: str | None = None,
        revision: str = DEFAULT_REVISION) -> dict:
    if k < 1:
        raise ValueError('k must be positive')
    data = load_corpus()
    documents = data['documents']
    questions = data['questions']
    document_ids = [document['id'] for document in documents]
    if k > len(documents):
        raise ValueError('k cannot exceed the document count')
    texts = [document['title'] + '. ' + document['text'] for document in documents]
    query_texts = [question['query'] for question in questions]
    vectorizer = TfidfVectorizer(ngram_range=(1, 2))
    start = perf_counter()
    lexical_documents = vectorizer.fit_transform(texts)
    lexical_scores = cosine_similarity(vectorizer.transform(query_texts), lexical_documents)
    lexical_ms = (perf_counter() - start) * 1000
    # This runs a real local model. Missing packages, downloads, or weights are errors, not a fallback.
    import torch
    from sentence_transformers import SentenceTransformer
    torch.set_num_threads(1)
    cache = ROOT / '.private' / 'model-cache' / 'sentence-transformers'
    cache.mkdir(parents=True, exist_ok=True, mode=0o700)
    start = perf_counter()
    encoder = SentenceTransformer(model_name, device='cpu', cache_folder=str(cache),
                                  token=False, local_files_only=offline, revision=revision)
    model_load_ms = (perf_counter() - start) * 1000
    start = perf_counter()
    document_embeddings = encoder.encode(texts, normalize_embeddings=True, convert_to_numpy=True,
                                          batch_size=16, show_progress_bar=False)
    query_embeddings = encoder.encode(query_texts, normalize_embeddings=True, convert_to_numpy=True,
                                       batch_size=16, show_progress_bar=False)
    dense_scores = query_embeddings @ document_embeddings.T
    dense_ms = (perf_counter() - start) * 1000
    rankings = {
        'tfidf': [rank(row, document_ids) for row in lexical_scores],
        'sentence_transformer': [rank(row, document_ids) for row in dense_scores],
    }
    metrics = {}
    failures = []
    for split in ('development', 'test'):
        positions = [index for index, question in enumerate(questions) if question['split'] == split]
        if not positions:
            raise ValueError(f'Missing {split} questions')
        metrics[split] = {name: retrieval_metrics([ranked[index] for index in positions],
                                                [questions[index]['relevant'] for index in positions], k)
                          for name, ranked in rankings.items()}
        for index in positions:
            for name, ranked in rankings.items():
                if not set(ranked[index][:k]) & set(questions[index]['relevant']):
                    failures.append({'question_id': questions[index]['id'], 'split': split, 'method': name,
                                     'query': questions[index]['query'], 'expected': questions[index]['relevant'],
                                     'retrieved': ranked[index][:k]})
    directory = output_directory('retrieval', requested_output)
    np.save(directory / 'document_embeddings.npy', document_embeddings)
    result = {
        'project': 'retrieval', 'model': model_name, 'model_revision': revision,
        'k': k, 'documents': len(documents),
        'development_questions': sum(question['split'] == 'development' for question in questions),
        'test_questions': sum(question['split'] == 'test' for question in questions),
        'corpus_sha256': hashlib.sha256(CORPUS.read_bytes()).hexdigest(),
        'metrics': metrics, 'failures': failures,
        'rankings': [{'question_id': question['id'], 'split': question['split'],
                      'relevant': question['relevant'], 'tfidf': rankings['tfidf'][index][:k],
                      'sentence_transformer': rankings['sentence_transformer'][index][:k]} for index, question in enumerate(questions)],
        'timing_ms': {'lexical_fit_and_all_queries': lexical_ms, 'model_load': model_load_ms,
                      'embedding_all_documents_and_queries': dense_ms},
        'versions': package_versions('numpy', 'scikit-learn', 'sentence-transformers', 'torch'),
        'limitations': ['Small original corpus; results do not establish production retrieval quality.',
                        'The pretrained encoder is not fine-tuned on these documents or question labels.',
                        'The final test questions do not select the model or k. Timings include batch work and are not per-request latency.',
                        'Model weights retain their publisher license; original corpus and judgments use MIT.'],
    }
    publish_result(directory, result)
    return result


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--model-name', default='sentence-transformers/all-MiniLM-L6-v2')
    parser.add_argument('--revision', default=DEFAULT_REVISION, help='Use a model commit; custom models need their own revision')
    parser.add_argument('--k', type=int, default=3)
    parser.add_argument('--offline', action='store_true', help='Require previously downloaded model weights')
    parser.add_argument('--output-dir')
    args = parser.parse_args()
    run(args.model_name, args.k, args.offline, args.output_dir, args.revision)


if __name__ == '__main__':
    main()
