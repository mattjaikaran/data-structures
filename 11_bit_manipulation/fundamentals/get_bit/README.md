# Get bit

Read the bit at the specified zero-based position.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/fundamentals/get_bit js
npm run practice -- 11_bit_manipulation/fundamentals/get_bit py
npm run practice -- 11_bit_manipulation/fundamentals/get_bit ts
npm run practice -- 11_bit_manipulation/fundamentals/get_bit rs
```

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
