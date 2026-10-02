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

#[cfg(test)]
mod wildcard_trie_tests {
    use super::*;

    #[test]
    fn test_wildcard() {
            let mut wt = WildcardTrie::new();
            for w in ["bad","dad","mad"] { wt.insert(w); }
            assert!(wt.search("bad") && wt.search(".ad") && wt.search("b.."));
            assert!(!wt.search("pad") && !wt.search("ba"));
        }
}
