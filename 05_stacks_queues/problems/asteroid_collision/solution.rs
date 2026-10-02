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

#[cfg(test)]
mod asteroid_collision_tests {
    use super::*;

    #[test]
    fn test_asteroid_collision() {
            assert_eq!(asteroid_collision(&[5,10,-5]), vec![5,10]);
            assert_eq!(asteroid_collision(&[8,-8]), vec![]);
            assert_eq!(asteroid_collision(&[10,2,-5]), vec![10]);
        }
}
