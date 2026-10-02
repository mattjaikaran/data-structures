export class TreeNode {
  /**
   * @param {number} val
   */
  constructor(val) {
    this.val = val;
    /** @type {TreeNode|null} */
    this.left = null;
    /** @type {TreeNode|null} */
    this.right = null;
  }
}

/** @param {(number|null)[]} vals
 * @returns {TreeNode|null}
 */
export function fromArray(vals) {
  if (!vals.length || vals[0] == null) return null;
  const root = new TreeNode(vals[0]);
  const q = [root];
  let i = 1;
  while (q.length && i < vals.length) {
    const node = q.shift();
    if (i < vals.length && vals[i] != null) {
      node.left = new TreeNode(vals[i]);
      q.push(node.left);
    }
    i++;
    if (i < vals.length && vals[i] != null) {
      node.right = new TreeNode(vals[i]);
      q.push(node.right);
    }
    i++;
  }
  return root;
}

export class BST {
  constructor() {
    /** @type {TreeNode|null} */
    this.root = null;
  }

  /** @param {number} v */
  insert(v) {
    this.root = this._ins(this.root, v);
  }

  /** @param {TreeNode|null} n
   * @param {number} v
   * @returns {TreeNode}
   */
  _ins(n, v) {
    if (!n) return new TreeNode(v);
    if (v < n.val) n.left = this._ins(n.left, v);
    else if (v > n.val) n.right = this._ins(n.right, v);
    return n;
  }

  /** @returns {number[]} */
  inorder() {
    const r = [];
    const dfs = (n) => {
      if (!n) return;
      dfs(n.left);
      r.push(n.val);
      dfs(n.right);
    };
    dfs(this.root);
    return r;
  }
}

/** @param {TreeNode|null} root
 * @returns {number[]}
 */
export function inorder(root) {
  const r = [];
  const dfs = (n) => {
    if (!n) return;
    dfs(n.left);
    r.push(n.val);
    dfs(n.right);
  };
  dfs(root);
  return r;
}
