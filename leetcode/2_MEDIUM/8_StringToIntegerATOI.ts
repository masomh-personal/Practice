/**
 * Converts a string to a 32-bit signed integer (mimics C/C++'s atoi function).
 *
 * Approach: Incremental Processing
 * Time: O(n) - single pass through the input string
 * Space: O(1) - only using primitive variables
 *
 * @param {string} str - The input string to convert
 * @returns {number} The parsed integer within the 32-bit signed integer range
 */
export function myAtoi(str: string): number {
  const INT_MAX = 2 ** 31 - 1; // 2_147_483_647
  const INT_MIN = -(2 ** 31); // -2_147_483_648

  // Helper function to check if character is a digit
  const isDigit = (char: string): boolean => char >= '0' && char <= '9';

  // Remove leading whitespace
  const trimmed = str.trim();
  if (!trimmed) return 0;

  // Process sign character if present
  let index = 0;
  let sign = 1;

  if (['-', '+'].includes(trimmed[0])) {
    sign = trimmed[0] === '-' ? -1 : 1;
    index++;
  }

  // Extract consecutive digits
  let result = 0;

  while (index < trimmed.length && isDigit(trimmed[index])) {
    // Convert character to digit and add to result
    // NOTE: The approach is elegant because it follows a mathematical principle: a number can be
    // constructed digit by digit from left to right by repeatedly multiplying by the base (10)
    // and adding the next digit.
    result = result * 10 + +trimmed[index];
    index++;
  }

  // Apply sign and handle 32-bit integer boundaries
  result *= sign;

  // Clamping pattern
  // NOTE: This pattern creates a "bounded range" where the value cannot be less than INT_MIN
  // or greater than INT_MAX. It's a standard idiom in programming that's both concise and readable
  // once you understand it.
  return Math.max(INT_MIN, Math.min(INT_MAX, result));
}
