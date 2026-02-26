# 📚 Data Structures & Algorithms Handbook

A complete interview prep and learning resource — implementations in Python, TypeScript, and Rust, plus curated problem lists, company guides, and deep-dive learning docs.

---

## Languages

| Language | Status | Notes |
|----------|--------|-------|
| 🐍 Python | ✅ All tests passing | Run: `python <topic>/<topic>.py` |
| 🟨 TypeScript | ✅ All tests passing | Run: `npx ts-node <topic>/<topic>.ts` |
| 🦀 Rust | ✅ All tests written | Run: `cargo test` from repo root |

---

## Data Structures & Algorithms

| Module | Topics Covered | Problems |
|--------|---------------|---------|
| `arrays/` | Two pointers, sliding window, prefix sum, binary search | 15+ |
| `linked_lists/` | Singly/Doubly linked list, LRU Cache, Floyd's cycle | 16 |
| `stacks_queues/` | Stack, Queue, MinStack, monotonic stack, deque | 12 |
| `trees/` | BST, DFS/BFS, LCA, path sum, serialize/deserialize | 13 |
| `graphs/` | BFS, DFS, Dijkstra, Union-Find, topo sort | 12 |
| `heaps/` | MinHeap, MaxHeap, MedianFinder, top-K patterns | 10 |
| `hash_maps/` | Manual HashMap, sliding window, prefix sums | 12 |
| `tries/` | Trie, WildcardTrie, autocomplete, word search | 8 |
| `dynamic_programming/` | 1D/2D DP, knapsack, string DP, interval DP | 25+ |
| `sorting/` | Quicksort, mergesort, heapsort, counting sort, radix | 10 |
| `bit_manipulation/` | XOR tricks, masks, bit counting patterns | 12 |
| `strings_algorithms/` | KMP, Z-algorithm, Manacher, classic string problems | 14 |

---

## Learning Guides (`learning/`)

| File | What It Covers |
|------|---------------|
| `blind75.md` | All 75 problems with pattern + key insight per problem |
| `neetcode150.md` | Extended 150 — gaps the Blind 75 misses, organized by topic |
| `interview_patterns.md` | 14 core patterns with templates + complexity reference |
| `system_design.md` | Full framework + 8 classic design problems (URL shortener, Instagram, YouTube, etc.) |
| `by_company.md` | Meta, Google, Amazon, Apple, Microsoft + others — what each actually tests |
| `python_deep_dive.md` | Data model, generators, decorators, async, typing, performance |
| `rust_after_the_book.md` | Lifetimes, smart pointers, concurrency, macros, audio plugins, learning path |

---

## Suggested Study Order

### Phase 1 — Foundations (Week 1-2)
`arrays → linked_lists → stacks_queues → hash_maps`
Build core intuition: pointer manipulation, O(1) lookup, tradeoffs.
Read `interview_patterns.md` alongside.

### Phase 2 — Trees & Graphs (Week 3-4)
`trees → graphs → tries`
DFS/BFS appear in ~40% of interview problems.
Start working through `blind75.md`.

### Phase 3 — Advanced (Week 5-6)
`heaps → dynamic_programming → sorting → bit_manipulation → strings_algorithms`

### Phase 4 — System Design (Week 7-8)
`system_design.md → practice with a partner → by_company.md`

---

## Running Everything

```bash
# Python
for topic in arrays linked_lists stacks_queues trees graphs heaps hash_maps tries \
             dynamic_programming sorting bit_manipulation strings_algorithms; do
  python ${topic}/${topic}.py
done

# TypeScript
for topic in arrays linked_lists stacks_queues trees graphs heaps hash_maps tries \
             dynamic_programming sorting bit_manipulation strings_algorithms; do
  npx ts-node --skip-project ${topic}/${topic}.ts
done

# Rust
cargo test
```

---

## Problem Count: ~165 total (45 Easy / 95 Medium / 25 Hard)
