pub fn subsets_with_dup(nums: &mut [i32]) -> Vec<Vec<i32>> {
    nums.sort();
    let mut result = vec![];
    fn bt(nums: &[i32], start: usize, path: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
        result.push(path.clone());
        for i in start..nums.len() {
            if i > start && nums[i] == nums[i-1] { continue; }
            path.push(nums[i]); bt(nums, i+1, path, result); path.pop();
        }
    }
    bt(nums, 0, &mut vec![], &mut result); result
}

#[cfg(test)]
mod subsets_with_dup_tests {
    use super::*;

    #[test]
    fn test_subsets_with_dup() {
            let mut values = [2, 1, 2];
            let mut actual = subsets_with_dup(&mut values);
            actual.sort();
            assert_eq!(actual, vec![vec![], vec![1], vec![1,2], vec![1,2,2], vec![2], vec![2,2]]);
        }
}
