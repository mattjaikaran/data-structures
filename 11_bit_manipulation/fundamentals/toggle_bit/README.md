# Toggle bit

Flip the bit at the specified zero-based position.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 11_bit_manipulation/fundamentals/toggle_bit js
npm run practice -- 11_bit_manipulation/fundamentals/toggle_bit py
npm run practice -- 11_bit_manipulation/fundamentals/toggle_bit ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `toggleBit` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `toggle_bit` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `toggleBit` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(toggleBit(0b1010, 0) === 0b1011, "toggle");
```

[Back to the topic](../../README.md)
