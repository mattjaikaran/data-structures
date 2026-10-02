pub fn max_depth(root: &Tree) -> i32 {
    match root { None => 0, Some(n) => 1 + max_depth(&n.left).max(max_depth(&n.right)) }
}

#[cfg(test)]
mod max_depth_tests {
    use super::*;

    #[test]
    fn test_max_depth() {
            assert_eq!(max_depth(&from_vec(&[Some(3),Some(9),Some(20),None,None,Some(15),Some(7)])), 3);
            assert_eq!(max_depth(&None), 0);
        }
}
