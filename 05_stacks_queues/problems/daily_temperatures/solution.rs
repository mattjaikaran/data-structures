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

#[cfg(test)]
mod daily_temperatures_tests {
    use super::*;

    #[test]
    fn test_daily_temperatures() {
            assert_eq!(daily_temperatures(&[73,74,75,71,69,72,76,73]), vec![1,1,4,2,1,1,0,0]);
            assert_eq!(daily_temperatures(&[30,40,50,60]), vec![1,1,1,0]);
        }
}
