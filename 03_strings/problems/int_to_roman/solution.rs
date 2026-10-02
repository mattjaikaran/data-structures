pub fn int_to_roman(mut num: i32) -> String {
    let vals = [(1000,"M"),(900,"CM"),(500,"D"),(400,"CD"),(100,"C"),(90,"XC"),(50,"L"),(40,"XL"),(10,"X"),(9,"IX"),(5,"V"),(4,"IV"),(1,"I")];
    let mut res = String::new();
    for (v, s) in vals { while num >= v { res.push_str(s); num -= v; } }
    res
}

#[cfg(test)]
mod int_to_roman_tests {
    use super::*;

    #[test]
    fn test_roman() {
            assert_eq!(roman_to_int("MCMXCIV"), 1994);
            assert_eq!(int_to_roman(1994), "MCMXCIV");
        }
}
