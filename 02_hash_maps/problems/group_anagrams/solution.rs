pub fn group_anagrams(strs: &[&str]) -> Vec<Vec<String>> {
    let mut map: HashMap<Vec<char>, Vec<String>> = HashMap::new();
    for &s in strs {
        let mut key: Vec<char> = s.chars().collect(); key.sort();
        map.entry(key).or_default().push(s.to_string());
    }
    map.into_values().collect()
}

#[cfg(test)]
mod group_anagrams_tests {
    use super::*;

    #[test]
    fn test_group_anagrams() {
            let r = group_anagrams(&["eat","tea","tan","ate","nat","bat"]);
            assert_eq!(r.len(), 3);
        }
}
