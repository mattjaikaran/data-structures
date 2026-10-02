pub fn kth_largest(nums: &[i32], k: usize) -> i32 {
    // Min-heap of size k: top is the kth largest
    let mut h: BinaryHeap<Reverse<i32>> = BinaryHeap::new();
    for &n in nums { h.push(Reverse(n)); if h.len() > k { h.pop(); } }
    h.peek().unwrap().0
}

#[cfg(test)]
mod kth_largest_tests {
    use super::*;

    #[test]
    fn test_kth_largest() {
            assert_eq!(kth_largest(&[3,2,1,5,6,4], 2), 5);
            assert_eq!(kth_largest(&[3,2,3,1,2,4,5,5,6], 4), 4);
        }
}
