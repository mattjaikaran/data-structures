pub fn counting_sort(arr: &[usize], max_val: usize) -> Vec<usize> {
    let mut cnt=vec![0usize;max_val+1];
    for &n in arr { cnt[n]+=1; }
    cnt.iter().enumerate().flat_map(|(v,&c)| std::iter::repeat(v).take(c)).collect()
}

#[cfg(test)]
mod counting_sort_tests {
    use super::*;

    #[test]
    fn test_counting() { assert_eq!(counting_sort(&[4,2,2,8,3,3,1],8),vec![1,2,2,3,3,4,8]); }
}
