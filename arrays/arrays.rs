//! ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//! ARRAYS  ·  Rust
//! ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//!
//! In Rust, arrays are split into two types:
//!   [T; N]   — fixed-size, stack-allocated, size known at compile time
//!   Vec<T>   — dynamic array, heap-allocated (equivalent to Python list / TS Array)
//!
//! OWNERSHIP NOTES
//!   • Slices &[T] borrow a contiguous view — zero-copy, no allocation.
//!   • Vec<T> owns its data; dropping Vec frees the memory.
//!   • Prefer &[T] in function signatures to accept both Vec and array refs.
//!
//! COMPLEXITY (same as all dynamic arrays)
//!   Access:          O(1)
//!   Search unsorted: O(n)
//!   Push:            O(1) amortized
//!   Insert / Delete: O(n)
//!   Binary search:   O(log n) on sorted slices

use std::collections::HashMap;

// ══════════════════════════════════════════════
// PART 1 — CORE ALGORITHMS
// ══════════════════════════════════════════════

/// Binary search on a sorted slice.
/// Returns `Some(index)` or `None`.
/// O(log n) time, O(1) space.
///
/// # Example
/// ```
/// assert_eq!(binary_search(&[1, 3, 5, 7, 9], 7), Some(3));
/// assert_eq!(binary_search(&[1, 3, 5, 7, 9], 6), None);
/// ```
pub fn binary_search(arr: &[i32], target: i32) -> Option<usize> {
    let mut left = 0;
    let mut right = arr.len().saturating_sub(1);
    // saturating_sub prevents underflow on empty slice

    while left <= right {
        let mid = left + (right - left) / 2; // avoids overflow vs (l+r)/2
        match arr[mid].cmp(&target) {
            std::cmp::Ordering::Equal => return Some(mid),
            std::cmp::Ordering::Less  => left = mid + 1,
            std::cmp::Ordering::Greater => {
                if mid == 0 { break; } // prevent usize underflow
                right = mid - 1;
            }
        }
    }
    None
}

/// Prefix sum array.
/// `prefix[i]` = sum of `arr[0..i]`  (`prefix[0]` = 0 as sentinel).
/// Range sum `[l, r]` = `prefix[r+1] - prefix[l]`.
/// O(n) build, O(1) query.
pub fn prefix_sum(nums: &[i32]) -> Vec<i32> {
    let mut prefix = vec![0i32; nums.len() + 1];
    for (i, &n) in nums.iter().enumerate() {
        prefix[i + 1] = prefix[i] + n;
    }
    prefix
}

/// Range sum query using a precomputed prefix array.
pub fn range_sum(prefix: &[i32], l: usize, r: usize) -> i32 {
    prefix[r + 1] - prefix[l]
}

/// Kadane's Algorithm — maximum contiguous subarray sum.
/// O(n) time, O(1) space.
///
/// At each index: current = max(num, current + num)
/// If extending is worse than starting fresh, start fresh.
pub fn max_subarray(nums: &[i32]) -> i32 {
    let mut best = nums[0];
    let mut current = nums[0];
    for &n in &nums[1..] {
        current = n.max(current + n);
        best = best.max(current);
    }
    best
}

/// Sliding window maximum sum of a window of size `k`.
/// O(n) time, O(1) space.
pub fn sliding_window_max_sum(nums: &[i32], k: usize) -> i32 {
    let mut window: i32 = nums[..k].iter().sum();
    let mut best = window;
    for i in k..nums.len() {
        window += nums[i] - nums[i - k];
        best = best.max(window);
    }
    best
}

/// Rotate a slice right by `k` positions, in place.
/// O(n) time, O(1) space — triple-reversal trick.
pub fn rotate_right(nums: &mut [i32], k: usize) {
    let n = nums.len();
    let k = k % n;
    if k == 0 { return; }
    nums.reverse();          // reverse all
    nums[..k].reverse();     // reverse first k
    nums[k..].reverse();     // reverse rest
}

// ══════════════════════════════════════════════
// PART 2 — INTERVIEW PROBLEMS
// ══════════════════════════════════════════════

// ── 🟢 Easy ──────────────────────────────────

