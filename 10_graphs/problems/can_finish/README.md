# Can finish

Practice the matching question: [LeetCode #207: Course Schedule](https://leetcode.com/problems/course-schedule/).

Determine whether all courses can finish without a cycle in their prerequisites.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 10_graphs/problems/can_finish js
npm run practice -- 10_graphs/problems/can_finish py
npm run practice -- 10_graphs/problems/can_finish ts
npm run practice -- 10_graphs/problems/can_finish rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `canFinish` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `can_finish` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `canFinish` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `can_finish` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(canFinish(2, [[1, 0]]) && !canFinish(2, [[1, 0], [0, 1]]), "canFinish");
```

[Back to the topic](../../README.md)
