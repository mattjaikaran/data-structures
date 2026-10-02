
def partition_labels(s: str) -> list[int]:
    """🟡 Partition Labels (LC #763) — partition so each char in one part"""
    last = {c: i for i, c in enumerate(s)}
    result = []; start = end = 0
    for i, c in enumerate(s):
        end = max(end, last[c])
        if i == end: result.append(end - start + 1); start = i + 1
    return result
