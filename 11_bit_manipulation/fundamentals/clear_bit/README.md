# Clear bit

Clear the bit at the specified zero-based position.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/fundamentals/clear_bit js
npm run practice -- 11_bit_manipulation/fundamentals/clear_bit py
npm run practice -- 11_bit_manipulation/fundamentals/clear_bit ts
npm run practice -- 11_bit_manipulation/fundamentals/clear_bit rs
```

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
