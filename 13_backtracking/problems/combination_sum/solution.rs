pub fn combination_sum(mut candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    candidates.sort();
    let mut result = vec![];
    fn bt(candidates: &[i32], start: usize, path: &mut Vec<i32>, rem: i32, result: &mut Vec<Vec<i32>>) {
        if rem == 0 { result.push(path.clone()); return; }
        for i in start..candidates.len() {
            if candidates[i] > rem { break; }
            path.push(candidates[i]); bt(candidates, i, path, rem-candidates[i], result); path.pop();
        }
    }
    bt(&candidates, 0, &mut vec![], target, &mut result); result
}

#[cfg(test)]
mod combination_sum_tests {
    use super::*;

    #[test]
    fn test_combination_sum() {
            let cs = combination_sum(vec![2,3,6,7], 7);
            assert_eq!(cs.len(), 2);
            assert!(cs.contains(&vec![7]));
        }
}
