/// 🟢 Best Time to Buy and Sell Stock (LC #121)
/// One buy and one sell (buy before sell). Return max profit.
/// O(n) time, O(1) space.
pub fn best_time_buy_sell(prices: &[i32]) -> i32 {
    let mut min_price = i32::MAX;
    let mut max_profit = 0;
    for &p in prices {
        min_price = min_price.min(p);
        max_profit = max_profit.max(p - min_price);
    }
    max_profit
}

#[cfg(test)]
mod best_time_buy_sell_tests {
    use super::*;

    #[test]
    fn test_best_time_buy_sell() {
            assert_eq!(best_time_buy_sell(&[7, 1, 5, 3, 6, 4]), 5);
            assert_eq!(best_time_buy_sell(&[7, 6, 4, 3, 1]), 0);  // declining
            assert_eq!(best_time_buy_sell(&[1, 2]), 1);
        }
}
