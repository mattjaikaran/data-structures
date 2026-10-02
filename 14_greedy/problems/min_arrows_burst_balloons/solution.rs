pub fn min_arrows(mut points: Vec<[i32;2]>) -> usize {
    points.sort_by_key(|p| p[1]);
    let mut arrows = 0; let mut pos = i32::MIN;
    for [start, end] in points {
        if start > pos { arrows += 1; pos = end; }
    }
    arrows
}

#[cfg(test)]
mod min_arrows_burst_balloons_tests {
    use super::*;

    #[test]
    fn test_min_arrows() {
            assert_eq!(min_arrows(vec![[10,16],[2,8],[1,6],[7,12]]), 2);
        }
}
