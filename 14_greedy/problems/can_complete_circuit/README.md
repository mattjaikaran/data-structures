# Can complete circuit

Practice the matching question: [LeetCode #134: Gas Station](https://leetcode.com/problems/gas-station/).

Find a station from which you can complete the gas-station circuit, or -1 when no start works.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 14_greedy/problems/can_complete_circuit js
npm run practice -- 14_greedy/problems/can_complete_circuit py
npm run practice -- 14_greedy/problems/can_complete_circuit ts
npm run practice -- 14_greedy/problems/can_complete_circuit rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `canCompleteCircuit` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `can_complete_circuit` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `canCompleteCircuit` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `can_complete_circuit` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]) === 3, "gasStation");
```

[Back to the topic](../../README.md)
