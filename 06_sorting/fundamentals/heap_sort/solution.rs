pub fn heap_sort(arr: &[i32]) -> Vec<i32> {
    let mut a=arr.to_vec(); let n=a.len();
    fn heapify(a:&mut Vec<i32>,n:usize,i:usize){let(mut m,l,r)=(i,2*i+1,2*i+2);if l<n&&a[l]>a[m]{m=l;}if r<n&&a[r]>a[m]{m=r;}if m!=i{a.swap(m,i);heapify(a,n,m);}}
    for i in (0..n/2).rev() { heapify(&mut a,n,i); }
    for i in (1..n).rev() { a.swap(0,i); heapify(&mut a,i,0); }
    a
}

#[cfg(test)]
mod heap_sort_tests {
    use super::*;

    #[test]
    fn test_sorts() {
            let inp=vec![64,34,25,12,22,11,90];
            let exp=vec![11,12,22,25,34,64,90];
            assert_eq!(heap_sort(&inp), exp);
        }
}
