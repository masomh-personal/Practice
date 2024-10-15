/**
 * Performs binary search on a sorted array of numbers.
 * @param {number[]} nums - The sorted array of numbers.
 * @param {number} target - The number to search for.
 * @returns {number} - The index of the target if found, otherwise -1.
 *
 * Time Complexity: O(log n)
 * - Each iteration reduces the search space by half, resulting in a logarithmic time complexity.
 * - 'n' is the length of the array.
 */
export const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  // Continue searching while the left index is less than or equal to the right index
  while (left <= right) {
    // Calculate the middle index to avoid overflow in large arrays
    let midIdx = Math.floor((right - left) / 2) + left;
    const midNum = nums[midIdx];

    // Check if the middle element is the target
    if (midNum === target) {
      return midIdx;
    }

    // If the target is smaller, search the left half
    else if (midNum > target) {
      right = midIdx - 1;
    }

    // If the target is larger, search the right half
    else {
      left = midIdx + 1;
    }
  }

  // Return -1 if the target is not found
  return -1;
};
