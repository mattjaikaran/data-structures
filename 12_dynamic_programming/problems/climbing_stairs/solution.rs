pub fn climbing_stairs(n: usize) -> usize {
    if n <= 2 { return n; }
    let (mut a, mut b) = (1, 2);
    for _ in 3..=n { let c=a+b; a=b; b=c; }
    b
}

#[cfg(test)]
mod climbing_stairs_tests {
    use super::*;

    #[test]
    fn test_climbing() { assert_eq!(climbing_stairs(5),8); assert_eq!(climbing_stairs(2),2); }
}
