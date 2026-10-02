
from fundamentals.trie.solution import Trie

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
