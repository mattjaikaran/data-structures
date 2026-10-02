pub fn longest_word_in_dictionary(words: &[&str]) -> String {
    let mut t = Trie::new(); for &w in words { t.insert(w); }
    let mut best = String::new();
    fn dfs(node: &TrieNode, cur: &str, best: &mut String) {
        if cur.len() > best.len() || (cur.len() == best.len() && cur < best.as_str()) { *best = cur.to_string(); }
        let mut keys: Vec<char> = node.children.keys().copied().collect(); keys.sort();
        for c in keys { let child = node.children.get(&c).unwrap(); if child.is_end { dfs(child, &format!("{}{}", cur, c), best); } }
    }
    dfs(&t.root, "", &mut best); best
}

#[cfg(test)]
mod longest_word_in_dictionary_tests {
    use super::*;

    #[test]
    fn test_longest_word() {
            assert_eq!(longest_word_in_dictionary(&["w","wo","wor","worl","world"]), "world");
        }
}
