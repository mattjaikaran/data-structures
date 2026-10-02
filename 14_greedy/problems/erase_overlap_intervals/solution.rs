pub fn erase_overlap_intervals(mut intervals: Vec<[i32;2]>) -> usize {
    intervals.sort_by_key(|i| i[1]);
    let mut keep = 0; let mut last_end = i32::MIN;
    for [start, end] in intervals.iter().copied() {
        if start >= last_end { keep += 1; last_end = end; }
    }
    intervals.len() - keep
}

#[cfg(test)]
mod erase_overlap_intervals_tests {
    use super::*;

    #[test]
    fn test_erase_overlap() {
            assert_eq!(erase_overlap_intervals(vec![[1,2],[2,3],[3,4],[1,3]]), 1);
        }
}
