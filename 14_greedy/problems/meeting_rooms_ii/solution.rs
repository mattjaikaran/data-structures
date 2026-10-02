pub fn meeting_rooms_ii(mut intervals: Vec<[i32;2]>) -> usize {
    intervals.sort_by_key(|i| i[0]);
    let mut heap: Vec<i32> = vec![];
    for [start, end] in intervals {
        if let Some(pos) = heap.iter().position(|&e| e <= start) { heap[pos] = end; }
        else { heap.push(end); }
        heap.sort();
    }
    heap.len()
}

#[cfg(test)]
mod meeting_rooms_ii_tests {
    use super::*;

    #[test]
    fn test_meeting_rooms_ii() {
            assert_eq!(meeting_rooms_ii(vec![[0,30],[5,10],[15,20]]), 2);
            assert_eq!(meeting_rooms_ii(vec![[7,10],[2,4]]), 1);
        }
}
