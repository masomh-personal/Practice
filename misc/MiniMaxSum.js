/**
 * Calculates the minimum and maximum sum of 4 out of 5 numbers in the array.
 * Returns an object with minSum and maxSum.
 *
 * Time Complexity: O(n) - Single traversal to calculate total sum, min, and max.
 * Space Complexity: O(1) - Only uses constant space for variables.
 *
 * @param {number[]} arr - An array of 5 integers.
 * @return {{minSum: number, maxSum: number}}
 *  - minSum: The minimum sum of 4 numbers.
 *  - maxSum: The maximum sum of 4 numbers.
 */
export function miniMaxSum(arr) {
  // Handle edge case of empty array by returning zeros
  if (arr.length === 0) {
    return {
      minSum: 0,
      maxSum: 0,
    };
  }

  // Initialize min and max to extreme values and totalSum to zero
  let min = Infinity;
  let max = -Infinity;
  let totalSum = 0;

  // Single traversal to calculate total sum, min, and max
  for (const num of arr) {
    totalSum += num;
    max = Math.max(max, num);
    min = Math.min(min, num);
  }

  // Calculate minSum by excluding the maximum value
  // Calculate maxSum by excluding the minimum value
  const minSum = totalSum - max;
  const maxSum = totalSum - min;

  // Return the result as an object as expected by the test cases
  return {
    minSum,
    maxSum,
  };
}
