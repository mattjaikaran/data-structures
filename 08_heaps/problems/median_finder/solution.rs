#[derive(Default)]
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

#[cfg(test)]
mod median_finder_tests {
    use super::*;

    #[test]
    fn test_median_finder() {
            let mut mf = MedianFinder::new();
            for n in [1,2,3] { mf.add_num(n); }
            assert_eq!(mf.find_median(), 2.0);
            mf.add_num(4); assert_eq!(mf.find_median(), 2.5);
        }
}
