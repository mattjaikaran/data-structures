pub fn single_number_iii(nums: &[i32]) -> (i32, i32) {
    let xor=nums.iter().fold(0,|a,&b|a^b);
    let diff=xor&(-xor);
    let (mut a,mut b)=(0,0);
    for &n in nums { if n&diff!=0{a^=n;}else{b^=n;} }
    (a,b)
}

#[cfg(test)]
mod single_number_iii_tests {
    use super::*;

    #[test]
    fn test_single_iii() { let(a,b)=single_number_iii(&[1,2,1,3,2,5]); let s=std::collections::HashSet::from([a,b]); assert!(s.contains(&3)&&s.contains(&5)); }
}
