# Manacher

Find the longest palindromic substring by reusing palindrome radii.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/fundamentals/manacher js
npm run practice -- 03_strings/fundamentals/manacher py
npm run practice -- 03_strings/fundamentals/manacher ts
npm run practice -- 03_strings/fundamentals/manacher rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `manacher` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `manacher` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `manacher` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `manacher` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(["bab", "aba"].includes(manacher("babad")), "manacher babad");
```

## Solution notes

Manacher's O(n) longest palindromic substring.

[Back to the topic](../../README.md)
