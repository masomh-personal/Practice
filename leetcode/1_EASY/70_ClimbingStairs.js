/**
 * 70. Climbing Stairs (EASY)
 * Time: O(n)
 * Space: O(1)
 * @param {number} n - The total number of steps.
 * @return {number} - The number of distinct ways to reach the top.
 */
const climbStairs = (n) => {
  if (n <= 3) return n; // Base cases for 1, 2, or 3 steps

  let n2 = 2; // Ways to reach 2 steps
  let n1 = 3; // Ways to reach 3 steps

  for (let i = 4; i <= n; i++) {
    [n2, n1] = [n1, n1 + n2]; // Update the number of ways to reach the current step
  }

  return n1; // Return the number of ways to reach the nth step
};

/**
 * 70. Climbing Stairs (EASY)
 * Time: O(n)
 * Space: O(n)
 * @param {number} n - The total number of steps.
 * @param {Map<number, number>} [cache=new Map()] - Cache to store results of sub problems.
 * @return {number} - The number of distinct ways to reach the top.
 */
const climbStairsRecursive = (n, cache = new Map()) => {
  if (n <= 3) return n; // Base cases for 1, 2, or 3 steps

  if (cache.has(n)) return cache.get(n); // Return cached result if available

  const result = climbStairsRecursive(n - 1, cache) + climbStairsRecursive(n - 2, cache); // Calculate ways for current step
  cache.set(n, result); // Cache the result for future use

  return result; // Return the number of ways to reach the nth step
};

export { climbStairs, climbStairsRecursive };
