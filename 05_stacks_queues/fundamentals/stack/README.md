# Stack

Implement last-in, first-out push, pop, and peek operations.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/fundamentals/stack js
npm run practice -- 05_stacks_queues/fundamentals/stack py
npm run practice -- 05_stacks_queues/fundamentals/stack ts
npm run practice -- 05_stacks_queues/fundamentals/stack rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `Stack` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `Stack` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `Stack` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `Stack` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
assert(s.peek() === 3 && s.pop() === 3 && s.size === 2, "Stack");
```

[Back to the topic](../../README.md)