/// 🟢 Two Sum (LC #1)
/// Return indices of two numbers summing to `target`.
/// O(n) time, O(n) space.
pub fn two_sum(nums: &[i32], target: i32) -> Option<[usize; 2]> {
    let mut seen: HashMap<i32, usize> = HashMap::new();
    for (i, &n) in nums.iter().enumerate() {
        if let Some(&j) = seen.get(&(target - n)) {
            return Some([j, i]);
        }
        seen.insert(n, i);
    }
    None
}

/// 🟢 Best Time to Buy and Sell Stock (LC #121)
/// One buy and one sell (buy before sell). Return max profit.
/// O(n) time, O(1) space.
pub fn best_time_buy_sell(prices: &[i32]) -> i32 {
    let mut min_price = i32::MAX;
    let mut max_profit = 0;
    for &p in prices {
        min_price = min_price.min(p);
        max_profit = max_profit.max(p - min_price);
    }
    max_profit
}

/// 🟢 Contains Duplicate (LC #217)
/// O(n) time, O(n) space.
pub fn contains_duplicate(nums: &[i32]) -> bool {
    let mut seen = std::collections::HashSet::new();
    nums.iter().any(|n| !seen.insert(n))
}

/// 🟢 Move Zeroes (LC #283) — in-place.
/// O(n) time, O(1) space.
pub fn move_zeroes(nums: &mut Vec<i32>) {
    let mut left = 0;
    for right in 0..nums.len() {
        if nums[right] != 0 {
            nums.swap(left, right);
            left += 1;
        }
    }
}

// ── 🟡 Medium ─────────────────────────────────

