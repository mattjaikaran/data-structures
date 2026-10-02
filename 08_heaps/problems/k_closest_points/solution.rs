pub fn k_closest_points(points: &[[i32; 2]], k: usize) -> Vec<[i32; 2]> {
    let mut pts = points.to_vec();
    pts.sort_by_key(|p| p[0]*p[0] + p[1]*p[1]);
    pts.into_iter().take(k).collect()
}

#[cfg(test)]
mod k_closest_points_tests {
    use super::*;

    #[test]
    fn test_k_closest() {
            let pts = [[1,3],[-2,2],[3,4],[-1,-1]];
            assert_eq!(k_closest_points(&pts, 2).len(), 2);
        }
}
