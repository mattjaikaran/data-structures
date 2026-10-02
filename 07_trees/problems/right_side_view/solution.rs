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

#[cfg(test)]
mod right_side_view_tests {
    use super::*;

    #[test]
    fn test_right_side_view() {
            assert_eq!(right_side_view(&from_vec(&[Some(1),Some(2),Some(3),None,Some(5),None,Some(4)])), vec![1,3,4]);
        }
}
