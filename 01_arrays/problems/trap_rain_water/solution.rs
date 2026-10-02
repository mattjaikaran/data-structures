/// 🔴 Trapping Rain Water (LC #42)
/// O(n) time, O(1) space — two pointer approach.
pub fn trap_rain_water(height: &[i32]) -> i32 {
    let (mut l, mut r) = (0usize, height.len() - 1);
    let (mut l_max, mut r_max) = (0i32, 0i32);
    let mut water = 0;
    while l < r {
        if height[l] < height[r] {
            if height[l] >= l_max { l_max = height[l]; }
            else { water += l_max - height[l]; }
            l += 1;
        } else {
            if height[r] >= r_max { r_max = height[r]; }
            else { water += r_max - height[r]; }
            r -= 1;
        }
    }
    water
}

#[cfg(test)]
mod trap_rain_water_tests {
    use super::*;

    #[test]
    fn test_trap_rain_water() {
            assert_eq!(trap_rain_water(&[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
            assert_eq!(trap_rain_water(&[4, 2, 0, 3, 2, 5]), 9);
            assert_eq!(trap_rain_water(&[3, 0, 3]), 3);
        }
}
