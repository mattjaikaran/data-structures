# Min stack

Maintain the minimum element as you push and pop values.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/fundamentals/min_stack js
npm run practice -- 05_stacks_queues/fundamentals/min_stack py
npm run practice -- 05_stacks_queues/fundamentals/min_stack ts
npm run practice -- 05_stacks_queues/fundamentals/min_stack rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `MinStack` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `MinStack` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `MinStack` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `MinStack` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const ms = new MinStack();
ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);
assert(ms.getMin() === 2, "MinStack min");
```

## Solution notes

Stack with O(1) get_min().
Parallel min_stack tracks the running minimum at every level.

[Back to the topic](../../README.md)
