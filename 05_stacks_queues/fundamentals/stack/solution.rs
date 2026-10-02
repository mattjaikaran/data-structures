pub struct Stack<T> { data: Vec<T> }

impl<T> Stack<T> {
    pub fn new() -> Self { Stack { data: Vec::new() } }
    pub fn push(&mut self, val: T) { self.data.push(val); }
    pub fn pop(&mut self) -> Option<T> { self.data.pop() }
    pub fn peek(&self) -> Option<&T> { self.data.last() }
    pub fn is_empty(&self) -> bool { self.data.is_empty() }
    pub fn len(&self) -> usize { self.data.len() }
}

impl<T> Default for Stack<T> {
    fn default() -> Self { Self::new() }
}

#[cfg(test)]
mod stack_tests {
    use super::*;

    #[test]
    fn test_stack() {
            let mut s: Stack<i32> = Stack::new();
            s.push(1); s.push(2); s.push(3);
            assert_eq!(s.peek(), Some(&3));
            assert_eq!(s.pop(), Some(3));
            assert_eq!(s.len(), 2);
        }

    #[test]
    fn default_supports_elements_without_default() {
        struct Value(i32);
        let mut stack: Stack<Value> = Stack::default();
        assert!(stack.is_empty());
        assert!(stack.pop().is_none());
        stack.push(Value(7));
        assert_eq!(stack.pop().unwrap().0, 7);
        assert!(stack.is_empty());
    }
}
