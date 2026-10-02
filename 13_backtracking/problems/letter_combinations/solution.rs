pub fn letter_combinations(digits: &str) -> Vec<String> {
    if digits.is_empty() { return vec![]; }
    let phone = |c| match c { '2'=>"abc",'3'=>"def",'4'=>"ghi",'5'=>"jkl",
                               '6'=>"mno",'7'=>"pqrs",'8'=>"tuv",'9'=>"wxyz",_=>"" };
    let chars: Vec<char> = digits.chars().collect();
    let mut result = vec![];
    fn bt(chars: &[char], i: usize, path: &mut Vec<char>, result: &mut Vec<String>, phone: &dyn Fn(char)->&'static str) {
        if i == chars.len() { result.push(path.iter().collect()); return; }
        for c in phone(chars[i]).chars() { path.push(c); bt(chars, i+1, path, result, phone); path.pop(); }
    }
    bt(&chars, 0, &mut vec![], &mut result, &phone); result
}

#[cfg(test)]
mod letter_combinations_tests {
    use super::*;

    #[test]
    fn test_letter_combinations() {
            let mut lc = letter_combinations("23");
            lc.sort();
            assert_eq!(lc.len(), 9);
            assert!(lc.contains(&"ad".to_string()));
        }
}
