/// 🟡 Decode String (LC #394)
pub fn decode_string(s: &str) -> String {
    let mut count_stack: Vec<usize> = Vec::new();
    let mut str_stack: Vec<String> = Vec::new();
    let mut current = String::new();
    let mut k: usize = 0;
    for ch in s.chars() {
        match ch {
            '0'..='9' => k = k * 10 + (ch as usize - '0' as usize),
            '[' => { count_stack.push(k); str_stack.push(current.clone()); current.clear(); k = 0; }
            ']' => {
                let times = count_stack.pop().unwrap();
                let prev = str_stack.pop().unwrap();
                current = prev + &current.repeat(times);
            }
            _ => current.push(ch),
        }
    }
    current
}

#[cfg(test)]
mod decode_string_tests {
    use super::*;

    #[test]
    fn test_decode_string() {
            assert_eq!(decode_string("3[a2[c]]"), "accaccacc");
            assert_eq!(decode_string("3[a]2[bc]"), "aaabcbc");
        }
}
