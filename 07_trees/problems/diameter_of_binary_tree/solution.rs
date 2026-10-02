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

#[cfg(test)]
mod diameter_of_binary_tree_tests {
    use super::*;

    #[test]
    fn test_diameter() {
            assert_eq!(diameter(&from_vec(&[Some(1),Some(2),Some(3),Some(4),Some(5)])), 3);
        }
}
