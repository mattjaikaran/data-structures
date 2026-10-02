pub fn find_all_anagrams(s: &str, p: &str) -> Vec<usize> {
    let sc: Vec<char> = s.chars().collect();
    let k = p.len();
    let mut need: HashMap<char,i32> = HashMap::new();
    for c in p.chars() { *need.entry(c).or_insert(0) += 1; }
    let mut window: HashMap<char,i32> = HashMap::new();
    let mut result = vec![];
    for (i, &c) in sc.iter().enumerate() {
        *window.entry(c).or_insert(0) += 1;
        if i >= k { let lc=sc[i-k]; let v=window.entry(lc).or_insert(0); *v-=1; if *v==0 { window.remove(&lc); } }
        if i + 1 >= k && window == need { result.push(i + 1 - k); }
    }
    result
}

#[cfg(test)]
mod find_all_anagrams_tests {
    use super::*;

    #[test]
    fn test_find_all_anagrams() {
            assert_eq!(find_all_anagrams("cbaebabacd","abc"), vec![0,6]);
            assert_eq!(find_all_anagrams("abab","ab"), vec![0,1,2]);
        }
}
