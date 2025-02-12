/**
 * Approach: Dynamic Programming
 * Time: O(n * targetSum) - Iterating nums and updating dp
 * Space: O(targetSum) - Using a boolean dp array of size targetSum + 1
 * @param {number[]} nums
 * @return {boolean}
 */
export function canPartition(nums) {
  // Edge cases: if nums.length is equal to 1 (can't be empty array)
  if (nums.length === 1) return false;

  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  // Can't have two equal partitions if the total sum is odd
  if (totalSum % 2 !== 0) return false;

  // We know we have a target sum as it will be even split in half
  const targetSum = totalSum / 2;

  // Boolean DP array of size targetSum + 1
  const dp = Array(targetSum + 1).fill(false);
  dp[0] = true; // We can always form a sum 0 by picking no elements

  // Process each num in nums
  for (const num of nums) {
    // Iterate backwards from targetSum to num
    for (let i = targetSum; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[targetSum]; // If true, we found a subset that sums to targetSum
}
