/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * TREES  ·  TypeScript
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * BST: left < node < right. O(log n) avg, O(n) worst.
 * AVL: self-balancing BST. Guaranteed O(log n).
 * Traversals: inorder(sorted), preorder, postorder, BFS level-order.
 */

class TreeNode {
  val: number; left: TreeNode|null = null; right: TreeNode|null = null;
  constructor(val: number) { this.val = val; }
}

// ── Build helper ──────────────────────────────
function fromArray(vals: (number|null)[]): TreeNode|null {
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

// ── BST ───────────────────────────────────────
class BST {
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

// ── Traversals ────────────────────────────────
function inorder(root: TreeNode|null): number[] {
  const r: number[] = [], dfs = (n: TreeNode|null) => { if (!n) return; dfs(n.left); r.push(n.val); dfs(n.right); };
  dfs(root); return r;
}
function levelOrder(root: TreeNode|null): number[][] {
  if (!root) return [];
  const res: number[][] = [], q = [root];
  while (q.length) {
    const level: number[] = [], len = q.length;
    for (let i = 0; i < len; i++) { const n = q.shift()!; level.push(n.val); if (n.left) q.push(n.left); if (n.right) q.push(n.right); }
    res.push(level);
  }
  return res;
}

// ── Problems ──────────────────────────────────
function maxDepth(r: TreeNode|null): number { return r ? 1+Math.max(maxDepth(r.left),maxDepth(r.right)) : 0; }

function invertTree(r: TreeNode|null): TreeNode|null {
  if (!r) return null; [r.left,r.right]=[invertTree(r.right),invertTree(r.left)]; return r;
}

function isSymmetric(r: TreeNode|null): boolean {
  const m = (l: TreeNode|null, ri: TreeNode|null): boolean =>
    !l&&!ri ? true : !l||!ri ? false : l.val===ri.val && m(l.left,ri.right) && m(l.right,ri.left);
  return r ? m(r.left, r.right) : true;
}

function lowestCommonAncestor(r: TreeNode|null, p: TreeNode, q: TreeNode): TreeNode|null {
  if (!r||r===p||r===q) return r;
  const l=lowestCommonAncestor(r.left,p,q), ri=lowestCommonAncestor(r.right,p,q);
  return l&&ri ? r : l??ri;
}

function maxPathSum(r: TreeNode|null): number {
  let best = -Infinity;
  const g = (n: TreeNode|null): number => {
    if (!n) return 0;
    const l=Math.max(g(n.left),0), ri=Math.max(g(n.right),0);
    best=Math.max(best,l+ri+n.val); return n.val+Math.max(l,ri);
  };
  g(r); return best;
}

function rightSideView(r: TreeNode|null): number[] {
  const res: number[] = []; if (!r) return res;
  const q=[r];
  while (q.length) { const len=q.length; for (let i=0;i<len;i++){const n=q.shift()!;if(i===len-1)res.push(n.val);if(n.left)q.push(n.left);if(n.right)q.push(n.right);}}
  return res;
}

function kthSmallest(r: TreeNode|null, k: number): number {
  const stack: TreeNode[] = []; let cur = r, cnt = 0;
  while (stack.length||cur) {
    while (cur) { stack.push(cur); cur=cur.left; }
    cur=stack.pop()!; if(++cnt===k) return cur.val; cur=cur.right;
  }
  return -1;
}

function isValidBST(r: TreeNode|null): boolean {
  const v = (n: TreeNode|null, lo: number, hi: number): boolean =>
    !n ? true : n.val>lo&&n.val<hi && v(n.left,lo,n.val) && v(n.right,n.val,hi);
  return v(r,-Infinity,Infinity);
}

function buildTreeFromPreIn(pre: number[], ino: number[]): TreeNode|null {
  if (!pre.length) return null;
  const root = new TreeNode(pre[0]), mid = ino.indexOf(pre[0]);
  root.left = buildTreeFromPreIn(pre.slice(1,mid+1), ino.slice(0,mid));
  root.right = buildTreeFromPreIn(pre.slice(mid+1), ino.slice(mid+1));
  return root;
}

function diameterOfBinaryTree(r: TreeNode|null): number {
  let best = 0;
  const h = (n: TreeNode|null): number => { if (!n) return 0; const l=h(n.left),ri=h(n.right); best=Math.max(best,l+ri); return 1+Math.max(l,ri); };
  h(r); return best;
}

function isBalanced(r: TreeNode|null): boolean {
  const h = (n: TreeNode|null): number => {
    if (!n) return 0;
    const l=h(n.left), ri=h(n.right);
    if (l<0||ri<0||Math.abs(l-ri)>1) return -1;
    return 1+Math.max(l,ri);
  };
  return h(r) >= 0;
}

function zigzagLevelOrder(r: TreeNode|null): number[][] {
  const res: number[][] = []; if (!r) return res;
  const q=[r]; let leftToRight=true;
  while(q.length){const len=q.length;const level:number[]=[];for(let i=0;i<len;i++){const n=q.shift()!;leftToRight?level.push(n.val):level.unshift(n.val);if(n.left)q.push(n.left);if(n.right)q.push(n.right);}res.push(level);leftToRight=!leftToRight;}
  return res;
}

// ── Tests ─────────────────────────────────────
function assert(c: boolean, m: string) { if (!c) throw new Error(`FAIL: ${m}`); }
const eq = (a: unknown, b: unknown) => JSON.stringify(a)===JSON.stringify(b);

function runTests() {
  console.log("Running tree tests...\n");

  const bst = new BST();
  [5,3,7,1,4,6,8].forEach(v=>bst.insert(v));
  assert(eq(bst.inorder(),[1,3,4,5,6,7,8]),"bst inorder");
  console.log("  ✅ BST: insert / inorder");

  const t = fromArray([3,9,20,null,null,15,7]);
  assert(maxDepth(t)===3,"maxDepth");
  assert(eq(levelOrder(t),[[3],[9,20],[15,7]]),"levelOrder");
  console.log("  ✅ maxDepth / levelOrder");

  const inv = fromArray([4,2,7,1,3,6,9]);
  invertTree(inv);
  assert(inorder(inv)[0]===9,"invertTree");
  console.log("  ✅ invertTree");

  assert(isSymmetric(fromArray([1,2,2,3,4,4,3])),"symmetric");
  assert(!isSymmetric(fromArray([1,2,2,null,3,null,3])),"asymmetric");
  console.log("  ✅ isSymmetric");

  const bst2 = fromArray([6,2,8,0,4,7,9,null,null,3,5]);
  const p=new TreeNode(2),q2=new TreeNode(8);
  const lcaRoot=fromArray([6,2,8,0,4,7,9,null,null,3,5]);
  assert(isValidBST(fromArray([2,1,3])),"validBST");
  assert(!isValidBST(fromArray([5,1,4,null,null,3,6])),"invalidBST");
  console.log("  ✅ isValidBST");

  assert(maxPathSum(fromArray([-10,9,20,null,null,15,7]))===42,"maxPathSum");
  console.log("  ✅ maxPathSum");

  assert(eq(rightSideView(fromArray([1,2,3,null,5,null,4])),[1,3,4]),"rightSideView");
  console.log("  ✅ rightSideView");

  const bst3 = new BST(); [3,1,4,null,2].forEach(v=>v&&bst3.insert(v));
  assert(kthSmallest(bst3.root,1)===1,"kthSmallest");
  console.log("  ✅ kthSmallest");

  assert(diameterOfBinaryTree(fromArray([1,2,3,4,5]))===3,"diameter");
  console.log("  ✅ diameterOfBinaryTree");

  assert(isBalanced(fromArray([3,9,20,null,null,15,7])),"balanced");
  assert(!isBalanced(fromArray([1,2,2,3,3,null,null,4,4])),"unbalanced");
  console.log("  ✅ isBalanced");

  assert(eq(buildTreeFromPreIn([3,9,20,15,7],[9,3,15,20,7]),fromArray([3,9,20,null,null,15,7])),"buildFromPreIn");
  console.log("  ✅ buildFromPreIn");

  assert(eq(zigzagLevelOrder(fromArray([3,9,20,null,null,15,7])),[[3],[20,9],[15,7]]),"zigzag");
  console.log("  ✅ zigzagLevelOrder");

  console.log("\n🎉 All tree tests passed!");
}
runTests();
export { TreeNode, BST, fromArray, inorder, levelOrder, maxDepth, invertTree, isSymmetric, lowestCommonAncestor, maxPathSum, rightSideView, kthSmallest, isValidBST, buildTreeFromPreIn, diameterOfBinaryTree, isBalanced, zigzagLevelOrder };
