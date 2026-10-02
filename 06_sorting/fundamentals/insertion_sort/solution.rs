pub fn insertion_sort(arr: &[i32]) -> Vec<i32> {
    let mut a = arr.to_vec();
    for i in 1..a.len() { let key=a[i]; let mut j=i; while j>0&&a[j-1]>key{a[j]=a[j-1];j-=1;} a[j]=key; }
    a
}

#[cfg(test)]
mod insertion_sort_tests {
    use super::*;

    #[test]
    fn test_sorts() {
            let inp=vec![64,34,25,12,22,11,90];
            let exp=vec![11,12,22,25,34,64,90];
            assert_eq!(insertion_sort(&inp), exp);
        }
}
