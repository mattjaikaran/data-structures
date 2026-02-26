//! SORTING  ·  Rust

pub fn insertion_sort(arr: &[i32]) -> Vec<i32> {
    let mut a = arr.to_vec();
    for i in 1..a.len() { let key=a[i]; let mut j=i; while j>0&&a[j-1]>key{a[j]=a[j-1];j-=1;} a[j]=key; }
    a
}

pub fn merge_sort(arr: &[i32]) -> Vec<i32> {
    if arr.len()<=1 { return arr.to_vec(); }
    let mid=arr.len()/2;
    let (l,r)=(merge_sort(&arr[..mid]),merge_sort(&arr[mid..]));
    let (mut i,mut j,mut res)=(0,0,vec![]);
    while i<l.len()&&j<r.len() { if l[i]<=r[j]{res.push(l[i]);i+=1;}else{res.push(r[j]);j+=1;} }
    res.extend_from_slice(&l[i..]); res.extend_from_slice(&r[j..]); res
}

pub fn heap_sort(arr: &[i32]) -> Vec<i32> {
    let mut a=arr.to_vec(); let n=a.len();
    fn heapify(a:&mut Vec<i32>,n:usize,i:usize){let(mut m,l,r)=(i,2*i+1,2*i+2);if l<n&&a[l]>a[m]{m=l;}if r<n&&a[r]>a[m]{m=r;}if m!=i{a.swap(m,i);heapify(a,n,m);}}
    for i in (0..n/2).rev() { heapify(&mut a,n,i); }
    for i in (1..n).rev() { a.swap(0,i); heapify(&mut a,i,0); }
    a
}

pub fn counting_sort(arr: &[usize], max_val: usize) -> Vec<usize> {
    let mut cnt=vec![0usize;max_val+1];
    for &n in arr { cnt[n]+=1; }
    cnt.iter().enumerate().flat_map(|(v,&c)| std::iter::repeat(v).take(c)).collect()
}

pub fn radix_sort(arr: &[u32]) -> Vec<u32> {
    if arr.is_empty() { return vec![]; }
    let mut a=arr.to_vec(); let max=*a.iter().max().unwrap(); let mut exp=1u32;
    while max/exp>0 {
        let mut buckets:Vec<Vec<u32>>=(0..10).map(|_|vec![]).collect();
        for &n in &a { buckets[((n/exp)%10) as usize].push(n); }
        a=buckets.into_iter().flatten().collect();
        exp*=10;
    }
    a
}

pub fn quickselect(nums: &[i32], k: usize) -> i32 {
    let mut a=nums.to_vec();
    fn select(a:&mut Vec<i32>,lo:usize,hi:usize,k:usize)->i32{
        if lo==hi{return a[lo];}
        let p={let pivot=a[hi];let mut i=lo;for j in lo..hi{if a[j]<=pivot{a.swap(i,j);i+=1;}}a.swap(i,hi);i};
        if k==p{a[p]}else if k<p{select(a,lo,p-1,k)}else{select(a,p+1,hi,k)}
    }
    select(&mut a, 0, a.len()-1, k-1)
}

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

pub fn merge_intervals(intervals: &mut Vec<[i32;2]>) -> Vec<[i32;2]> {
    if intervals.is_empty() { return vec![]; }
    intervals.sort_by_key(|i| i[0]);
    let mut merged=vec![intervals[0]];
    for &[s,e] in &intervals[1..] {
        if s<=merged.last().unwrap()[1] { merged.last_mut().unwrap()[1]=merged.last().unwrap()[1].max(e); }
        else { merged.push([s,e]); }
    }
    merged
}

#[cfg(test)]
mod tests {
    use super::*;
    fn check(got: Vec<i32>, exp: Vec<i32>, name: &str) { assert_eq!(got, exp, "{}", name); }
    #[test]
    fn test_sorts() {
        let inp=vec![64,34,25,12,22,11,90];
        let exp=vec![11,12,22,25,34,64,90];
        check(insertion_sort(&inp),exp.clone(),"insertion");
        check(merge_sort(&inp),exp.clone(),"merge");
        check(heap_sort(&inp),exp.clone(),"heap");
    }
    #[test]
    fn test_counting() { assert_eq!(counting_sort(&[4,2,2,8,3,3,1],8),vec![1,2,2,3,3,4,8]); }
    #[test]
    fn test_radix() { assert_eq!(radix_sort(&[170,45,75,90,802,24,2,66]),vec![2,24,45,66,75,90,170,802]); }
    #[test]
    fn test_quickselect() { assert_eq!(quickselect(&[3,2,1,5,6,4],2),2); }
    #[test]
    fn test_dutch() { assert_eq!(dutch_national_flag(&[2,0,2,1,1,0]),vec![0,0,1,1,2,2]); }
    #[test]
    fn test_merge_intervals() {
        let mut intervals=vec![[1,3],[2,6],[8,10],[15,18]];
        assert_eq!(merge_intervals(&mut intervals),vec![[1,6],[8,10],[15,18]]);
    }
}
