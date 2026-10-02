#[derive(Debug, Clone, PartialEq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Box<TreeNode>>,
    pub right: Option<Box<TreeNode>>,
}

impl TreeNode {
    pub fn new(val: i32) -> Box<Self> { Box::new(TreeNode { val, left: None, right: None }) }
}

pub type Tree = Option<Box<TreeNode>>;

/// Build from heap-indexed values; use `None` for an absent node.
pub fn from_vec(vals: &[Option<i32>]) -> Tree {
    if vals.is_empty() || vals[0].is_none() { return None; }
    fn build(vals: &[Option<i32>], i: usize) -> Tree {
        if i >= vals.len() || vals[i].is_none() { return None; }
        Some(Box::new(TreeNode {
            val: vals[i].unwrap(),
            left: build(vals, 2*i+1),
            right: build(vals, 2*i+2),
        }))
    }
    build(vals, 0)
}

pub fn inorder(root: &Tree) -> Vec<i32> {
    let mut res = vec![];
    fn dfs(n: &Tree, r: &mut Vec<i32>) {
        if let Some(node) = n { dfs(&node.left,r); r.push(node.val); dfs(&node.right,r); }
    }
    dfs(root, &mut res); res
}

#[cfg(test)]
mod bst_tests {
    use super::*;

    #[test]
    fn test_inorder() {
            let t = from_vec(&[Some(2),Some(1),Some(3)]);
            assert_eq!(inorder(&t), vec![1,2,3]);
        }
}
