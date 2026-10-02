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

#[cfg(test)]
mod eval_rpn_tests {
    use super::*;

    #[test]
    fn test_eval_rpn() {
            assert_eq!(eval_rpn(&["2","1","+","3","*"]), 9);
            assert_eq!(eval_rpn(&["4","13","5","/","+"]), 6);
        }
}
