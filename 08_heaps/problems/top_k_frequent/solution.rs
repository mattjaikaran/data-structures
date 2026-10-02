pub fn top_k_frequent(nums: &[i32], k: usize) -> Vec<i32> {
    let mut cnt: HashMap<i32,i32> = HashMap::new();
    for &n in nums { *cnt.entry(n).or_insert(0) += 1; }
    let mut v: Vec<(i32,i32)> = cnt.into_iter().collect();
    v.sort_by(|a,b| b.1.cmp(&a.1));
    v.into_iter().take(k).map(|(n,_)| n).collect()
}

#[cfg(test)]
mod top_k_frequent_tests {
    use super::*;

    #[test]
    fn test_top_k_frequent() {
            let r = top_k_frequent(&[1,1,1,2,2,3], 2);
            assert!(r.contains(&1) && r.contains(&2));
        }
}
