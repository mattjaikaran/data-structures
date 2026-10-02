# Network delay

Practice the matching question: [LeetCode #743: Network Delay Time](https://leetcode.com/problems/network-delay-time/).

Return the time for a signal to reach every vertex, or -1 when a vertex is unreachable.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 10_graphs/problems/network_delay js
npm run practice -- 10_graphs/problems/network_delay py
npm run practice -- 10_graphs/problems/network_delay ts
npm run practice -- 10_graphs/problems/network_delay rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `networkDelay` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `network_delay` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `networkDelay` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `network_delay` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(networkDelay([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2) === 2, "networkDelay");
```

[Back to the topic](../../README.md)
