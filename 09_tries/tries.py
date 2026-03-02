"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRIES  ·  Python
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Trie (prefix tree): each node = one character, path = prefix.
Insert/search/startsWith: O(L) where L = word length.
Space: O(ALPHABET_SIZE * L * N). Best for prefix queries, autocomplete.
"""


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


# ══════════════════════════════════════
# ── WildcardTrie class ──────────────────────
# ══════════════════════════════════════

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


# ══════════════════════════════════════
# ── Problems ──────────────────────
# ══════════════════════════════════════

def word_search_ii(board: list[list[str]], words: list[str]) -> list[str]:
    """🔴 Word Search II (LC #212) — Trie + DFS backtracking"""
    trie = Trie()
    for w in words: trie.insert(w)
    rows, cols = len(board), len(board[0])
    found = set()

    def dfs(node: TrieNode, r: int, c: int, path: str):
        if r<0 or r>=rows or c<0 or c>=cols or board[r][c] not in node.children: return
        ch = board[r][c]; node = node.children[ch]; path += ch
        if node.is_end: found.add(path)
        board[r][c] = '#'
        for dr,dc in [(0,1),(0,-1),(1,0),(-1,0)]: dfs(node, r+dr, c+dc, path)
        board[r][c] = ch

    for r in range(rows):
        for c in range(cols): dfs(trie.root, r, c, "")
    return list(found)

def replace_words(dictionary: list[str], sentence: str) -> str:
    """🟡 Replace Words (LC #648) — replace with shortest root"""
    trie = Trie()
    for root in dictionary: trie.insert(root)
    result = []
    for word in sentence.split():
        node = trie.root; replacement = ""
        for c in word:
            if c not in node.children: break
            node = node.children[c]; replacement += c
            if node.is_end: break
        result.append(replacement if node.is_end else word)
    return " ".join(result)

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

def palindrome_pairs(words: list[str]) -> list[list[int]]:
    """🔴 Palindrome Pairs (LC #336) — hash map approach"""
    lookup = {w:i for i,w in enumerate(words)}
    result = []
    def is_pal(s): return s==s[::-1]
    for i, w in enumerate(words):
        for j in range(len(w)+1):
            pre, suf = w[:j], w[j:]
            if is_pal(pre):
                rev = suf[::-1]
                if rev != w and rev in lookup: result.append([lookup[rev],i])
            if j < len(w) and is_pal(suf):
                rev = pre[::-1]
                if rev != w and rev in lookup: result.append([i,lookup[rev]])
    return result

def find_max_xor(nums: list[int]) -> int:
    """🟡 Maximum XOR of Two Numbers (LC #421) — bit trie"""
    max_xor = 0; prefix = 0
    for mask in range(31, -1, -1):
        prefix |= (1 << mask)
        prefixes = set(n & prefix for n in nums)
        candidate = max_xor | (1 << mask)
        if any((candidate ^ p) in prefixes for p in prefixes):
            max_xor = candidate
    return max_xor

# ══════════════════════════════════════
# ── Tests ──────────────────────
# ══════════════════════════════════════

def run_tests():
    print("Running trie tests...\n")

    t = Trie()
    for w in ["apple","app","application","apply"]: t.insert(w)
    assert t.search("apple") and t.search("app")
    assert not t.search("ap") and not t.search("apples")
    assert t.starts_with("app") and t.starts_with("appl")
    assert not t.starts_with("xyz")
    print("  ✅ Trie: insert / search / starts_with")

    assert t.autocomplete("app") == ["app","apple","application","apply"]
    assert t.autocomplete("xyz") == []
    print("  ✅ Trie: autocomplete")

    t.delete("app")
    assert not t.search("app") and t.search("apple")
    print("  ✅ Trie: delete (removes word, keeps prefixes)")

    wt = WildcardTrie()
    for w in ["bad","dad","mad"]: wt.insert(w)
    assert wt.search("bad") and wt.search(".ad") and wt.search("b..")
    assert not wt.search("pad") and not wt.search("ba")
    print("  ✅ WildcardTrie: exact / wildcard / mismatch")

    assert replace_words(["cat","bat","rat"],"the cattle was rattled by the battery") \
        == "the cat was rat by the bat"
    print("  ✅ replace_words")

    assert longest_word_dictionary(["w","wo","wor","worl","world"]) == "world"
    assert longest_word_dictionary(["a","banana","app","appl","ap","apply","apple"]) == "apple"
    print("  ✅ longest_word_dictionary")

    board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
    found = set(word_search_ii(board, ["oath","pea","eat","rain"]))
    assert "oath" in found and "eat" in found
    print("  ✅ word_search_ii")

    pairs = palindrome_pairs(["abcd","dcba","lls","s","sssll"])
    assert [0,1] in pairs and [1,0] in pairs
    print("  ✅ palindrome_pairs")

    assert find_max_xor([3,10,5,25,2,8]) == 28
    print("  ✅ find_max_xor")

    print("\n🎉 All trie tests passed!")

if __name__ == "__main__":
    run_tests()
