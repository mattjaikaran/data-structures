pub fn dutch_national_flag(arr: &[i32]) -> Vec<i32> {
    let mut a=arr.to_vec(); let(mut lo,mut mid,mut hi)=(0,0,a.len()-1);
    while mid<=hi {
        match a[mid] {
            0=>{a.swap(lo,mid);lo+=1;mid+=1;}
            1=>mid+=1,
            _=>{a.swap(mid,hi);if hi==0{break;}hi-=1;}
        }
    }
    a
}

#[cfg(test)]
mod dutch_national_flag_tests {
    use super::*;

    #[test]
    fn test_dutch() { assert_eq!(dutch_national_flag(&[2,0,2,1,1,0]),vec![0,0,1,1,2,2]); }
}
