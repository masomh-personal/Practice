/**
 * Finds the maximum profit from buying and selling stock once.
 *
 * Approach:
 * - Iterate through the array while tracking the minimum price seen so far.
 * - At each step, calculate the potential profit if selling at the current price.
 * - Update the maximum profit if this potential profit is higher than the previous max.
 *
 * Time Complexity: O(n) - Single pass through the prices array.
 * Space Complexity: O(1) - Uses only two extra variables.
 *
 * @param {number[]} prices - List of stock prices where prices[i] is the price on day i
 * @return {number} - Maximum possible profit (0 if no profit is possible)
 */
export function maxProfit(prices) {
  if (prices.length === 1) return 0; // If only one price exists, no transactions can be made

  let maxProfit = 0; // Tracks the maximum profit found
  let minPrice = Infinity; // Tracks the lowest price encountered

  for (const price of prices) {
    // Update the lowest price seen so far
    minPrice = Math.min(minPrice, price);

    // Calculate the potential profit if we sold at the current price
    const potentialMaxProfit = price - minPrice;

    // Update maxProfit if the new profit is greater
    maxProfit = Math.max(maxProfit, potentialMaxProfit);
  }

  return maxProfit; // Return the highest profit possible
}
