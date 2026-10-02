pub fn candy(ratings: &[i32]) -> i32 {
    let n = ratings.len();
    let mut c = vec![1i32; n];
    for i in 1..n { if ratings[i] > ratings[i-1] { c[i] = c[i-1]+1; } }
    for i in (0..n-1).rev() { if ratings[i] > ratings[i+1] { c[i] = c[i].max(c[i+1]+1); } }
    c.iter().sum()
}

#[cfg(test)]
mod candy_tests {
    use super::*;

    #[test]
    fn test_candy() {
            assert_eq!(candy(&[1,0,2]), 5);
            assert_eq!(candy(&[1,2,2]), 4);
        }
}
