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

#[cfg(test)]
mod is_symmetric_tests {
    use super::*;

    #[test]
    fn test_is_symmetric() {
            assert!(is_symmetric(&from_vec(&[Some(1),Some(2),Some(2),Some(3),Some(4),Some(4),Some(3)])));
            assert!(!is_symmetric(&from_vec(&[Some(1),Some(2),Some(2),None,Some(3),None,Some(3)])));
        }
}
