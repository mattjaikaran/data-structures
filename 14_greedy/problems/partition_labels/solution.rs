pub fn partition_labels(s: &str) -> Vec<usize> {
    let mut last = [0usize; 26];
    for (i, c) in s.chars().enumerate() { last[c as usize - 'a' as usize] = i; }
    let mut result = vec![]; let mut start = 0; let mut end = 0;
    for (i, c) in s.chars().enumerate() {
        end = end.max(last[c as usize - 'a' as usize]);
        if i == end { result.push(end - start + 1); start = i + 1; }
    }
    result
}

#[cfg(test)]
mod partition_labels_tests {
    use super::*;

    #[test]
    fn test_partition_labels() {
            assert_eq!(partition_labels("ababcbacadefegdehijhklij"), vec![9,7,8]);
        }
}
