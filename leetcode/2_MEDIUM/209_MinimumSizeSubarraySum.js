/**
 * Finds the minimal length of a contiguous subarray whose sum is >= target
 *
 * @param {number} target - The target sum to reach or exceed
 * @param {number[]} nums - Array of positive integers
 * @return {number} - The minimal length of the subarray or 0 if no such subarray exists
 *
 * Time Complexity: O(n)
 * - The right pointer traverses the array once
 * - The left pointer only moves forward when sum >= target, resulting in a total traversal of O(n)
 *
 * Space Complexity: O(1)
 * - Uses constant space for variables (sum, left, minSizeSubArray)
 */
export function minSubArrayLen(target, nums) {
  // Handle edge case where nums.length === 1
  if (nums.length === 1) {
    return nums[0] >= target ? 1 : 0;
  }

  let minSizeSubArray = nums.length + 1; // default to invalid length
  let sum = 0; // tracks the current subarray sum
  let left = 0; // left pointer for the sliding window

  // Iterate through the array with the right pointer
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]; // add the current element to the sum

    // Shrink the window while the sum is >= target
    while (sum >= target) {
      // Update the minimum size of the subarray
      minSizeSubArray = Math.min(minSizeSubArray, right - left + 1);

      // Remove the leftmost element from the sum and move left pointer
      sum -= nums[left];
      left++;
    }
  }

  // Return 0 if no valid subarray was found, otherwise return the minimal length
  return minSizeSubArray === nums.length + 1 ? 0 : minSizeSubArray;
}
