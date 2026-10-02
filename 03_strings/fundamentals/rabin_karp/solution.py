def rabin_karp(text: str, pattern: str) -> list[int]:
    """Return all match indices, including overlaps; use a rolling hash."""
    n, m = len(text), len(pattern)
    if m == 0:
        return list(range(n + 1))
    if m > n:
        return []
    base, modulus = 31, 10**9 + 7
    leading_power = pow(base, m - 1, modulus)
    pattern_hash = window_hash = 0
    for i in range(m):
        pattern_hash = (pattern_hash * base + ord(pattern[i])) % modulus
        window_hash = (window_hash * base + ord(text[i])) % modulus
    result = []
    for start in range(n - m + 1):
        if window_hash == pattern_hash and text[start:start + m] == pattern:
            result.append(start)
        if start + m < n:
            window_hash = (
                (window_hash - ord(text[start]) * leading_power) * base
                + ord(text[start + m])
            ) % modulus
    return result
