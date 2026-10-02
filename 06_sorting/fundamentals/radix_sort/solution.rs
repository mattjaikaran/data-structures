pub fn radix_sort(arr: &[u32]) -> Vec<u32> {
    if arr.is_empty() { return vec![]; }
    let mut a=arr.to_vec(); let max=*a.iter().max().unwrap(); let mut exp=1u32;
    while max/exp>0 {
        let mut buckets:Vec<Vec<u32>>=(0..10).map(|_|vec![]).collect();
        for &n in &a { buckets[((n/exp)%10) as usize].push(n); }
        a=buckets.into_iter().flatten().collect();
        exp*=10;
    }
    a
}

#[cfg(test)]
mod radix_sort_tests {
    use super::*;

    #[test]
    fn test_radix() { assert_eq!(radix_sort(&[170,45,75,90,802,24,2,66]),vec![2,24,45,66,75,90,170,802]); }
}
