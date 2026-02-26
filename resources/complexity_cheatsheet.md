# ⚡ Big-O Complexity Cheatsheet

## Common Complexities (Best → Worst)

| Notation | Name | Example |
|----------|------|---------|
| O(1) | Constant | Hash map lookup |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Array traversal |
| O(n log n) | Linearithmic | Merge sort |
| O(n²) | Quadratic | Nested loops |
| O(2ⁿ) | Exponential | Recursive subsets |
| O(n!) | Factorial | Permutations |

---

## Data Structure Complexity Reference

### Arrays
| Operation | Average | Worst |
|-----------|---------|-------|
| Access | O(1) | O(1) |
| Search | O(n) | O(n) |
| Insert (end) | O(1) amortized | O(n) |
| Insert (middle) | O(n) | O(n) |
| Delete (end) | O(1) | O(1) |
| Delete (middle) | O(n) | O(n) |

### Linked Lists (Singly)
| Operation | Average | Worst |
|-----------|---------|-------|
| Access | O(n) | O(n) |
| Search | O(n) | O(n) |
| Insert (head) | O(1) | O(1) |
| Insert (tail, with tail ptr) | O(1) | O(1) |
| Delete (head) | O(1) | O(1) |
| Delete (arbitrary) | O(n) | O(n) |

### Stack / Queue
| Operation | Time |
|-----------|------|
| Push / Enqueue | O(1) |
| Pop / Dequeue | O(1) |
| Peek | O(1) |
| Search | O(n) |

### Hash Map
| Operation | Average | Worst |
|-----------|---------|-------|
| Insert | O(1) | O(n) |
| Delete | O(1) | O(n) |
| Search | O(1) | O(n) |

> Worst case happens with many hash collisions (rare with a good hash function)

### Binary Search Tree
| Operation | Average | Worst |
|-----------|---------|-------|
| Access | O(log n) | O(n) |
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |

> Worst case is a degenerate (unbalanced) tree — essentially a linked list

### AVL Tree (Self-Balancing BST)
| Operation | Average | Worst |
|-----------|---------|-------|
| All | O(log n) | O(log n) |

### Heap (Binary)
| Operation | Time |
|-----------|------|
| Find min/max | O(1) |
| Insert | O(log n) |
| Delete min/max | O(log n) |
| Heapify | O(n) |
| Search | O(n) |

### Graph
| Representation | Space | Edge Lookup | Add Edge |
|----------------|-------|-------------|----------|
| Adjacency List | O(V+E) | O(degree) | O(1) |
| Adjacency Matrix | O(V²) | O(1) | O(1) |

### Trie
| Operation | Time |
|-----------|------|
| Insert | O(m) |
| Search | O(m) |
| Delete | O(m) |
| Starts With | O(m) |

> m = length of the key string

---

## Sorting Algorithms

| Algorithm | Best | Average | Worst | Space | Stable? |
|-----------|------|---------|-------|-------|---------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | ❌ |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | ❌ |
| Tim Sort | O(n) | O(n log n) | O(n log n) | O(n) | ✅ |

---

## Graph Traversal

| Algorithm | Time | Space | Use Case |
|-----------|------|-------|----------|
| BFS | O(V+E) | O(V) | Shortest path (unweighted) |
| DFS | O(V+E) | O(V) | Cycle detection, topological sort |
| Dijkstra's | O((V+E) log V) | O(V) | Shortest path (weighted, non-negative) |
| Bellman-Ford | O(VE) | O(V) | Shortest path (negative weights) |
| A* | O(E log V) | O(V) | Heuristic-guided shortest path |

---

## Interview Pattern → Data Structure Map

| Pattern | Go-To Structure |
|---------|----------------|
| Two pointers / sliding window | Array |
| Fast & slow pointers | Linked List |
| Parentheses / expression parsing | Stack |
| Level-order traversal | Queue |
| Top-K elements | Heap |
| Frequency counting | Hash Map |
| Prefix/autocomplete | Trie |
| Shortest path | Graph (BFS/Dijkstra) |
| Range queries | Segment Tree / Sorted Array |
| Ordered data with fast insert | BST / AVL |
