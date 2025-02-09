/**
 * TIME: O(n) - Iterates through the prices array once
 * SPACE: O(1) - Uses only constant extra space
 *
 * Finds the maximum profit from buying and selling stock once.
 *
 * @param {number[]} prices - List of stock prices where prices[i] is the price on day i
 * @return {number} - Maximum possible profit (0 if no profit is possible)
 */
export function maxProfit(prices) {
  // Edge case: If only one price is given, no transaction can be made
  if (prices.length < 2) return 0;

  let maxProfit = 0; // Tracks the maximum profit found

  // Tracks the minimum price encountered so far and iterate using two pointers
  for (let i = 1, minPrice = prices[0]; i < prices.length; i++) {
    const currPrice = prices[i];

    // Calculate the potential profit if buying at minPrice and selling TODAY
    const currProfit = currPrice - minPrice;

    // Update maxProfit if we found a more lucrative trade
    maxProfit = Math.max(maxProfit, currProfit);

    // Update minPrice if we find a lower price to buy at
    minPrice = Math.min(minPrice, currPrice);
  }

  return maxProfit;
}
