# Tries

Trie (prefix tree): each node stores one character; path from root forms a prefix. Insert/search/startsWith run in O(L) where L is word length. Best for prefix queries, autocomplete, and dictionary lookups.

## Complexity

| Operation | Average | Worst |
|-----------|---------|-------|
| Insert | O(L) | O(L) |
| Search | O(L) | O(L) |
| startsWith | O(L) | O(L) |
| Space | O(ALPHABET × L × N) | O(ALPHABET × L × N) |

## Key Patterns

- **Prefix Queries** — traverse by character; `is_end` marks complete words
- **Autocomplete** — DFS from prefix node to collect all words
- **Wildcard Search** — DFS with backtracking when `'.'` matches any char
- **Trie + Grid** — build trie from words, DFS board while matching trie path

## Problems Implemented

| Problem | Difficulty | LeetCode |
|---------|-----------|----------|
| Word Search II | Hard | #212 |
| Replace Words | Medium | #648 |
| Longest Word in Dictionary | Medium | #720 |
| Palindrome Pairs | Hard | #336 |
| Maximum XOR of Two Numbers | Medium | #421 |

## Implementations

| Language | File |
|----------|------|
| Python | [tries.py](tries.py) |
| JavaScript | [tries.js](tries.js) |
| TypeScript | [tries.ts](tries.ts) |
| Rust | [tries.rs](tries.rs) |
