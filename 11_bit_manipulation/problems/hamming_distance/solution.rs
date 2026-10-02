pub fn hamming_distance(x: i32, y: i32) -> u32 { (x^y).count_ones() }

#[cfg(test)]
mod hamming_distance_tests {
    use super::*;

    #[test]
    fn test_hamming() { assert_eq!(hamming_distance(1,4),2); }
}
