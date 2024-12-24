/**
 * Given an integer array nums, find the subarray with the largest sum, and return its sum
 *
 * APPROACH: Kadane's Algorithm
 * TIME COMPLEXITY: O(n) - iterate through the array once
 * SPACE COMPLEXITY: O(1) - constant space for tracking sums
 *
 * @param {number[]} nums - Input array of integers
 * @return {number} - The maximum subarray sum
 */
export function maxSubArray(nums) {
  // Guard: Handle empty input (not part of constraints, but good for robustness)
  if (!nums.length) return 0;

  // Guard: Single-element array (edge case)
  if (nums.length === 1) return nums[0];

  // Kadane's Algorithm
  let maxSum = -Infinity; // Track the largest sum encountered
  let currSum = 0; // Track the current subarray sum

  for (const num of nums) {
    // If the previous subarray sum is negative, start fresh at the current number
    currSum = Math.max(currSum, 0) + num;

    // Update the maximum sum found so far
    maxSum = Math.max(maxSum, currSum);
  }

  // Return the maximum subarray sum
  return maxSum;
}
