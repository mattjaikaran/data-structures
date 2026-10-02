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

#[cfg(test)]
mod level_order_tests {
    use super::*;

    #[test]
    fn test_level_order() { assert_eq!(level_order(&from_vec(&[Some(1),Some(2),Some(3)])), vec![vec![1],vec![2,3]]); assert!(level_order(&None).is_empty()); }
}
