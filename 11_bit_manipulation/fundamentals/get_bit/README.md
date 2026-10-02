# Get bit

Read the bit at the specified zero-based position.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 11_bit_manipulation/fundamentals/get_bit py
# Edit the private solution path printed above.
npm run practice -- attempt 11_bit_manipulation/fundamentals/get_bit py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `getBit` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `get_bit` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `getBit` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `get_bit` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(getBit(0b1010, 1) === 1 && getBit(0b1010, 0) === 0, "getBit");
```

[Back to the topic](../../README.md)
