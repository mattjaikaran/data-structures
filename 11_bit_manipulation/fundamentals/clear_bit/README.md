# Clear bit

Clear the bit at the specified zero-based position.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 11_bit_manipulation/fundamentals/clear_bit py
# Edit the private solution path printed above.
npm run practice -- attempt 11_bit_manipulation/fundamentals/clear_bit py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `clearBit` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `clear_bit` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `clearBit` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `clear_bit` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(clearBit(0b1011, 0) === 0b1010, "clearBit");
```

[Back to the topic](../../README.md)
