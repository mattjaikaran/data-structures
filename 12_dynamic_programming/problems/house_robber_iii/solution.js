/**
 * TreeNode helper class
 * @param {number} v
 */
export function TreeNode(v) {
  this.val = v;
  this.left = null;
  this.right = null;
}

/**
 * 🟡 houseRobberIII (LC #337)
 * @param {TreeNode|null} root
 * @returns {number}
 */
export function houseRobberIII(root) {
  const dp=(n)=>{
    if(!n) return [0,0];
    const [lr,ls]=dp(n.left),[rr,rs]=dp(n.right);
    return [n.val+ls+rs, Math.max(lr,ls)+Math.max(rr,rs)];
  };
  return Math.max(...dp(root));
}
