pub fn z_array(s: &str) -> Vec<usize> {
    let b = s.as_bytes(); let n = b.len();
    let mut z = vec![0usize; n]; z[0] = n;
    let (mut l, mut r) = (0, 0);
    for i in 1..n {
        if i < r { z[i] = (r - i).min(z[i - l]); }
        while i + z[i] < n && b[z[i]] == b[i + z[i]] { z[i] += 1; }
        if i + z[i] > r { l = i; r = i + z[i]; }
    }
    z
}

pub fn z_search(text: &str, pattern: &str) -> Vec<usize> {
    let s = format!("{}${}", pattern, text);
    let z = z_array(&s); let m = pattern.len();
    z.iter().enumerate()
        .filter(|&(i, &v)| v == m && i > m)
        .map(|(i, _)| i - m - 1)
        .collect()
}

#[cfg(test)]
mod z_search_tests {
    use super::*;

    #[test]
    fn test_z_search() {
            assert_eq!(z_search("abcabcabc","abc"), vec![0,3,6]);
        }
}
