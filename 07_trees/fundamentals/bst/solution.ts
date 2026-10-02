/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * TREES  ·  TypeScript
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * BST: left < node < right. O(log n) avg, O(n) worst.
 * AVL: self-balancing BST. Guaranteed O(log n).
 * Traversals: inorder(sorted), preorder, postorder, BFS level-order.
 */
export class TreeNode {
  val: number; left: TreeNode|null = null; right: TreeNode|null = null;
  constructor(val: number) { this.val = val; }
}

export function fromArray(vals: (number|null)[]): TreeNode|null {
  if (!vals.length || vals[0] == null) return null;
  const root = new TreeNode(vals[0]);
  const q: TreeNode[] = [root];
  let i = 1;
  while (q.length && i < vals.length) {
    const node = q.shift()!;
    if (i < vals.length && vals[i] != null) { node.left = new TreeNode(vals[i]!); q.push(node.left); }
    i++;
    if (i < vals.length && vals[i] != null) { node.right = new TreeNode(vals[i]!); q.push(node.right); }
    i++;
  }
  return root;
}

export class BST {
  root: TreeNode|null = null;
  insert(v: number): void { this.root = this._ins(this.root, v); }
  private _ins(n: TreeNode|null, v: number): TreeNode {
    if (!n) return new TreeNode(v);
    if (v < n.val) n.left = this._ins(n.left, v);
    else if (v > n.val) n.right = this._ins(n.right, v);
    return n;
  }
  inorder(): number[] {
    const r: number[] = [];
    const dfs = (n: TreeNode|null) => { if (!n) return; dfs(n.left); r.push(n.val); dfs(n.right); };
    dfs(this.root); return r;
  }
}

export function inorder(root: TreeNode|null): number[] {
  const r: number[] = [], dfs = (n: TreeNode|null) => { if (!n) return; dfs(n.left); r.push(n.val); dfs(n.right); };
  dfs(root); return r;
}
