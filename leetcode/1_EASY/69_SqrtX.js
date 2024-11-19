/**
 * Approach: Binary Search to find the square root of `target` rounded down.
 *
 * Time Complexity: O(log(target))
 * Space Complexity: O(1)
 *
 * @param {number} target - The non-negative integer whose square root we seek.
 * @return {number} - The square root of `target` rounded down to the nearest integer.
 */
export const mySqrt = (target) => {
  // Edge case: sqrt(1) and sqrt(0) are just 1 and 0
  if (target <= 1) return target;

  // Binary search initialization
  let left = 2;
  let right = target;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const candidate = mid * mid;

    if (candidate === target) {
      return mid; // Perfect square root found
    } else if (candidate > target) {
      right = mid - 1; // Narrow search to the left half
    } else {
      left = mid + 1; // Narrow search to the right half
    }
  }

  // If exact match not found, return the largest integer less than the square root
  return right;
};

/**
 * Approach: Iterate from target / 2 downwards and check squares
 * NOTE: just from test cases we are seeing a mush less efficient time complexity here
 *
 * Time Complexity: O(target) in the worst case
 * Space Complexity: O(1)
 *
 * @param {number} target - The non-negative integer whose square root we seek.
 * @return {number} - The square root of `target` rounded down to the nearest integer.
 */
export const mySqrtNaive = (target) => {
  // Edge case: sqrt(1) and sqrt(0) are just 1 and 0
  if (target <= 1) return target;

  // Start from target / 2, as no number greater than this can be the square root
  for (let i = Math.floor(target / 2); i >= 2; i--) {
    if (i * i <= target) {
      return i; // Return the first integer whose square is less than or equal to target
    }
  }

  // Fallback for edge cases (e.g., target = 1)
  return 1;
};

/**
 * DEV NOTE: Using exponentiation operator calls a function under the hood
 * This can add overhead when called within a loop. It is better to simply do i * i in this use case
 * as it is basic mathematics operation
 *
 * TEST below is almost twice as fast using simple arithmetic
 */
function devTest() {
  const target = 1000000;

  // Using i ** 2
  console.time('Exponentiation');
  for (let i = Math.floor(target / 2); i >= 1; i--) {
    const candidate = i ** 2;
  }
  console.timeEnd('Exponentiation');

  // Using i * i
  console.time('Multiplication');
  for (let i = Math.floor(target / 2); i >= 1; i--) {
    const candidate = i * i;
  }
  console.timeEnd('Multiplication');
}
devTest();
