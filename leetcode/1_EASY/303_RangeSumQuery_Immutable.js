/**
 * Leetcode #303: Range Sum Query - Immutable
 *
 * Time Complexity:
 * - Constructor: O(n) - Building the prefix sum array requires a single pass through the input array.
 * - sumRange(): O(1) - Querying a range only involves a few arithmetic operations.
 *
 * Space Complexity:
 * - O(n) - The prefix sum array requires additional space proportional to the input array size.
 */

export class NumArray {
  /**
   * Initializes the NumArray with the input array and computes the prefix sum.
   * @param {number[]} nums - Array of integers.
   * @throws {Error} Throws an error if the input array is empty.
   */
  constructor(nums) {
    if (!nums.length) {
      // Ensures the input array is not empty
      throw new Error('Provided array nums must not be empty');
    }

    this.nums = nums; // Stores the original array (useful for debugging or extended functionality)

    // Build the prefix sums array in O(n)
    this.prefixSums = nums.reduce((acc, num, idx) => {
      acc.push(num + (acc[idx - 1] ?? 0)); // Add current number to the last prefix sum (or 0 if none exists)
      return acc;
    }, []);
  }

  /**
   * Computes the sum of elements between indices left and right (inclusive).
   * @param {number} left - Starting index of the range.
   * @param {number} right - Ending index of the range.
   * @returns {number} - The sum of the range.
   * @throws {Error} Throws an error if the range is invalid.
   */
  sumRange(left, right) {
    // Validate the range
    if (left < 0 || right >= this.nums.length || left > right) {
      throw new Error('Invalid range for sumRange');
    }

    // Calculate the prefix sum up to 'right' and subtract the prefix sum up to 'left - 1'
    const prefixRight = this.prefixSums[right];
    const prefixLeft = left > 0 ? this.prefixSums[left - 1] : 0; // Handles case when 'left' is 0
    return prefixRight - prefixLeft; // Subtracts to get the sum of the range
  }
}
