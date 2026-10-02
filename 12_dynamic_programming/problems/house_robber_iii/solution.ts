export class TreeNode { val:number; left:TreeNode|null=null; right:TreeNode|null=null; constructor(v:number){this.val=v;} }

export function houseRobberIII(root: TreeNode|null): number {
  const dp=(n:TreeNode|null):[number,number]=>{
    if(!n) return [0,0];
    const [lr,ls]=dp(n.left),[rr,rs]=dp(n.right);
    return [n.val+ls+rs, Math.max(lr,ls)+Math.max(rr,rs)];
  };
  return Math.max(...dp(root));
}
