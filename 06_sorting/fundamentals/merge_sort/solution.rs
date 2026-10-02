pub fn merge_sort(arr: &[i32]) -> Vec<i32> {
    if arr.len()<=1 { return arr.to_vec(); }
    let mid=arr.len()/2;
    let (l,r)=(merge_sort(&arr[..mid]),merge_sort(&arr[mid..]));
    let (mut i,mut j,mut res)=(0,0,vec![]);
    while i<l.len()&&j<r.len() { if l[i]<=r[j]{res.push(l[i]);i+=1;}else{res.push(r[j]);j+=1;} }
    res.extend_from_slice(&l[i..]); res.extend_from_slice(&r[j..]); res
}

#[cfg(test)]
mod merge_sort_tests {
    use super::*;

    #[test]
    fn test_sorts() {
            let inp=vec![64,34,25,12,22,11,90];
            let exp=vec![11,12,22,25,34,64,90];
            assert_eq!(merge_sort(&inp), exp);
        }
}
