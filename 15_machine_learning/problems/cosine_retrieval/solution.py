from fundamentals.vector_operations.solution import dot, l2_norm

def cosine_similarity(a: list[float], b: list[float]) -> float:
    if not a or len(a) != len(b):
        raise ValueError('Require equal nonzero dimensions')
    norm_a, norm_b = l2_norm(a), l2_norm(b)
    return dot([value / norm_a for value in a], [value / norm_b for value in b]) if norm_a and norm_b else 0.0

def rank_vectors(query: list[float], vectors: list[list[float]], k: int) -> list[tuple[int, float]]:
    if not query or not 0 <= k <= len(vectors) or any(len(vector) != len(query) for vector in vectors):
        raise ValueError('Invalid retrieval inputs')
    scored = [(index,cosine_similarity(query,vector)) for index,vector in enumerate(vectors)]
    return sorted(scored,key=lambda pair: (-pair[1],pair[0]))[:k]
