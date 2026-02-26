//! TREES  ·  Rust
//! BST + common tree problems using Box<TreeNode>.
//! Rust trees use Option<Box<TreeNode>> as the nullable owned pointer type.

use std::collections::VecDeque;

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

/// Build from level-order slice (0 = null sentinel here we use Option in caller)
pub fn from_vec(vals: &[Option<i32>]) -> Tree {
    if vals.is_empty() || vals[0].is_none() { return None; }
    let root = Box::new(TreeNode { val: vals[0].unwrap(), left: None, right: None });
    let mut queue: VecDeque<*mut TreeNode> = VecDeque::new();
    queue.push_back(Box::into_raw(root.clone()) as *mut TreeNode);
    // Rebuild properly using an arena-free approach
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

pub fn level_order(root: &Tree) -> Vec<Vec<i32>> {
    let mut res = vec![];
    if root.is_none() { return res; }
    let mut q: VecDeque<&Box<TreeNode>> = VecDeque::new();
    q.push_back(root.as_ref().unwrap());
    while !q.is_empty() {
        let len = q.len();
        let mut level = vec![];
        for _ in 0..len {
            let n = q.pop_front().unwrap();
            level.push(n.val);
            if let Some(ref l) = n.left { q.push_back(l); }
            if let Some(ref r) = n.right { q.push_back(r); }
        }
        res.push(level);
    }
    res
}

pub fn max_depth(root: &Tree) -> i32 {
    match root { None => 0, Some(n) => 1 + max_depth(&n.left).max(max_depth(&n.right)) }
}

pub fn is_symmetric(root: &Tree) -> bool {
    fn mirror(l: &Tree, r: &Tree) -> bool {
        match (l, r) {
            (None, None) => true,
            (Some(a), Some(b)) => a.val==b.val && mirror(&a.left,&b.right) && mirror(&a.right,&b.left),
            _ => false,
        }
    }
    match root { None => true, Some(n) => mirror(&n.left, &n.right) }
}

pub fn max_path_sum(root: &Tree) -> i32 {
    let mut best = i32::MIN;
    fn gain(n: &Tree, best: &mut i32) -> i32 {
        if let Some(node) = n {
            let l = gain(&node.left, best).max(0);
            let r = gain(&node.right, best).max(0);
            *best = (*best).max(l + r + node.val);
            node.val + l.max(r)
        } else { 0 }
    }
    gain(root, &mut best); best
}

pub fn is_valid_bst(root: &Tree) -> bool {
    fn v(n: &Tree, lo: i64, hi: i64) -> bool {
        match n {
            None => true,
            Some(node) => {
                let val = node.val as i64;
                val > lo && val < hi && v(&node.left, lo, val) && v(&node.right, val, hi)
            }
        }
    }
    v(root, i64::MIN, i64::MAX)
}

pub fn diameter(root: &Tree) -> i32 {
    let mut best = 0;
    fn h(n: &Tree, best: &mut i32) -> i32 {
        if let Some(node) = n {
            let l = h(&node.left, best); let r = h(&node.right, best);
            *best = (*best).max(l + r); 1 + l.max(r)
        } else { 0 }
    }
    h(root, &mut best); best
}

pub fn right_side_view(root: &Tree) -> Vec<i32> {
    let mut res = vec![];
    if root.is_none() { return res; }
    let mut q: VecDeque<&Box<TreeNode>> = VecDeque::new();
    q.push_back(root.as_ref().unwrap());
    while !q.is_empty() {
        let len = q.len();
        for i in 0..len {
            let n = q.pop_front().unwrap();
            if i == len-1 { res.push(n.val); }
            if let Some(ref l) = n.left { q.push_back(l); }
            if let Some(ref r) = n.right { q.push_back(r); }
        }
    }
    res
}

pub fn is_balanced(root: &Tree) -> bool {
    fn h(n: &Tree) -> i32 {
        if let Some(node) = n {
            let l = h(&node.left); let r = h(&node.right);
            if l < 0 || r < 0 || (l-r).abs() > 1 { return -1; }
            1 + l.max(r)
        } else { 0 }
    }
    h(root) >= 0
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_inorder() {
        let t = from_vec(&[Some(2),Some(1),Some(3)]);
        assert_eq!(inorder(&t), vec![1,2,3]);
    }
    #[test]
    fn test_max_depth() {
        assert_eq!(max_depth(&from_vec(&[Some(3),Some(9),Some(20),None,None,Some(15),Some(7)])), 3);
        assert_eq!(max_depth(&None), 0);
    }
    #[test]
    fn test_is_symmetric() {
        assert!(is_symmetric(&from_vec(&[Some(1),Some(2),Some(2),Some(3),Some(4),Some(4),Some(3)])));
        assert!(!is_symmetric(&from_vec(&[Some(1),Some(2),Some(2),None,Some(3),None,Some(3)])));
    }
    #[test]
    fn test_max_path_sum() {
        assert_eq!(max_path_sum(&from_vec(&[Some(-10),Some(9),Some(20),None,None,Some(15),Some(7)])), 42);
    }
    #[test]
    fn test_is_valid_bst() {
        assert!(is_valid_bst(&from_vec(&[Some(2),Some(1),Some(3)])));
        assert!(!is_valid_bst(&from_vec(&[Some(5),Some(1),Some(4),None,None,Some(3),Some(6)])));
    }
    #[test]
    fn test_diameter() {
        assert_eq!(diameter(&from_vec(&[Some(1),Some(2),Some(3),Some(4),Some(5)])), 3);
    }
    #[test]
    fn test_right_side_view() {
        assert_eq!(right_side_view(&from_vec(&[Some(1),Some(2),Some(3),None,Some(5),None,Some(4)])), vec![1,3,4]);
    }
    #[test]
    fn test_is_balanced() {
        assert!(is_balanced(&from_vec(&[Some(3),Some(9),Some(20),None,None,Some(15),Some(7)])));
        assert!(!is_balanced(&from_vec(&[Some(1),Some(2),Some(2),Some(3),Some(3),None,None,Some(4),Some(4)])));
    }
}
