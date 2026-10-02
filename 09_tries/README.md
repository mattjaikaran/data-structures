# Tries

Start with fundamentals. Choose a problem and use its private start/attempt
commands. Read JavaScript to learn the algorithm, then write Python from your
explanation. Keep public references unchanged. Add TypeScript and Rust later.

Verify all available reference exercises for this topic with:

```bash
npm run practice -- 09_tries py
```

## Fundamentals

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [trie](fundamentals/trie/README.md) | [js](fundamentals/trie/solution.js) | [py](fundamentals/trie/solution.py) | [ts](fundamentals/trie/solution.ts) | [rs](fundamentals/trie/solution.rs) |
| [wildcard trie](fundamentals/wildcard_trie/README.md) | [js](fundamentals/wildcard_trie/solution.js) | [py](fundamentals/wildcard_trie/solution.py) | [ts](fundamentals/wildcard_trie/solution.ts) | [rs](fundamentals/wildcard_trie/solution.rs) |

## Problems

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [replace words](problems/replace_words/README.md) | [js](problems/replace_words/solution.js) | [py](problems/replace_words/solution.py) | [ts](problems/replace_words/solution.ts) | [rs](problems/replace_words/solution.rs) |
| [word search ii](problems/word_search_ii/README.md) | [js](problems/word_search_ii/solution.js) | [py](problems/word_search_ii/solution.py) | [ts](problems/word_search_ii/solution.ts) | — |
| [longest word in dictionary](problems/longest_word_in_dictionary/README.md) | [js](problems/longest_word_in_dictionary/solution.js) | [py](problems/longest_word_in_dictionary/solution.py) | [ts](problems/longest_word_in_dictionary/solution.ts) | [rs](problems/longest_word_in_dictionary/solution.rs) |
| [palindrome pairs](problems/palindrome_pairs/README.md) | — | [py](problems/palindrome_pairs/solution.py) | — | — |
| [find max xor](problems/find_max_xor/README.md) | — | [py](problems/find_max_xor/solution.py) | — | — |

## Complexity

| Operation | Average | Worst |
|-----------|---------|-------|
| Insert | O(L) | O(L) |
| Search | O(L) | O(L) |
| startsWith | O(L) | O(L) |
| Space | O(ALPHABET × L × N) | O(ALPHABET × L × N) |

A dash means the original handbook has no solution in that language. Each listed
solution has a test file, or Rust tests inside the solution. Do not treat coverage
as a claim that every language uses the same API.

[Study path](../learning/study_path.md) · [AI/ML path](../learning/ai_ml_path.md)
