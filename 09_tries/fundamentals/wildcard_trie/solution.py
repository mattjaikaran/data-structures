
from fundamentals.trie.solution import TrieNode

class WildcardTrie:
    """Trie supporting '.' as wildcard (matches any single character)."""
    def __init__(self): self.root = TrieNode()

    def insert(self, word: str):
        node = self.root
        for c in word:
            if c not in node.children: node.children[c] = TrieNode()
            node = node.children[c]
        node.is_end = True

    def search(self, word: str) -> bool:
        def dfs(node: TrieNode, i: int) -> bool:
            if i == len(word): return node.is_end
            c = word[i]
            if c == '.':
                return any(dfs(child, i+1) for child in node.children.values())
            if c not in node.children: return False
            return dfs(node.children[c], i+1)
        return dfs(self.root, 0)
