
from fundamentals.trie.solution import Trie, TrieNode

def longest_word_dictionary(words: list[str]) -> str:
    """🟡 Longest Word in Dictionary (LC #720)"""
    trie = Trie()
    for w in words: trie.insert(w)
    best = ""
    def dfs(node: TrieNode, cur: str):
        nonlocal best
        if len(cur)>len(best) or (len(cur)==len(best) and cur<best): best=cur
        for c in sorted(node.children):
            child = node.children[c]
            if child.is_end: dfs(child, cur+c)
    dfs(trie.root, ""); return best
