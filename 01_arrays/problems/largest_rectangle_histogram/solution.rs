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

#[cfg(test)]
mod largest_rectangle_histogram_tests {
    use super::*;

    #[test]
    fn test_largest_rectangle_histogram() {
            assert_eq!(largest_rectangle_histogram(&[2, 1, 5, 6, 2, 3]), 10);
            assert_eq!(largest_rectangle_histogram(&[2, 4]), 4);
            assert_eq!(largest_rectangle_histogram(&[1]), 1);
            assert_eq!(largest_rectangle_histogram(&[6, 2, 5, 4, 5, 1, 6]), 12);
        }
}
