pub fn can_complete_circuit(gas: &[i32], cost: &[i32]) -> i32 {
    if gas.iter().sum::<i32>() < cost.iter().sum::<i32>() { return -1; }
    let mut tank = 0; let mut start = 0;
    for i in 0..gas.len() {
        tank += gas[i] - cost[i];
        if tank < 0 { start = i + 1; tank = 0; }
    }
    start as i32
}

#[cfg(test)]
mod can_complete_circuit_tests {
    use super::*;

    #[test]
    fn test_gas_station() {
            assert_eq!(can_complete_circuit(&[1,2,3,4,5],&[3,4,5,1,2]), 3);
            assert_eq!(can_complete_circuit(&[2,3,4],&[3,4,3]), -1);
        }
}
