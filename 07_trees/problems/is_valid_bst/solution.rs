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

#[cfg(test)]
mod is_valid_bst_tests {
    use super::*;

    #[test]
    fn test_is_valid_bst() {
            assert!(is_valid_bst(&from_vec(&[Some(2),Some(1),Some(3)])));
            assert!(!is_valid_bst(&from_vec(&[Some(5),Some(1),Some(4),None,None,Some(3),Some(6)])));
        }
}
