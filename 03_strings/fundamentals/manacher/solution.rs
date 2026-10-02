pub fn manacher(s: &str) -> String {
    let chars: Vec<char> = s.chars().collect();
    let mut t = vec!['#'];
    for c in &chars { t.push(*c); t.push('#'); }
    let n = t.len();
    let mut p = vec![0i64; n];
    let (mut c, mut r) = (0i64, 0i64);
    for i in 0..n as i64 {
        if i < r { p[i as usize] = (r - i).min(p[(2*c-i) as usize]); }
        while i - p[i as usize] - 1 >= 0 && i + p[i as usize] + 1 < n as i64
            && t[(i - p[i as usize] - 1) as usize] == t[(i + p[i as usize] + 1) as usize]
        { p[i as usize] += 1; }
        if i + p[i as usize] > r { c = i; r = i + p[i as usize]; }
    }
    let center = p.iter().enumerate().max_by_key(|&(_, v)| v).map(|(i, _)| i).unwrap();
    let start = (center as i64 - p[center]) / 2;
    chars[start as usize..(start + p[center]) as usize].iter().collect()
}

#[cfg(test)]
mod manacher_tests {
    use super::*;

    #[test]
    fn test_manacher() {
            assert!(["bab","aba"].contains(&manacher("babad").as_str()));
            assert_eq!(manacher("cbbd"), "bb");
            assert_eq!(manacher("racecar"), "racecar");
        }
}
