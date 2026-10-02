pub fn subsets(nums: &[i32]) -> Vec<Vec<i32>> {
    let mut result = vec![];
    fn bt(nums: &[i32], start: usize, path: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
        result.push(path.clone());
        for i in start..nums.len() {
            path.push(nums[i]); bt(nums, i+1, path, result); path.pop();
        }
    }
    bt(nums, 0, &mut vec![], &mut result); result
}

#[cfg(test)]
mod subsets_tests {
    use super::*;

    #[test]
    fn test_subsets() {
            assert_eq!(subsets(&[1,2,3]).len(), 8);
            assert!(subsets(&[1,2,3]).contains(&vec![]));
        }
}
