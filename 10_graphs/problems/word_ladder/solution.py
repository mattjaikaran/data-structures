from collections import deque

def word_ladder(begin: str, end: str, word_list: list[str]) -> int:
    """🔴 Word Ladder (LC #127) — BFS shortest transformation"""
    words = set(word_list)
    if end not in words: return 0
    q = deque([(begin, 1)])
    while q:
        word, steps = q.popleft()
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                nw = word[:i]+c+word[i+1:]
                if nw == end: return steps+1
                if nw in words: words.discard(nw); q.append((nw, steps+1))
    return 0
