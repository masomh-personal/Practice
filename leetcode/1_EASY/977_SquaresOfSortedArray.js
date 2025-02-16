/**
 * Time: O(n) - Iterates through the array once using two pointers
 * Space: O(n) - Uses an extra array to store results
 *
 * Optimized approach using a two-pointer technique:
 * - The array is sorted but contains negative values at the start.
 * - Squaring reverses the order for negative numbers.
 * - The largest squared values will always be at the extremes (leftmost or rightmost elements).
 * - We fill the result array from the end, moving inward using a write pointer.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
export function sortedSquares(nums) {
  const n = nums.length;
  if (n === 1) return [nums[0] ** 2]; // Edge case: Single element

  let left = 0; // Pointer starting from the smallest absolute value (leftmost)
  let right = n - 1; // Pointer starting from the largest absolute value (rightmost)
  let writePointer = n - 1; // Third pointer: Inserts squared values from the back
  const result = Array(n).fill(0); // Pre-allocated output array

  while (left <= right) {
    const leftSquare = nums[left] ** 2;
    const rightSquare = nums[right] ** 2;

    if (leftSquare > rightSquare) {
      result[writePointer] = leftSquare;
      left++; // Move left pointer forward
    } else {
      result[writePointer] = rightSquare;
      right--; // Move right pointer backward
    }

    // Move the writer index backward (fills array from the largest to smallest)
    // NOTE: this allows us to have have to .reverse() the array at end
    writePointer--;
  }

  return result;
}

/**
 * Time: O(n log n) - due to sorting, which dominates the complexity
 * Space: O(n) - creating a new array (from .map())
 *
 * Naive approach:
 * 1. Square all elements in the array using .map().
 * 2. Sort the squared values in ascending order.
 *
 * Why this is this not the ideal approach?
 * - The provided array is already sorted, just with negative values in the front.
 * - Squaring the numbers preserves the order for positive values, but order for negatives.
 * - Instead of sorting, we can take advantage of two pointers to merge the squared values in O(n) time.
 * - Sorting increases time complexity to O(n log n), making this approach suboptimal.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
export function sortedSquaresNaive(nums) {
  if (nums.length === 1) return [nums[0] ** 2]; // Edge case: single element, return its square

  return nums
    .map((num) => num ** 2) // Square all numbers
    .sort((a, b) => a - b); // Sort the squared values (costly O(n log n) operation)
}
