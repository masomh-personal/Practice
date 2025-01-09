/**
 * Leetcode #55: Jump Game
 * Approach: True Dynamic Programming (Bottom-Up)
 *
 * Time Complexity: O(n²) - Worst-case scenario due to nested loop checking reachable indices
 * Space Complexity: O(n) - Uses an array to store reachability at each index
 *
 * @param {number[]} nums - Array where each element represents max jump length
 * @return {boolean} - Returns true if the last index is reachable, otherwise false
 */
export function canJump(nums) {
  if (nums.length === 1) return true; // Single element case

  const reachableDP = Array(nums.length).fill(false); // DP array to track reachability
  reachableDP[nums.length - 1] = true; // Last index is always reachable from itself

  // Iterate backwards from second-last index
  for (let i = nums.length - 2; i >= 0; i--) {
    // Ensure we don't try to jump beyond the last index
    // The min function prevents out-of-bounds jumps if nums[i] is large
    let maxReachableIndex = Math.min(i + nums[i], nums.length - 1);

    // Check if we can reach a `true` index
    for (let j = i + 1; j <= maxReachableIndex; j++) {
      if (reachableDP[j]) {
        reachableDP[i] = true; // Mark current index as reachable
        break; // No need to check further
      }
    }
  }

  return reachableDP[0]; // If dp[0] is true, we can reach the last index
}

/**
 * Approach: Greedy BACKWARDS
 * Time Complexity: O(n) - Iterates from right to left once
 * Space Complexity: O(1) - Uses constant extra space
 * @param {number[]} nums
 * @return {boolean}
 */
export function canJumpGreedy(nums) {
  if (nums.length === 1) return true; // Single element case

  let goal = nums.length - 1; // Start from the last index

  // Iterate backwards to check if we can reach the goal
  // NOTE: starting from second to last index (nums.length - 2)
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i; // Move the goalpost to this index
    }
  }

  return goal === 0; // If goal reaches index 0, we can reach the last index
}

/**
 * Approach: Greedy FORWARD (Optimized)
 * Time Complexity: O(n) - Iterates through the array once
 * Space Complexity: O(1) - Uses constant extra space
 * @param {number[]} nums
 * @return {boolean}
 */
export function canJumpForwardGreedy(nums) {
  if (nums.length === 1) return true; // Single element case

  let maxReachableIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    // Optimized as we can fail early
    // If we get stuck at an unreachable index
    if (i > maxReachableIdx) return false;

    maxReachableIdx = Math.max(maxReachableIdx, i + nums[i]); // Extend the max reachable index
    if (maxReachableIdx >= nums.length - 1) return true; // If we can reach the last index, return true
  }

  return false;
}
