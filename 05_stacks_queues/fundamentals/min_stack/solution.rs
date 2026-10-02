#[derive(Default)]
pub struct MinStack {
    stack: Vec<i32>,
    mins:  Vec<i32>,
}

impl MinStack {
    pub fn new() -> Self { MinStack { stack: vec![], mins: vec![] } }
    pub fn push(&mut self, val: i32) {
        self.stack.push(val);
        let m = self.mins.last().map_or(val, |&prev| prev.min(val));
        self.mins.push(m);
    }
    pub fn pop(&mut self) -> Option<i32> { self.mins.pop(); self.stack.pop() }
    pub fn top(&self) -> Option<i32> { self.stack.last().copied() }
    pub fn get_min(&self) -> Option<i32> { self.mins.last().copied() }
}

#[cfg(test)]
mod min_stack_tests {
    use super::*;

    #[test]
    fn test_min_stack() {
            let mut ms = MinStack::new();
            ms.push(5); ms.push(3); ms.push(7); ms.push(2);
            assert_eq!(ms.get_min(), Some(2));
            ms.pop();
            assert_eq!(ms.get_min(), Some(3));
        }
}
