pub fn roman_to_int(s: &str) -> i32 {
    let val = |c| match c { 'I'=>1,'V'=>5,'X'=>10,'L'=>50,'C'=>100,'D'=>500,'M'=>1000,_=>0i32 };
    let chars: Vec<char> = s.chars().collect();
    let mut result = 0;
    for i in 0..chars.len() {
        if i + 1 < chars.len() && val(chars[i]) < val(chars[i+1]) { result -= val(chars[i]); }
        else { result += val(chars[i]); }
    }
    result
}

#[cfg(test)]
mod roman_to_int_tests {
    use super::*;

    #[test]
    fn test_roman() {
            assert_eq!(roman_to_int("MCMXCIV"), 1994);
            assert_eq!(int_to_roman(1994), "MCMXCIV");
        }
}
