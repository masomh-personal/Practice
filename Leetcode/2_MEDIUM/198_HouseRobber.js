/**
 * 198. House Robber (Medium)
 * Strategy: Bottom Up DP (constant space)
 * Time: O(n) - We iterate through the entire array once.
 * Space: O(1) - Only two variables are used to store intermediate results.
 *
 * @param {number[]} nums - Array representing the amount of money at each house.
 * @return {number} - The maximum amount of money that can be robbed without triggering alarms.
 */
const rob = (nums) => {
  const n = nums.length;

  // Handle small cases where there are 1 or 2 houses
  if (n <= 2) return Math.max(...nums.slice(0, 2));

  let prev = nums.at(0); // Max money if robbing up to the first house
  let curr = Math.max(nums.at(0), nums.at(1)); // Max money if robbing up to the second house

  // Iterate through the rest of the houses
  for (let i = 2; i < n; i++) {
    // Update prev and curr: decide whether to rob the current house or skip it
    [prev, curr] = [curr, Math.max(nums.at(i) + prev, curr)];
  }

  return curr; // Return the maximum money that can be robbed
};

/**
 * Strategy: Recursive DP with Memoization
 * Time: O(n) - Each sub problem is solved once.
 * Space: O(n) - Due to the call stack and the memoization cache.
 *
 * @param {number[]} nums - Array representing the amount of money at each house.
 * @return {number} - The maximum amount of money that can be robbed without triggering alarms.
 */
const robRecursive = (nums) => {
  const n = nums.length;

  // Handle small cases where there are 1 or 2 houses
  if (n <= 2) return Math.max(...nums.slice(0, 2));

  // Initialize memoization cache with base cases
  const cache = new Map([
    [0, nums.at(0)],
    [1, Math.max(nums.at(0), nums.at(1))],
  ]);

  // Helper function to recursively calculate the max money for each house
  const innerHelper = (houseIdx) => {
    if (cache.has(houseIdx)) return cache.get(houseIdx); // Return cached result if available

    // Calculate max money by either robbing or skipping the current house
    const result = Math.max(nums.at(houseIdx) + innerHelper(houseIdx - 2), innerHelper(houseIdx - 1));
    cache.set(houseIdx, result); // Cache the result for future reference

    return result; // Return the calculated max money for this house
  };

  // Recursive call to get max money for the last house
  return innerHelper(n - 1);
};

export { rob, robRecursive };
