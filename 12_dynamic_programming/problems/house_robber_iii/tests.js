function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { TreeNode, houseRobberIII } from '../../problems/house_robber_iii/solution.js';



const root = new TreeNode(3);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(1);
assert(houseRobberIII(root) === 7);
assert(houseRobberIII(null) === 0);
console.log('PASS 12_dynamic_programming/house_robber_iii (js)');
