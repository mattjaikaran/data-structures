import { BST } from './solution.js';
function assert(condition, message = "Assertion failed") { if (!condition) throw new Error(message); }

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const bst = new BST();
[5, 3, 7, 1, 4, 6, 8].forEach((v) => bst.insert(v));
assert(eq(bst.inorder(), [1, 3, 4, 5, 6, 7, 8]), "bst inorder");
console.log('PASS 07_trees/bst (js)');
