#[derive(Default)]
pub struct TrieNode {
    pub children: HashMap<char, TrieNode>,
    pub is_end: bool,
    pub count: usize,
}

#[derive(Default)]
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

#[cfg(test)]
mod trie_tests {
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
}
