//! HEAPS  ·  Rust
//! BinaryHeap is a max-heap by default. Use Reverse<T> for min-heap.
//! Pattern: `BinaryHeap<Reverse<T>>` = min-heap (most idiomatic Rust approach).
use std::collections::{BinaryHeap, HashMap};
use std::cmp::Reverse;

// ── Manual MinHeap for learning purposes ──────
pub struct MinHeap { data: Vec<i32> }
impl MinHeap {
    pub fn new() -> Self { MinHeap { data: vec![] } }
    pub fn push(&mut self, v: i32) { self.data.push(v); self.bubble_up(self.data.len()-1); }
    pub fn pop(&mut self) -> Option<i32> {
        if self.data.is_empty() { return None; }
        let n = self.data.len()-1; self.data.swap(0, n);
        let top = self.data.pop();
        if !self.data.is_empty() { self.sink_down(0); }
        top
    }
    pub fn peek(&self) -> Option<i32> { self.data.first().copied() }
    pub fn len(&self) -> usize { self.data.len() }
    fn bubble_up(&mut self, mut i: usize) {
        while i > 0 { let p=(i-1)/2; if self.data[p]<=self.data[i] { break; } self.data.swap(p,i); i=p; }
    }
    fn sink_down(&mut self, mut i: usize) {
        let n=self.data.len();
        loop { let mut m=i; let (l,r)=(2*i+1,2*i+2);
            if l<n&&self.data[l]<self.data[m] { m=l; } if r<n&&self.data[r]<self.data[m] { m=r; }
            if m==i { break; } self.data.swap(m,i); i=m; }
    }
}

// ── Problems using std BinaryHeap ─────────────
pub fn kth_largest(nums: &[i32], k: usize) -> i32 {
    // Min-heap of size k: top is the kth largest
    let mut h: BinaryHeap<Reverse<i32>> = BinaryHeap::new();
    for &n in nums { h.push(Reverse(n)); if h.len() > k { h.pop(); } }
    h.peek().unwrap().0
}

pub fn top_k_frequent(nums: &[i32], k: usize) -> Vec<i32> {
    let mut cnt: HashMap<i32,i32> = HashMap::new();
    for &n in nums { *cnt.entry(n).or_insert(0) += 1; }
    let mut v: Vec<(i32,i32)> = cnt.into_iter().collect();
    v.sort_by(|a,b| b.1.cmp(&a.1));
    v.into_iter().take(k).map(|(n,_)| n).collect()
}

pub fn merge_k_sorted(lists: Vec<Vec<i32>>) -> Vec<i32> {
    // Heap entries: (value, list_idx, elem_idx)
    let mut h: BinaryHeap<Reverse<(i32,usize,usize)>> = BinaryHeap::new();
    for (i, lst) in lists.iter().enumerate() { if !lst.is_empty() { h.push(Reverse((lst[0],i,0))); } }
    let mut result = vec![];
    while let Some(Reverse((val,i,j))) = h.pop() {
        result.push(val);
        if j+1 < lists[i].len() { h.push(Reverse((lists[i][j+1],i,j+1))); }
    }
    result
}

pub struct MedianFinder {
    lo: BinaryHeap<i32>,          // max-heap, lower half
    hi: BinaryHeap<Reverse<i32>>, // min-heap, upper half
}
impl MedianFinder {
    pub fn new() -> Self { MedianFinder { lo: BinaryHeap::new(), hi: BinaryHeap::new() } }
    pub fn add_num(&mut self, n: i32) {
        self.lo.push(n);
        self.hi.push(Reverse(self.lo.pop().unwrap()));
        if self.hi.len() > self.lo.len() { self.lo.push(self.hi.pop().unwrap().0); }
    }
    pub fn find_median(&self) -> f64 {
        if self.lo.len() > self.hi.len() { *self.lo.peek().unwrap() as f64 }
        else { (*self.lo.peek().unwrap() as f64 + self.hi.peek().unwrap().0 as f64) / 2.0 }
    }
}

pub fn task_scheduler(tasks: &[char], n: usize) -> usize {
    let mut cnt: HashMap<char,usize> = HashMap::new();
    for &t in tasks { *cnt.entry(t).or_insert(0) += 1; }
    let counts: Vec<usize> = cnt.into_values().collect();
    let max_count = *counts.iter().max().unwrap();
    let max_count_tasks = counts.iter().filter(|&&c| c==max_count).count();
    tasks.len().max((max_count-1)*(n+1) + max_count_tasks)
}

pub fn k_closest_points(points: &[[i32; 2]], k: usize) -> Vec<[i32; 2]> {
    let mut pts = points.to_vec();
    pts.sort_by_key(|p| p[0]*p[0] + p[1]*p[1]);
    pts.into_iter().take(k).collect()
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_min_heap() {
        let mut h = MinHeap::new();
        for v in [5,2,8,1,9] { h.push(v); }
        assert_eq!(h.peek(), Some(1)); assert_eq!(h.pop(), Some(1)); assert_eq!(h.peek(), Some(2));
    }
    #[test]
    fn test_kth_largest() {
        assert_eq!(kth_largest(&[3,2,1,5,6,4], 2), 5);
        assert_eq!(kth_largest(&[3,2,3,1,2,4,5,5,6], 4), 4);
    }
    #[test]
    fn test_top_k_frequent() {
        let r = top_k_frequent(&[1,1,1,2,2,3], 2);
        assert!(r.contains(&1) && r.contains(&2));
    }
    #[test]
    fn test_merge_k_sorted() {
        assert_eq!(merge_k_sorted(vec![vec![1,4,5],vec![1,3,4],vec![2,6]]), vec![1,1,2,3,4,4,5,6]);
    }
    #[test]
    fn test_median_finder() {
        let mut mf = MedianFinder::new();
        for n in [1,2,3] { mf.add_num(n); }
        assert_eq!(mf.find_median(), 2.0);
        mf.add_num(4); assert_eq!(mf.find_median(), 2.5);
    }
    #[test]
    fn test_task_scheduler() {
        assert_eq!(task_scheduler(&['A','A','A','A','A','B','C','D'], 2), 13);
        assert_eq!(task_scheduler(&['A','A','A','B','B','B'], 2), 8);
    }
    #[test]
    fn test_k_closest() {
        let pts = [[1,3],[-2,2],[3,4],[-1,-1]];
        assert_eq!(k_closest_points(&pts, 2).len(), 2);
    }
}
