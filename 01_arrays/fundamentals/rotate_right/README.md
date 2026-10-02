# Rotate right

Rotate a sequence to the right by k positions. Preserve the order within each rotated part.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/fundamentals/rotate_right js
npm run practice -- 01_arrays/fundamentals/rotate_right py
npm run practice -- 01_arrays/fundamentals/rotate_right ts
npm run practice -- 01_arrays/fundamentals/rotate_right rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `rotateRight` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `rotate_right` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `rotateRight` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `rotate_right` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const rot = [1, 2, 3, 4, 5];
rotateRight(rot, 2);
assert(deepEqual(rot, [4, 5, 1, 2, 3]), "rotate right");
```

## Solution notes

Rotate array right by k steps IN-PLACE.
Time: O(n)  Space: O(1)

REVERSAL TRICK:
  [1,2,3,4,5], k=2 → [4,5,1,2,3]
  Step 1: reverse all    → [5,4,3,2,1]
  Step 2: reverse [0:k]  → [4,5,3,2,1]
  Step 3: reverse [k:]   → [4,5,1,2,3]  ✓

[Back to the topic](../../README.md)
