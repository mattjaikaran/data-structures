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
mod is_balanced_tests {
    use super::*;

    #[test]
    fn test_is_balanced() {
            assert!(is_balanced(&from_vec(&[Some(3),Some(9),Some(20),None,None,Some(15),Some(7)])));
            assert!(!is_balanced(&from_vec(&[Some(1),Some(2),Some(2),Some(3),Some(3),None,None,Some(4),Some(4)])));
        }
}
