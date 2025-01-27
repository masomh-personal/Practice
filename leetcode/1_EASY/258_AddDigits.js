/**
 * Approach:
 * - Mathematical formula for finding the digital root in a decimal numeral system.
 * - Reference/Credit: https://en.wikipedia.org/wiki/Digital_root
 * - This approach eliminates the need for iterative digit summing by leveraging modular arithmetic.
 *
 * Time Complexity: O(1) - The formula computes the result in constant time.
 * Space Complexity: O(1) - No additional space is required.
 *
 * @param {number} num - The input number to reduce to a single digit.
 * @return {number} - The resulting single-digit number after applying the digital root formula.
 */
export function addDigits(num) {
  // Compute the digital root using the mathematical formula
  return num === 0 ? 0 : 1 + ((num - 1) % 9);
}

/**
 * Approach:
 * - Use modulo and integer division to extract and sum the digits of the number.
 * - Continue reducing the number until it becomes a single digit.
 * - This approach avoids the overhead of string conversion and uses simple arithmetic operations.
 *
 * Time Complexity: O(k), where k is the number of digit-reduction steps.
 * - Each step reduces the number logarithmically based on the number's magnitude.
 *
 * Space Complexity: O(1), as the solution only uses a few variables and does not require additional memory.
 *
 * @param {number} num - The input number to reduce to a single digit.
 * @return {number} - The resulting single-digit number after summing its digits repeatedly.
 */
export function addDigitsV2(num) {
  // Avoid mutating the input directly
  let currNum = num;

  // Reduce the number until it is a single digit
  while (currNum > 9) {
    const lastDigit = currNum % 10; // Get the last digit of the number
    currNum = Math.floor(currNum / 10) + lastDigit; // Add the remaining digits to the last digit
  }

  return currNum; // Return the final single-digit result
}

/**
 * Approach:
 * - Use a loop to repeatedly sum the digits of the input number until it becomes a single digit.
 * - Convert the number to a string, split it into individual digits, and sum them.
 * - Return the resulting single-digit number.
 *
 * Time Complexity: O(k * d), where:
 *   - k is the number of iterations (digit reduction steps).
 *   - d is the number of digits in the current number.
 *   Each iteration involves summing the digits, so the complexity is proportional to the number of digits.
 *
 * Space Complexity: O(d), where d is the number of digits in the input number.
 *   - Space is used for converting the number to a string and splitting it into digits.
 *
 * @param {number} num - The input number to reduce to a single digit.
 * @return {number} - The resulting single-digit number after repeated digit sums.
 */
export function addDigitsNaive(num) {
  // Edge case: num is already a single-digit number
  if (num < 10) return num;

  let currentSum = num; // Avoid mutating the input number

  // Repeat until the sum is a single digit
  while (currentSum >= 10) {
    // Convert the current number to a string, split into digits, and sum them
    currentSum = currentSum
      .toString()
      .split('')
      .reduce((sum, digit) => sum + +digit, 0); // Accumulate the sum of digits
  }

  return currentSum; // Return the final single-digit result
}
