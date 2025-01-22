/**
 * Approach: Using core JS (not allowed)
 * Time: O(1)
 * Space: O(1)
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
export function myPowCore(x, n) {
  return x ** n;
}

/**
 * Approach: Calculate x raised to the power of n (x^n) using Exponentiation by Squaring.
 * Time Complexity: O(log n) - The exponent is halved in each iteration, leading to logarithmic time complexity.
 * Space Complexity: O(1) - No additional data structures are used, only constant space is required.
 *
 * @param {number} x - The base value, which can be positive, negative, or fractional.
 * @param {number} n - The exponent value, which can be positive, negative, or zero.
 * @return {number} - The result of x raised to the power of n (x^n).
 */
export function myPow(x, n) {
  // Base case
  if (n === 0) return 1;

  let base = n < 0 ? 1 / x : x;
  let exp = Math.abs(n);
  let result = 1;

  while (exp > 0) {
    // Multiply result when the current exponent is odd
    if (exp % 2 === 1) result *= base;

    // Square the base
    base *= base;

    // Halve the exponent
    exp = Math.floor(exp / 2);
  }

  return result;
}

/**
 * Approach: Recursively calculate x raised to the power of n (x^n) using Exponentiation by Squaring.
 * Time Complexity: O(log n) - The exponent is halved in each recursive step, leading to logarithmic time complexity.
 * Space Complexity: O(log n) - Due to the recursive call stack.
 *
 * @param {number} x - The base value, which can be positive, negative, or fractional.
 * @param {number} n - The exponent value, which can be positive, negative, or zero.
 * @return {number} - The result of x raised to the power of n (x^n).
 */
export function myPowRecursive(x, n) {
  // Handle the base case where n is 0
  if (n === 0) return 1;

  // Handle negative exponents by inverting the base and making the exponent positive
  const base = n < 0 ? 1 / x : x;
  const exponent = Math.abs(n);

  // Recursive helper function for Exponentiation by Squaring
  const recursiveBinExp = (base, exponent) => {
    // Base case: when exponent reduces to 0
    if (exponent === 0) return 1;

    // If the exponent is odd, multiply the base with the result of halving the exponent
    if (exponent % 2 === 1) {
      return base * recursiveBinExp(base * base, Math.floor(exponent / 2));
    }

    // If the exponent is even, simply square the base and halve the exponent
    return recursiveBinExp(base * base, exponent / 2);
  };

  // Initiate recursion
  return recursiveBinExp(base, exponent);
}

/**
 * Approach: Naive implementation using a loop and an accumulator.
 * Time Complexity: O(n) - Loops n times, where n is the absolute value of the exponent.
 * Space Complexity: O(1) - Uses only basic variables without additional data structures.
 *
 * @param {number} x - The base value, which can be positive, negative, or fractional.
 * @param {number} n - The exponent value, which can be positive, negative, or zero.
 * @return {number} - The result of x raised to the power of n (x^n).
 */
export function myPowNaive(x, n) {
  // Handle the base case where n is 0
  if (n === 0) return 1;

  // Normalize the exponent to be positive for simplicity
  const normalizedN = Math.abs(n);

  // Determine the factor to multiply based on the sign of n
  const factor = n >= 0 ? x : 1 / x;

  let result = 1;
  // Multiply result by factor normalizedN times
  for (let i = 0; i < normalizedN; i++) {
    result *= factor;
  }

  return result;
}
