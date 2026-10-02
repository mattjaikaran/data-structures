# House robber iii

Practice the matching question: [LeetCode #337: House Robber III](https://leetcode.com/problems/house-robber-iii/).

Return the largest sum of tree-node values without taking both a parent and its child.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/house_robber_iii js
npm run practice -- 12_dynamic_programming/problems/house_robber_iii py
npm run practice -- 12_dynamic_programming/problems/house_robber_iii ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `TreeNode`, `houseRobberIII` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `TreeNode`, `house_robber_iii` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `TreeNode`, `houseRobberIII` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const root = new TreeNode(3);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(1);
assert(houseRobberIII(root) === 7);
assert(houseRobberIII(null) === 0);
```

[Back to the topic](../../README.md)
