pub fn task_scheduler(tasks: &[char], n: usize) -> usize {
    let mut cnt: HashMap<char,usize> = HashMap::new();
    for &t in tasks { *cnt.entry(t).or_insert(0) += 1; }
    let counts: Vec<usize> = cnt.into_values().collect();
    let max_count = *counts.iter().max().unwrap();
    let max_count_tasks = counts.iter().filter(|&&c| c==max_count).count();
    tasks.len().max((max_count-1)*(n+1) + max_count_tasks)
}

#[cfg(test)]
mod task_scheduler_tests {
    use super::*;

    #[test]
    fn test_task_scheduler() {
            assert_eq!(task_scheduler(&['A','A','A','A','A','B','C','D'], 2), 13);
            assert_eq!(task_scheduler(&['A','A','A','B','B','B'], 2), 8);
        }
}
