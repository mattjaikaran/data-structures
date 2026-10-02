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

#[cfg(test)]
mod replace_words_tests {
    use super::*;

    #[test]
    fn test_replace_words() {
            assert_eq!(
                replace_words(&["cat","bat","rat"], "the cattle was rattled by the battery"),
                "the cat was rat by the bat"
            );
        }
}
