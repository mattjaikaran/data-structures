//! STACKS & QUEUES  ·  Rust
//! Rust's Vec<T> is a natural stack. For queues, use std::collections::VecDeque.

use std::collections::VecDeque;

// ══════════════════════════════════════════════
// PART 1 — IMPLEMENTATIONS
// ══════════════════════════════════════════════

pub struct Stack<T> { data: Vec<T> }
impl<T> Stack<T> {
    pub fn new() -> Self { Stack { data: Vec::new() } }
    pub fn push(&mut self, val: T) { self.data.push(val); }
    pub fn pop(&mut self) -> Option<T> { self.data.pop() }
    pub fn peek(&self) -> Option<&T> { self.data.last() }
    pub fn is_empty(&self) -> bool { self.data.is_empty() }
    pub fn len(&self) -> usize { self.data.len() }
}

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

// ══════════════════════════════════════════════
// PART 2 — INTERVIEW PROBLEMS
// ══════════════════════════════════════════════

/// 🟢 Valid Parentheses (LC #20)
pub fn is_valid_parens(s: &str) -> bool {
    let mut stack: Vec<char> = Vec::new();
    for ch in s.chars() {
        match ch {
            '(' | '{' | '[' => stack.push(ch),
            ')' => if stack.pop() != Some('(') { return false; },
            '}' => if stack.pop() != Some('{') { return false; },
            ']' => if stack.pop() != Some('[') { return false; },
            _ => {}
        }
    }
    stack.is_empty()
}

/// 🟢 Backspace String Compare (LC #844)
pub fn backspace_compare(s: &str, t: &str) -> bool {
    fn process(s: &str) -> String {
        let mut stack: Vec<char> = Vec::new();
        for ch in s.chars() {
            if ch != '#' { stack.push(ch); } else { stack.pop(); }
        }
        stack.into_iter().collect()
    }
    process(s) == process(t)
}

/// 🟡 Evaluate Reverse Polish Notation (LC #150)
pub fn eval_rpn(tokens: &[&str]) -> i32 {
    let mut stack: Vec<i32> = Vec::new();
    for &t in tokens {
        match t {
            "+" | "-" | "*" | "/" => {
                let b = stack.pop().unwrap();
                let a = stack.pop().unwrap();
                stack.push(match t {
                    "+" => a + b, "-" => a - b,
                    "*" => a * b, _   => a / b,
                });
            }
            _ => stack.push(t.parse().unwrap()),
        }
    }
    stack[0]
}

/// 🟡 Daily Temperatures (LC #739) — monotonic stack
pub fn daily_temperatures(temps: &[i32]) -> Vec<i32> {
    let mut result = vec![0i32; temps.len()];
    let mut stack: Vec<usize> = Vec::new();
    for (i, &t) in temps.iter().enumerate() {
        while let Some(&top) = stack.last() {
            if t > temps[top] { stack.pop(); result[top] = (i - top) as i32; }
            else { break; }
        }
        stack.push(i);
    }
    result
}

/// 🟡 Decode String (LC #394)
pub fn decode_string(s: &str) -> String {
    let mut count_stack: Vec<usize> = Vec::new();
    let mut str_stack: Vec<String> = Vec::new();
    let mut current = String::new();
    let mut k: usize = 0;
    for ch in s.chars() {
        match ch {
            '0'..='9' => k = k * 10 + (ch as usize - '0' as usize),
            '[' => { count_stack.push(k); str_stack.push(current.clone()); current.clear(); k = 0; }
            ']' => {
                let times = count_stack.pop().unwrap();
                let prev = str_stack.pop().unwrap();
                current = prev + &current.repeat(times);
            }
            _ => current.push(ch),
        }
    }
    current
}

/// 🟡 Asteroid Collision (LC #735)
pub fn asteroid_collision(asteroids: &[i32]) -> Vec<i32> {
    let mut stack: Vec<i32> = Vec::new();
    for &a in asteroids {
        let mut alive = true;
        while alive && a < 0 {
            match stack.last() {
                Some(&top) if top > 0 => {
                    if top < -a       { stack.pop(); }
                    else if top == -a { stack.pop(); alive = false; }
                    else              { alive = false; }
                }
                _ => break,
            }
        }
        if alive { stack.push(a); }
    }
    stack
}

