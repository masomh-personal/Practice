/**
 * Converts a string to a 32-bit signed integer (mimics C/C++'s atoi function).
 *
 * Approach: Incremental Processing with Early Overflow Detection
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
    const digit = +trimmed[index];

    // Check for potential overflow before adding new digit
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
    ) {
      // Early return if overflow detected
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    // Build result incrementally
    result = result * 10 + digit;
    index++;
  }

  // Apply sign (no need to check bounds again)
  return result * sign;
}
