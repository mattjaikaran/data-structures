//! BIT MANIPULATION  ·  Rust

pub fn get_bit(n: i32, i: u32) -> i32 { (n >> i) & 1 }
pub fn set_bit(n: i32, i: u32) -> i32 { n | (1 << i) }
pub fn clear_bit(n: i32, i: u32) -> i32 { n & !(1 << i) }
pub fn is_power_of_two(n: i32) -> bool { n > 0 && (n & (n-1)) == 0 }
pub fn count_set_bits(mut n: u32) -> u32 { let mut c=0; while n>0{n&=n-1;c+=1;} c }

pub fn single_number(nums: &[i32]) -> i32 { nums.iter().fold(0,|a,&b|a^b) }

pub fn single_number_ii(nums: &[i32]) -> i32 {
    let (mut ones, mut twos) = (0i32, 0i32);
    for &n in nums { ones=(ones^n)&!twos; twos=(twos^n)&!ones; }
    ones
}

pub fn single_number_iii(nums: &[i32]) -> (i32, i32) {
    let xor=nums.iter().fold(0,|a,&b|a^b);
    let diff=xor&(-xor);
    let (mut a,mut b)=(0,0);
    for &n in nums { if n&diff!=0{a^=n;}else{b^=n;} }
    (a,b)
}

pub fn reverse_bits(mut n: u32) -> u32 {
    let mut res=0u32;
    for _ in 0..32 { res=(res<<1)|(n&1); n>>=1; }
    res
}

pub fn missing_number(nums: &[usize]) -> usize {
    let mut res=nums.len();
    for (i,&n) in nums.iter().enumerate() { res^=i^n; }
    res
}

pub fn count_bits_range(n: usize) -> Vec<usize> {
    let mut dp=vec![0usize;n+1];
    for i in 1..=n { dp[i]=dp[i>>1]+(i&1); }
    dp
}

pub fn hamming_distance(x: i32, y: i32) -> u32 { (x^y).count_ones() }

pub fn bitwise_and_range(mut left: i32, mut right: i32) -> i32 {
    let mut shift=0;
    while left!=right { left>>=1; right>>=1; shift+=1; }
    left<<shift
}

pub fn maximum_xor(nums: &[i32]) -> i32 {
    let (mut max_xor,mut prefix)=(0i32,0i32);
    for i in (0..32).rev() {
        prefix|=1<<i;
        let prefixes:std::collections::HashSet<i32>=nums.iter().map(|&n|n&prefix).collect();
        let candidate=max_xor|(1<<i);
        if prefixes.iter().any(|&p|prefixes.contains(&(candidate^p))) { max_xor=candidate; }
    }
    max_xor
}

pub fn subsets_bitmask(nums: &[i32]) -> Vec<Vec<i32>> {
    (0..1<<nums.len()).map(|mask| (0..nums.len()).filter(|&i|(mask>>i)&1==1).map(|i|nums[i]).collect()).collect()
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test] fn test_bits() { assert_eq!(get_bit(0b1010,1),1); assert_eq!(set_bit(0b1010,0),0b1011); assert_eq!(clear_bit(0b1011,0),0b1010); }
    #[test] fn test_power() { assert!(is_power_of_two(16)&&!is_power_of_two(6)); }
    #[test] fn test_single() { assert_eq!(single_number(&[4,1,2,1,2]),4); }
    #[test] fn test_single_ii() { assert_eq!(single_number_ii(&[2,2,3,2]),3); }
    #[test] fn test_single_iii() { let(a,b)=single_number_iii(&[1,2,1,3,2,5]); let s=std::collections::HashSet::from([a,b]); assert!(s.contains(&3)&&s.contains(&5)); }
    #[test] fn test_reverse() { assert_eq!(reverse_bits(43261596),964176192); }
    #[test] fn test_missing() { assert_eq!(missing_number(&[3,0,1]),2); }
    #[test] fn test_count_range() { assert_eq!(count_bits_range(5),vec![0,1,1,2,1,2]); }
    #[test] fn test_hamming() { assert_eq!(hamming_distance(1,4),2); }
    #[test] fn test_and_range() { assert_eq!(bitwise_and_range(5,7),4); }
    #[test] fn test_max_xor() { assert_eq!(maximum_xor(&[3,10,5,25,2,8]),28); }
    #[test] fn test_subsets() { assert_eq!(subsets_bitmask(&[1,2,3]).len(),8); }
}
