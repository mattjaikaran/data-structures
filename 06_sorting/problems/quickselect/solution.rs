pub fn quickselect(nums: &[i32], k: usize) -> i32 {
    let mut a=nums.to_vec();
    fn select(a:&mut Vec<i32>,lo:usize,hi:usize,k:usize)->i32{
        if lo==hi{return a[lo];}
        let p={let pivot=a[hi];let mut i=lo;for j in lo..hi{if a[j]<=pivot{a.swap(i,j);i+=1;}}a.swap(i,hi);i};
        if k==p{a[p]}else if k<p{select(a,lo,p-1,k)}else{select(a,p+1,hi,k)}
    }
    let n = a.len();
    select(&mut a, 0, n-1, k-1)
}

#[cfg(test)]
mod quickselect_tests {
    use super::*;

    #[test]
    fn test_quickselect() { assert_eq!(quickselect(&[3,2,1,5,6,4],2),2); }
}
