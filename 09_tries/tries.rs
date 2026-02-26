//! TRIES  ·  Rust
//! HashMap-based trie node (vs fixed [Option<Box<Node>>; 26] array).
//! HashMap approach: flexible alphabet, cleaner code.
//! Array approach: faster for lowercase ASCII only.
use std::collections::HashMap;

#[derive(Default)]
pub struct TrieNode {
    pub children: HashMap<char, TrieNode>,
    pub is_end: bool,
    pub count: usize,
}

pub struct Trie { root: TrieNode }

impl Trie {
    pub fn new() -> Self { Trie { root: TrieNode::default() } }

    pub fn insert(&mut self, word: &str) {
        let mut node = &mut self.root;
        for c in word.chars() { node = node.children.entry(c).or_default(); node.count += 1; }
        node.is_end = true;
    }

    pub fn search(&self, word: &str) -> bool {
        let mut node = &self.root;
        for c in word.chars() { match node.children.get(&c) { None => return false, Some(n) => node = n, } }
        node.is_end
    }

    pub fn starts_with(&self, prefix: &str) -> bool {
        let mut node = &self.root;
        for c in prefix.chars() { match node.children.get(&c) { None => return false, Some(n) => node = n, } }
        true
    }

    pub fn autocomplete(&self, prefix: &str) -> Vec<String> {
        let mut node = &self.root;
        for c in prefix.chars() { match node.children.get(&c) { None => return vec![], Some(n) => node = n, } }
        let mut results = vec![];
        Self::dfs(node, prefix.to_string(), &mut results);
        results
    }

    fn dfs(node: &TrieNode, cur: String, results: &mut Vec<String>) {
        if node.is_end { results.push(cur.clone()); }
        let mut keys: Vec<char> = node.children.keys().copied().collect(); keys.sort();
        for c in keys { Self::dfs(node.children.get(&c).unwrap(), format!("{}{}", cur, c), results); }
    }
}

// Wildcard trie — '.' matches any character
pub struct WildcardTrie { root: TrieNode }
impl WildcardTrie {
    pub fn new() -> Self { WildcardTrie { root: TrieNode::default() } }
    pub fn insert(&mut self, word: &str) {
        let mut node = &mut self.root;
        for c in word.chars() { node = node.children.entry(c).or_default(); }
        node.is_end = true;
    }
    pub fn search(&self, word: &str) -> bool {
        let chars: Vec<char> = word.chars().collect();
        Self::dfs_wc(&self.root, &chars, 0)
    }
    fn dfs_wc(node: &TrieNode, chars: &[char], i: usize) -> bool {
        if i == chars.len() { return node.is_end; }
        if chars[i] == '.' { node.children.values().any(|child| Self::dfs_wc(child, chars, i+1)) }
        else { node.children.get(&chars[i]).map_or(false, |child| Self::dfs_wc(child, chars, i+1)) }
    }
}

// ── Problems ──────────────────────────────────
pub fn replace_words(dictionary: &[&str], sentence: &str) -> String {
    let mut t = Trie::new(); for &w in dictionary { t.insert(w); }
    sentence.split_whitespace().map(|word| {
        let mut node = &t.root; let mut replacement = String::new();
        for c in word.chars() {
            match node.children.get(&c) { None => break, Some(n) => { node = n; replacement.push(c); if node.is_end { break; } } }
        }
        if node.is_end { replacement } else { word.to_string() }
    }).collect::<Vec<_>>().join(" ")
}

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
mod tests {
    use super::*;
    #[test]
    fn test_trie_basic() {
        let mut t = Trie::new();
        for w in ["apple","app","application","apply"] { t.insert(w); }
        assert!(t.search("apple") && t.search("app"));
        assert!(!t.search("ap") && !t.search("apples"));
        assert!(t.starts_with("app") && !t.starts_with("xyz"));
    }
    #[test]
    fn test_autocomplete() {
        let mut t = Trie::new();
        for w in ["apple","app","application","apply"] { t.insert(w); }
        assert_eq!(t.autocomplete("app"), vec!["app","apple","application","apply"]);
        assert!(t.autocomplete("xyz").is_empty());
    }
    #[test]
    fn test_wildcard() {
        let mut wt = WildcardTrie::new();
        for w in ["bad","dad","mad"] { wt.insert(w); }
        assert!(wt.search("bad") && wt.search(".ad") && wt.search("b.."));
        assert!(!wt.search("pad") && !wt.search("ba"));
    }
    #[test]
    fn test_replace_words() {
        assert_eq!(
            replace_words(&["cat","bat","rat"], "the cattle was rattled by the battery"),
            "the cat was rat by the bat"
        );
    }
    #[test]
    fn test_longest_word() {
        assert_eq!(longest_word_in_dictionary(&["w","wo","wor","worl","world"]), "world");
    }
}