/// 🔴 Sliding Window Maximum (LC #239) — monotonic deque
pub fn sliding_window_maximum(nums: &[i32], k: usize) -> Vec<i32> {
    let mut result: Vec<i32> = Vec::new();
    let mut dq: VecDeque<usize> = VecDeque::new();
    for (i, &n) in nums.iter().enumerate() {
        while dq.front().map_or(false, |&f| f + k <= i) { dq.pop_front(); }
        while dq.back().map_or(false, |&b| nums[b] < n) { dq.pop_back(); }
        dq.push_back(i);
        if i + 1 >= k { result.push(nums[*dq.front().unwrap()]); }
    }
    result
}

/// 🔴 Largest Rectangle in Histogram (LC #84)
pub fn largest_rectangle(heights: &[i32]) -> i32 {
    let mut stack: Vec<(usize, i32)> = Vec::new();
    let mut best = 0i32;
    let extended: Vec<i32> = heights.iter().copied().chain(std::iter::once(0)).collect();
    for (i, &h) in extended.iter().enumerate() {
        let mut start = i;
        while let Some(&(left, bar_h)) = stack.last() {
            if bar_h > h {
                stack.pop();
                best = best.max(bar_h * (i - left) as i32);
                start = left;
            } else { break; }
        }
        stack.push((start, h));
    }
    best
}

// ══════════════════════════════════════════════
// TESTS
// ══════════════════════════════════════════════

#[cfg(test)]
mod tests {
    use super::*;

    #[test] fn test_stack() {
        let mut s: Stack<i32> = Stack::new();
        s.push(1); s.push(2); s.push(3);
        assert_eq!(s.peek(), Some(&3));
        assert_eq!(s.pop(), Some(3));
        assert_eq!(s.len(), 2);
    }

    #[test] fn test_min_stack() {
        let mut ms = MinStack::new();
        ms.push(5); ms.push(3); ms.push(7); ms.push(2);
        assert_eq!(ms.get_min(), Some(2));
        ms.pop();
        assert_eq!(ms.get_min(), Some(3));
    }

    #[test] fn test_is_valid_parens() {
        assert!(is_valid_parens("()[]{}"));
        assert!(is_valid_parens("([])"));
        assert!(!is_valid_parens("(]"));
        assert!(is_valid_parens(""));
    }

    #[test] fn test_backspace_compare() {
        assert!(backspace_compare("ab#c", "ad#c"));
        assert!(!backspace_compare("a#c", "b"));
    }

    #[test] fn test_eval_rpn() {
        assert_eq!(eval_rpn(&["2","1","+","3","*"]), 9);
        assert_eq!(eval_rpn(&["4","13","5","/","+"]), 6);
    }

    #[test] fn test_daily_temperatures() {
        assert_eq!(daily_temperatures(&[73,74,75,71,69,72,76,73]), vec![1,1,4,2,1,1,0,0]);
        assert_eq!(daily_temperatures(&[30,40,50,60]), vec![1,1,1,0]);
    }

    #[test] fn test_decode_string() {
        assert_eq!(decode_string("3[a2[c]]"), "accaccacc");
        assert_eq!(decode_string("3[a]2[bc]"), "aaabcbc");
    }

    #[test] fn test_asteroid_collision() {
        assert_eq!(asteroid_collision(&[5,10,-5]), vec![5,10]);
        assert_eq!(asteroid_collision(&[8,-8]), vec![]);
        assert_eq!(asteroid_collision(&[10,2,-5]), vec![10]);
    }

    #[test] fn test_sliding_window_maximum() {
        assert_eq!(sliding_window_maximum(&[1,3,-1,-3,5,3,6,7], 3), vec![3,3,5,5,6,7]);
        assert_eq!(sliding_window_maximum(&[1], 1), vec![1]);
    }

    #[test] fn test_largest_rectangle() {
        assert_eq!(largest_rectangle(&[2,1,5,6,2,3]), 10);
        assert_eq!(largest_rectangle(&[2,4]), 4);
        assert_eq!(largest_rectangle(&[1]), 1);
    }
}
