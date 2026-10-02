pub fn merge_k_sorted(lists: Vec<Vec<i32>>) -> Vec<i32> {
    // Heap entries: (value, list_idx, elem_idx)
    let mut h: BinaryHeap<Reverse<(i32,usize,usize)>> = BinaryHeap::new();
    for (i, lst) in lists.iter().enumerate() { if !lst.is_empty() { h.push(Reverse((lst[0],i,0))); } }
    let mut result = vec![];
    while let Some(Reverse((val,i,j))) = h.pop() {
        result.push(val);
        if j+1 < lists[i].len() { h.push(Reverse((lists[i][j+1],i,j+1))); }
    }
    result
}

#[cfg(test)]
mod merge_k_sorted_tests {
    use super::*;

    #[test]
    fn test_merge_k_sorted() {
            assert_eq!(merge_k_sorted(vec![vec![1,4,5],vec![1,3,4],vec![2,6]]), vec![1,1,2,3,4,4,5,6]);
        }
}
