/**
 * Time: O(n) - We need to iterate over the entire array once to capture all profit opportunities.
 * Space: O(1) - We only track a single variable, maxProfit.
 * NOTE: The goal is to accumulate the maximum possible profit by summing all positive price differences.
 *
 * This approach maximizes profit by capturing every positive price change immediately.
 * By adding up all profitable price differences as they occur, we ensure we "ride" each upward trend,
 * achieving the maximum possible profit without needing to look ahead or wait for future peaks.
 * GREEDY approach is optimal because it leverages every opportunity for profit as it arises.
 *
 * @param {number[]} prices - Array of stock prices, where prices[i] is the price on the ith day.
 * @return {number} - The maximum profit achievable by buying and selling on consecutive days.
 */
export const maxProfit = (prices) => {
  // Guard clause: If prices array has one or fewer days, no profit can be made.
  if (prices.length <= 1) return 0;

  let maxProfit = 0;

  // Iterate through prices array up to the second-to-last element to compare with the next day.
  for (let i = 0; i < prices.length - 1; i++) {
    const potentialProfit = prices[i + 1] - prices[i]; // Calculate 'profit' if bought today and sold tomorrow.

    // If there's a positive profit, add it to maxProfit.
    if (potentialProfit > 0) {
      maxProfit += potentialProfit;
    }
  }

  return maxProfit; // Return the total accumulated profit.
};
