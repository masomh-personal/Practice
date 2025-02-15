/**
 * Performs binary search on a sorted array to find the target index.
 *
 * Time Complexity: O(log n) - The search space is halved each iteration.
 * Space Complexity: O(1) - Uses only constant extra space.
 *
 * @param {number[]} nums - A sorted array of numbers.
 * @param {number} target - The number to search for.
 * @return {number} - The index of the target if found, otherwise -1.
 */
export function search(nums, target) {
  // Edge case: if nums has only one element, just immediately check it
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // NOTE: safe way to calculate middle idx
    // Adding left ensures the midpoint is correctly positioned within the current search range.
    const midIdx = left + Math.floor((right - left) / 2);
    const midNum = nums[midIdx];

    if (midNum === target) {
      return midIdx;
    } else if (midNum > target) {
      right = midIdx - 1; // Focus on the left half
    } else {
      left = midIdx + 1; // Focus on the right half
    }
  }

  return -1; // Target not found
}
