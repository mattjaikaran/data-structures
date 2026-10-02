/// 🔴 Largest Rectangle in Histogram (LC #84)
pub fn largest_rectangle(heights: &[i32]) -> i32 {
    let mut stack: Vec<(usize, i32)> = Vec::new();
    let mut best = 0i32;
    let extended: Vec<i32> = heights.iter().copied().chain(std::iter::once(0)).collect();
    for (i, &h) in extended.iter().enumerate() {
        let mut start = i;
        while let Some(&(left, bar_h)) = stack.last() {
            if bar_h > h {
                stack.pop();
                best = best.max(bar_h * (i - left) as i32);
                start = left;
            } else { break; }
        }
        stack.push((start, h));
    }
    best
}

#[cfg(test)]
mod largest_rectangle_histogram_tests {
    use super::*;

    #[test]
    fn test_largest_rectangle() {
            assert_eq!(largest_rectangle(&[2,1,5,6,2,3]), 10);
            assert_eq!(largest_rectangle(&[2,4]), 4);
            assert_eq!(largest_rectangle(&[1]), 1);
        }
}
