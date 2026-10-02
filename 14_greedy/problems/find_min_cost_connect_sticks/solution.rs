pub fn find_min_cost_sticks(sticks: Vec<i32>) -> i32 {
    use std::collections::BinaryHeap;
    use std::cmp::Reverse;
    let mut h: BinaryHeap<Reverse<i32>> = sticks.into_iter().map(Reverse).collect();
    let mut cost = 0;
    while h.len() > 1 {
        let a = h.pop().unwrap().0; let b = h.pop().unwrap().0;
        cost += a + b; h.push(Reverse(a + b));
    }
    cost
}

#[cfg(test)]
mod find_min_cost_connect_sticks_tests {
    use super::*;

    #[test]
    fn test_find_min_cost_sticks() {
            assert_eq!(find_min_cost_sticks(vec![2,4,3]), 14);
        }
}
