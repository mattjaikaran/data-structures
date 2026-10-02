import { TreeNode } from '../../fundamentals/bst/solution.js';

/** 🟡 Construct Binary Tree from Preorder and Inorder (LC #105)
 * @param {number[]} pre
 * @param {number[]} ino
 * @returns {TreeNode|null}
 */
export function buildTreeFromPreIn(pre, ino) {
  if (!pre.length) return null;
  const root = new TreeNode(pre[0]),
    mid = ino.indexOf(pre[0]);
  root.left = buildTreeFromPreIn(pre.slice(1, mid + 1), ino.slice(0, mid));
  root.right = buildTreeFromPreIn(pre.slice(mid + 1), ino.slice(mid + 1));
  return root;
}
