pub fn boats_to_save_people(mut people: Vec<i32>, limit: i32) -> usize {
    people.sort();
    let (mut l, mut r, mut boats) = (0, people.len() - 1, 0);
    while l <= r {
        if people[l] + people[r] <= limit { l += 1; }
        if r == 0 { boats += 1; break; }
        r -= 1; boats += 1;
    }
    boats
}

#[cfg(test)]
mod boats_to_save_people_tests {
    use super::*;

    #[test]
    fn test_boats() { assert_eq!(boats_to_save_people(vec![3,2,2,1], 3), 3); assert_eq!(boats_to_save_people(vec![1,2], 3), 1); }
}
