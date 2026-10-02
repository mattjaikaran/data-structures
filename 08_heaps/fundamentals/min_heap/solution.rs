#[derive(Default)]
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
    pub fn is_empty(&self) -> bool { self.data.is_empty() }
    fn bubble_up(&mut self, mut i: usize) {
        while i > 0 { let p=(i-1)/2; if self.data[p]<=self.data[i] { break; } self.data.swap(p,i); i=p; }
    }
    fn sink_down(&mut self, mut i: usize) {
        let n=self.data.len();
        loop { let mut m=i; let (l,r)=(2*i+1,2*i+2);
            if l<n&&self.data[l]<self.data[m] { m=l; }
            if r<n&&self.data[r]<self.data[m] { m=r; }
            if m==i { break; } self.data.swap(m,i); i=m; }
    }
}

#[cfg(test)]
mod min_heap_tests {
    use super::*;

    #[test]
    fn test_min_heap() {
            let mut h = MinHeap::new();
            for v in [5,2,8,1,9] { h.push(v); }
            assert_eq!(h.peek(), Some(1)); assert_eq!(h.pop(), Some(1)); assert_eq!(h.peek(), Some(2));
        }

    #[test]
    fn duplicates_empty_and_reuse() {
        let mut heap = MinHeap::default();
        assert!(heap.is_empty());
        assert_eq!(heap.pop(), None);
        for value in [3, -1, 3, 0, -1] { heap.push(value); }
        for value in [-1, -1, 0, 3, 3] { assert_eq!(heap.pop(), Some(value)); }
        assert!(heap.is_empty());
        assert_eq!(heap.pop(), None);
        heap.push(9);
        assert_eq!(heap.peek(), Some(9));
        assert_eq!(heap.pop(), Some(9));
    }
}
