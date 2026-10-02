/// 🔴 Sliding Window Maximum (LC #239) — monotonic deque
pub fn sliding_window_maximum(nums: &[i32], k: usize) -> Vec<i32> {
    let mut result: Vec<i32> = Vec::new();
    let mut dq: VecDeque<usize> = VecDeque::new();
    for (i, &n) in nums.iter().enumerate() {
        while dq.front().is_some_and(|&f| f + k <= i) { dq.pop_front(); }
        while dq.back().is_some_and(|&b| nums[b] < n) { dq.pop_back(); }
        dq.push_back(i);
        if i + 1 >= k { result.push(nums[*dq.front().unwrap()]); }
    }
    result
}

#[cfg(test)]
mod sliding_window_maximum_tests {
    use super::*;

    #[test]
    fn test_sliding_window_maximum() {
            assert_eq!(sliding_window_maximum(&[1,3,-1,-3,5,3,6,7], 3), vec![3,3,5,5,6,7]);
            assert_eq!(sliding_window_maximum(&[1], 1), vec![1]);
        }
}
