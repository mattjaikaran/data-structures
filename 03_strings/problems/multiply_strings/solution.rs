pub fn multiply_strings(num1: &str, num2: &str) -> String {
    let (m, n) = (num1.len(), num2.len());
    let mut pos = vec![0u32; m + n];
    let b1: Vec<u32> = num1.bytes().map(|b| (b - b'0') as u32).collect();
    let b2: Vec<u32> = num2.bytes().map(|b| (b - b'0') as u32).collect();
    for i in (0..m).rev() {
        for j in (0..n).rev() {
            let mul = b1[i] * b2[j];
            let (p1, p2) = (i + j, i + j + 1);
            let total = mul + pos[p2];
            pos[p2] = total % 10; pos[p1] += total / 10;
        }
    }
    let s: String = pos.iter().map(|&d| char::from_digit(d, 10).unwrap()).collect();
    let trimmed = s.trim_start_matches('0');
    if trimmed.is_empty() { "0".to_string() } else { trimmed.to_string() }
}

#[cfg(test)]
mod multiply_strings_tests {
    use super::*;

    #[test]
    fn test_multiply() {
            assert_eq!(multiply_strings("123","456"), "56088");
            assert_eq!(multiply_strings("0","0"), "0");
        }
}
