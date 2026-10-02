pub fn merge_intervals(intervals: &mut Vec<[i32;2]>) -> Vec<[i32;2]> {
    if intervals.is_empty() { return vec![]; }
    intervals.sort_by_key(|i| i[0]);
    let mut merged=vec![intervals[0]];
    for &[s,e] in &intervals[1..] {
        if s<=merged.last().unwrap()[1] { merged.last_mut().unwrap()[1]=merged.last().unwrap()[1].max(e); }
        else { merged.push([s,e]); }
    }
    merged
}

#[cfg(test)]
mod merge_intervals_tests {
    use super::*;

    #[test]
    fn test_merge_intervals() {
            let mut intervals=vec![[1,3],[2,6],[8,10],[15,18]];
            assert_eq!(merge_intervals(&mut intervals),vec![[1,6],[8,10],[15,18]]);
        }
}
