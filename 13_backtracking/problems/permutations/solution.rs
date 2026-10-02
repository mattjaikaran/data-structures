pub fn permutations(nums: &[i32]) -> Vec<Vec<i32>> {
    let mut result = vec![];
    let mut used = vec![false; nums.len()];
    fn bt(nums: &[i32], used: &mut Vec<bool>, path: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
        if path.len() == nums.len() { result.push(path.clone()); return; }
        for i in 0..nums.len() {
            if used[i] { continue; }
            used[i] = true; path.push(nums[i]); bt(nums, used, path, result);
            path.pop(); used[i] = false;
        }
    }
    bt(nums, &mut used, &mut vec![], &mut result); result
}

#[cfg(test)]
mod permutations_tests {
    use super::*;

    #[test]
    fn test_permutations() {
            assert_eq!(permutations(&[1,2,3]).len(), 6);
        }
}