/// 🟡 Product of Array Except Self (LC #238)
/// No division. O(n) time, O(1) extra space.
pub fn product_except_self(nums: &[i32]) -> Vec<i32> {
    let n = nums.len();
    let mut result = vec![1i32; n];
    // Left pass
    let mut prefix = 1;
    for i in 0..n {
        result[i] = prefix;
        prefix *= nums[i];
    }
    // Right pass
    let mut suffix = 1;
    for i in (0..n).rev() {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    result
}

/// 🟡 Maximum Product Subarray (LC #152)
/// Track both min and max — a negative flips the sign.
/// O(n) time, O(1) space.
pub fn max_product_subarray(nums: &[i32]) -> i32 {
    let (mut best, mut cur_max, mut cur_min) = (nums[0], nums[0], nums[0]);
    for &n in &nums[1..] {
        let (a, b, c) = (n, cur_max * n, cur_min * n);
        cur_max = a.max(b).max(c);
        cur_min = a.min(b).min(c);
        best = best.max(cur_max);
    }
    best
}

/// 🟡 Subarray Sum Equals K (LC #560)
/// Count subarrays whose sum equals k.
/// O(n) time, O(n) space — prefix sum + hash map.
pub fn subarray_sum_k(nums: &[i32], k: i32) -> i32 {
    let mut count = 0;
    let mut prefix = 0;
    let mut freq: HashMap<i32, i32> = HashMap::from([(0, 1)]);
    for &n in nums {
        prefix += n;
        count += freq.get(&(prefix - k)).copied().unwrap_or(0);
        *freq.entry(prefix).or_insert(0) += 1;
    }
    count
}

/// 🟡 Container With Most Water (LC #11)
/// O(n) time, O(1) space.
pub fn container_most_water(heights: &[i32]) -> i32 {
    let (mut l, mut r) = (0usize, heights.len() - 1);
    let mut best = 0;
    while l < r {
        let h = heights[l].min(heights[r]);
        best = best.max(h * (r - l) as i32);
        if heights[l] < heights[r] { l += 1; } else { r -= 1; }
    }
    best
}

/// 🟡 Search in Rotated Sorted Array (LC #33)
/// O(log n) time, O(1) space.
pub fn search_rotated(nums: &[i32], target: i32) -> Option<usize> {
    let (mut l, mut r) = (0usize, nums.len().saturating_sub(1));
    while l <= r {
        let mid = l + (r - l) / 2;
        if nums[mid] == target { return Some(mid); }
        if nums[l] <= nums[mid] {                          // left half sorted
            if nums[l] <= target && target < nums[mid] {
                if mid == 0 { break; }
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {                                           // right half sorted
            if nums[mid] < target && target <= nums[r] {
                l = mid + 1;
            } else {
                if mid == 0 { break; }
                r = mid - 1;
            }
        }
    }
    None
}

// ── 🔴 Hard ────────────────────────────────────

/// 🔴 Trapping Rain Water (LC #42)
/// O(n) time, O(1) space — two pointer approach.
pub fn trap_rain_water(height: &[i32]) -> i32 {
    let (mut l, mut r) = (0usize, height.len() - 1);
    let (mut l_max, mut r_max) = (0i32, 0i32);
    let mut water = 0;
    while l < r {
        if height[l] < height[r] {
            if height[l] >= l_max { l_max = height[l]; }
            else { water += l_max - height[l]; }
            l += 1;
        } else {
            if height[r] >= r_max { r_max = height[r]; }
            else { water += r_max - height[r]; }
            r -= 1;
        }
    }
    water
}

/// 🔴 Largest Rectangle in Histogram (LC #84)
/// Monotonic stack — O(n) time, O(n) space.
pub fn largest_rectangle_histogram(heights: &[i32]) -> i32 {
    // Stack stores (left_boundary, height)
    let mut stack: Vec<(usize, i32)> = Vec::new();
    let mut best = 0i32;

    // Chain a sentinel 0 to flush the stack at the end
    let extended: Vec<i32> = heights.iter().copied().chain(std::iter::once(0)).collect();

    for (i, &h) in extended.iter().enumerate() {
        let mut start = i;
        while let Some(&(left, bar_h)) = stack.last() {
            if bar_h > h {
                stack.pop();
                best = best.max(bar_h * (i - left) as i32);
                start = left; // extend current bar leftward
            } else {
                break;
            }
        }
        stack.push((start, h));
    }
    best
}

// ══════════════════════════════════════════════
// PART 3 — TESTS
// ══════════════════════════════════════════════

#[cfg(test)]
mod tests {
    use super::*;

    // ── binary_search ─────────────────────────
    #[test]
    fn test_binary_search_found() {
        assert_eq!(binary_search(&[1, 3, 5, 7, 9, 11, 13], 7), Some(3));
        assert_eq!(binary_search(&[1, 3, 5, 7, 9], 1), Some(0));    // left boundary
        assert_eq!(binary_search(&[1, 3, 5, 7, 9], 9), Some(4));    // right boundary
    }

    #[test]
    fn test_binary_search_not_found() {
        assert_eq!(binary_search(&[1, 3, 5, 7, 9], 6), None);
        assert_eq!(binary_search(&[1, 3, 5, 7, 9], 0), None);
        assert_eq!(binary_search(&[1, 3, 5, 7, 9], 10), None);
        assert_eq!(binary_search(&[], 5), None);
    }

    // ── prefix_sum ────────────────────────────
    #[test]
    fn test_prefix_sum() {
        let p = prefix_sum(&[1, 2, 3, 4, 5]);
        assert_eq!(range_sum(&p, 1, 3), 9);  // 2+3+4
        assert_eq!(range_sum(&p, 0, 4), 15); // total
        assert_eq!(range_sum(&p, 2, 2), 3);  // single element
    }

    // ── max_subarray ──────────────────────────
    #[test]
    fn test_max_subarray() {
        assert_eq!(max_subarray(&[-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
        assert_eq!(max_subarray(&[-1, -2, -3]), -1);  // all negative
        assert_eq!(max_subarray(&[1]), 1);
        assert_eq!(max_subarray(&[5, -3, 5]), 7);     // skip middle negative
    }

    // ── sliding_window_max_sum ────────────────
    #[test]
    fn test_sliding_window() {
        assert_eq!(sliding_window_max_sum(&[2, 1, 5, 1, 3, 2], 3), 9);
        assert_eq!(sliding_window_max_sum(&[1, 2], 1), 2);
    }

    // ── rotate_right ──────────────────────────
    #[test]
    fn test_rotate_right() {
        let mut v = vec![1, 2, 3, 4, 5];
        rotate_right(&mut v, 2);
        assert_eq!(v, vec![4, 5, 1, 2, 3]);

        let mut v2 = vec![1, 2, 3];
        rotate_right(&mut v2, 4); // k > n
        assert_eq!(v2, vec![3, 1, 2]);
    }

    // ── two_sum ───────────────────────────────
    #[test]
    fn test_two_sum() {
        assert_eq!(two_sum(&[2, 7, 11, 15], 9), Some([0, 1]));
        assert_eq!(two_sum(&[3, 2, 4], 6), Some([1, 2]));
        assert_eq!(two_sum(&[3, 3], 6), Some([0, 1]));
        assert_eq!(two_sum(&[1, 2, 3], 7), None);
    }

    // ── best_time_buy_sell ────────────────────
    #[test]
    fn test_best_time_buy_sell() {
        assert_eq!(best_time_buy_sell(&[7, 1, 5, 3, 6, 4]), 5);
        assert_eq!(best_time_buy_sell(&[7, 6, 4, 3, 1]), 0);  // declining
        assert_eq!(best_time_buy_sell(&[1, 2]), 1);
    }

    // ── contains_duplicate ────────────────────
    #[test]
    fn test_contains_duplicate() {
        assert!(contains_duplicate(&[1, 2, 3, 1]));
        assert!(!contains_duplicate(&[1, 2, 3, 4]));
        assert!(!contains_duplicate(&[1]));
    }

    // ── move_zeroes ───────────────────────────
    #[test]
    fn test_move_zeroes() {
        let mut v = vec![0, 1, 0, 3, 12];
        move_zeroes(&mut v);
        assert_eq!(v, vec![1, 3, 12, 0, 0]);

        let mut v2 = vec![0];
        move_zeroes(&mut v2);
        assert_eq!(v2, vec![0]);
    }

    // ── product_except_self ───────────────────
    #[test]
    fn test_product_except_self() {
        assert_eq!(product_except_self(&[1, 2, 3, 4]), vec![24, 12, 8, 6]);
        assert_eq!(product_except_self(&[0, 1]), vec![1, 0]);
    }

    // ── max_product_subarray ──────────────────
    #[test]
    fn test_max_product_subarray() {
        assert_eq!(max_product_subarray(&[2, 3, -2, 4]), 6);
        assert_eq!(max_product_subarray(&[-2, 0, -1]), 0);
        assert_eq!(max_product_subarray(&[-2, 3, -4]), 24);
    }

    // ── subarray_sum_k ────────────────────────
    #[test]
    fn test_subarray_sum_k() {
        assert_eq!(subarray_sum_k(&[1, 1, 1], 2), 2);
        assert_eq!(subarray_sum_k(&[1, 2, 3], 3), 2);
        assert_eq!(subarray_sum_k(&[-1, -1, 1], 0), 1);
    }

    // ── container_most_water ──────────────────
    #[test]
    fn test_container_most_water() {
        assert_eq!(container_most_water(&[1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
        assert_eq!(container_most_water(&[1, 1]), 1);
    }

    // ── search_rotated ────────────────────────
    #[test]
    fn test_search_rotated() {
        assert_eq!(search_rotated(&[4, 5, 6, 7, 0, 1, 2], 0), Some(4));
        assert_eq!(search_rotated(&[4, 5, 6, 7, 0, 1, 2], 3), None);
        assert_eq!(search_rotated(&[1], 0), None);
    }

    // ── trap_rain_water ───────────────────────
    #[test]
    fn test_trap_rain_water() {
        assert_eq!(trap_rain_water(&[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
        assert_eq!(trap_rain_water(&[4, 2, 0, 3, 2, 5]), 9);
        assert_eq!(trap_rain_water(&[3, 0, 3]), 3);
    }

    // ── largest_rectangle_histogram ───────────
    #[test]
    fn test_largest_rectangle_histogram() {
        assert_eq!(largest_rectangle_histogram(&[2, 1, 5, 6, 2, 3]), 10);
        assert_eq!(largest_rectangle_histogram(&[2, 4]), 4);
        assert_eq!(largest_rectangle_histogram(&[1]), 1);
        assert_eq!(largest_rectangle_histogram(&[6, 2, 5, 4, 5, 1, 6]), 12);
    }
}
