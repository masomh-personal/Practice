/**
 * Bottom-Up Approach (Using Tabulation)
 * Time: O(n)
 * Space: O(1)
 * @param {number[]} cost
 * @return {number}
 */
export const minCostClimbingStairs = (cost) => {
  // If there are only two steps, return the minimum cost directly
  if (cost.length === 2) return Math.min(...cost);

  // Variables to track the minimum costs of the next two steps
  let nextStep1 = 0;
  let nextStep2 = 0;

  // Iterate backwards, computing the minimum cost to reach each step
  for (let i = cost.length - 1; i >= 0; i--) {
    const currentCost = cost[i];
    const currentMin = currentCost + Math.min(nextStep1, nextStep2);

    // NOTE: we could have done the swap using a temp destructuring array (but adds more overhead)
    // Destructuring creates a temporary array under the hood and unpacks its elements to assign the values
    // Update the variables for the next iteration
    nextStep2 = nextStep1;
    nextStep1 = currentMin;
  }

  // Return the minimum cost of starting from the first or second step
  return Math.min(nextStep1, nextStep2);
};
