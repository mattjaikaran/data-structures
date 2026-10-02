pub fn max_product(nums: &[i32]) -> i32 {
    let (mut best, mut cur_max, mut cur_min) = (nums[0], nums[0], nums[0]);
    for &n in &nums[1..] {
        let (a,b) = (cur_max,cur_min);
        cur_max = n.max(a*n).max(b*n);
        cur_min = n.min(a*n).min(b*n);
        best = best.max(cur_max);
    }
    best
}

#[cfg(test)]
mod max_product_tests {
    use super::*;

    #[test]
    fn test_max_product() { assert_eq!(max_product(&[2,3,-2,4]),6); assert_eq!(max_product(&[-2,3,-4]),24); }
}
