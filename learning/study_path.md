# Study path

Use JavaScript to learn the algorithm. Use Python to prove you understand it rather
than to translate it line by line. Add TypeScript and Rust after the algorithm is
familiar. Do not learn four new syntaxes and a new algorithm at the same time.

## Start with these exercises

Each folder below has solutions and tests in all four languages.

| Order | Exercise | Practice goal |
|---|---|---|
| 1 | [Binary search](../01_arrays/fundamentals/binary_search/README.md) | Indices, loops, and boundary cases |
| 2 | [Contains duplicate](../01_arrays/problems/contains_duplicate/README.md) | Sets and membership |
| 3 | [Two sum](../01_arrays/problems/two_sum/README.md) | Dictionary lookup and `enumerate` |
| 4 | [Move zeroes](../01_arrays/problems/move_zeroes/README.md) | Mutation and write positions |
| 5 | [Buy and sell stock](../01_arrays/problems/best_time_buy_sell/README.md) | A running minimum and best result |
| 6 | [Prefix sums](../01_arrays/fundamentals/prefix_sum/README.md) | Precomputation and range boundaries |
| 7 | [Fixed sliding window](../01_arrays/fundamentals/sliding_window_max_sum/README.md) | Add an entering value and remove a leaving value |
| 8 | [Singly linked list](../04_linked_lists/fundamentals/singly_linked_list/README.md) | Node identity and links |
| 9 | [Reverse a linked list](../04_linked_lists/problems/reverse_list/README.md) | Save a next link before changing it |
| 10 | [Valid parentheses](../05_stacks_queues/problems/is_valid_parens/README.md) | Stack state and matching rules |

For an introduction to resizable arrays, read
[dynamic array](../01_arrays/fundamentals/dynamic_array/README.md). Its manual
implementation is separate from the array problems. It currently has JavaScript,
Python, and TypeScript implementations.

## Repeat this loop

1. Read the prompt and tests before the solution.
2. State the input constraints. Write a normal case and a boundary case.
3. Describe a straightforward solution and its cost.
4. Identify repeated work. Explain the invariant of your optimized approach.
5. Use `start` to create a private JavaScript attempt. Write it and run `attempt`.
6. Close JavaScript. Start a private Python attempt from your explanation and run it.
7. Compare the reference solutions. Explain any mutation and return-value differences.
8. Record your outcome and hints. Use `review` to revisit due problems in Python.
9. Repeat in TypeScript with explicit types, then in Rust with ownership and borrowing.

```bash
npm run practice -- start 01_arrays/problems/two_sum js
# Edit the private solution path.
npm run practice -- attempt 01_arrays/problems/two_sum js
npm run practice -- start 01_arrays/problems/two_sum py
# Write Python without reading the reference.
npm run practice -- attempt 01_arrays/problems/two_sum py
npm run practice -- record 01_arrays/problems/two_sum py --outcome solved --hints 0 --minutes 15
npm run practice -- review --language py
```

Repeat `start` and `attempt` with `ts` or `rs` after you can explain the algorithm.
Use [catalog search and private review scheduling](../README.md#find-exercises-and-schedule-reviews)
to choose difficulty, patterns, and prerequisite preparation.

## Translate ideas, not syntax

| JavaScript | Python | Difference to remember |
|---|---|---|
| `array.length` | `len(values)` | Python calls a function |
| `array.push(x)` | `values.append(x)` | `append` returns `None`, not a new list |
| `for (let i = 0; i < a.length; i++)` | `for i, value in enumerate(values)` | Use the value directly when you can |
| `new Map()` | `{}` | Use a dictionary for key/value lookup |
| `map.has(key)` | `key in mapping` | Membership checks dictionary keys |
| `map.get(key)` | `mapping.get(key)` | A missing Python key returns `None` unless you supply a default |
| `new Set()` | `set()` | `{}` creates a dictionary, not an empty set |
| `null` | `None` | Use `is None` for the missing-value check |
| `===` | `==` or `is` | Use `==` for values; use `is` for node identity |
| `[...values]` | `values.copy()` | Both create a shallow list/array copy |
| `a.slice(start, end)` | `a[start:end]` | List slices allocate a new list |
| `a.sort((x, y) => x - y)` | `a.sort()` | Python sorts numbers numerically and returns `None` |
| `[...a].sort((x, y) => x - y)` | `sorted(a)` | Return a sorted copy |
| `Math.floor(a / b)` | `a // b` | Floor division differs from truncation for negative values |
| A queue with a moving head | `collections.deque` | Use `popleft()` instead of repeatedly removing list index zero |

Read the solution's tests for API differences. For example, a missing search result
can be `-1`, `None`, or Rust's `None`. Rust linked lists use owned `Box` nodes;
Python and JavaScript nodes use object references.

## Expand by topic

After the first exercises, follow the numbered topic pages. Use
[interview patterns](interview_patterns.md) to recognize a technique across topics.
Start the [AI/ML path](ai_ml_path.md) after Python functions and collections.
Study SQL alongside data preparation; do not wait until deep learning.

Read [Python deep dive](python_deep_dive.md) after lists, dictionaries, sets,
functions, classes, and recursion feel comfortable. You do not need decorators or
async programming to start these DSA exercises.
