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

#[cfg(test)]
mod max_path_sum_tests {
    use super::*;

    #[test]
    fn test_max_path_sum() {
            assert_eq!(max_path_sum(&from_vec(&[Some(-10),Some(9),Some(20),None,None,Some(15),Some(7)])), 42);
        }
}
