

class TrieNode:
    def __init__(self):
        self.children: dict[str, 'TrieNode'] = {}
        self.is_end = False
        self.count = 0      # words passing through this node

class Trie:
    def __init__(self): self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for c in word:
            if c not in node.children: node.children[c] = TrieNode()
            node = node.children[c]; node.count += 1
        node.is_end = True

    def search(self, word: str) -> bool:
        node = self.root
        for c in word:
            if c not in node.children: return False
            node = node.children[c]
        return node.is_end

    def starts_with(self, prefix: str) -> bool:
        node = self.root
        for c in prefix:
            if c not in node.children: return False
            node = node.children[c]
        return True

    def delete(self, word: str) -> bool:
        def _del(node: TrieNode, word: str, i: int) -> bool:
            if i == len(word):
                if not node.is_end: return False
                node.is_end = False; return len(node.children)==0
            c = word[i]
            if c not in node.children: return False
            should_delete = _del(node.children[c], word, i+1)
            if should_delete: del node.children[c]
            return should_delete and not node.is_end and len(node.children)==0
        return _del(self.root, word, 0)

    def autocomplete(self, prefix: str) -> list[str]:
        node = self.root
        for c in prefix:
            if c not in node.children: return []
            node = node.children[c]
        results = []
        def dfs(n, cur):
            if n.is_end: results.append(cur)
            for c, child in sorted(n.children.items()): dfs(child, cur+c)
        dfs(node, prefix); return results

    def count_words_with_prefix(self, prefix: str) -> int:
        node = self.root
        for c in prefix:
            if c not in node.children: return 0
            node = node.children[c]
        return node.count
