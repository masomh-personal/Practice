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
  let left = 0; // Left boundary of the search space
  let right = nums.length - 1; // Right boundary of the search space

  while (left <= right) {
    let midIdx = Math.floor((left + right) / 2); // Calculate the middle index
    const midNum = nums[midIdx]; // Retrieve the middle element

    if (midNum === target) return midIdx; // Target found, return its index
    if (midNum < target) {
      left = midIdx + 1; // Search right half (target is in right half)
    } else {
      right = midIdx - 1; // Search left half (target is in left half)
    }
  }

  return -1; // Target not found
}
