pub fn meeting_rooms(mut intervals: Vec<[i32;2]>) -> bool {
    intervals.sort_by_key(|i| i[0]);
    for i in 1..intervals.len() { if intervals[i][0] < intervals[i-1][1] { return false; } }
    true
}

#[cfg(test)]
mod meeting_rooms_tests {
    use super::*;

    #[test]
    fn test_meeting_rooms() {
            assert!(!meeting_rooms(vec![[0,30],[5,10],[15,20]]));
            assert!(meeting_rooms(vec![[7,10],[2,4]]));
        }
}
