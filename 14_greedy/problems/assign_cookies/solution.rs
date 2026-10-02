pub fn assign_cookies(mut greed: Vec<i32>, mut sizes: Vec<i32>) -> usize {
    greed.sort(); sizes.sort();
    let (mut child, mut cookie) = (0, 0);
    while child < greed.len() && cookie < sizes.len() {
        if sizes[cookie] >= greed[child] { child += 1; }
        cookie += 1;
    }
    child
}

#[cfg(test)]
mod assign_cookies_tests {
    use super::*;

    #[test]
    fn test_assign_cookies() {
            assert_eq!(assign_cookies(vec![1,2,3], vec![1,1]), 1);
        }
}
