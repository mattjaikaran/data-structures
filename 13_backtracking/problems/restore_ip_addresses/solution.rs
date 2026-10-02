pub fn restore_ip_addresses(s: &str) -> Vec<String> {
    let bytes: Vec<char> = s.chars().collect();
    let mut result = vec![];
    fn bt(bytes: &[char], start: usize, parts: &mut Vec<String>, result: &mut Vec<String>) {
        if parts.len() == 4 {
            if start == bytes.len() { result.push(parts.join(".")); }
            return;
        }
        for len in 1..=3usize {
            if start + len > bytes.len() { break; }
            let seg: String = bytes[start..start+len].iter().collect();
            if seg.len() > 1 && seg.starts_with('0') { break; }
            if seg.parse::<u32>().unwrap_or(256) > 255 { break; }
            parts.push(seg); bt(bytes, start+len, parts, result); parts.pop();
        }
    }
    bt(&bytes, 0, &mut vec![], &mut result); result
}

#[cfg(test)]
mod restore_ip_addresses_tests {
    use super::*;

    #[test]
    fn test_restore_ip() {
            let ips = restore_ip_addresses("25525511135");
            assert!(ips.contains(&"255.255.11.135".to_string()));
            assert!(ips.contains(&"255.255.111.35".to_string()));
        }
}
