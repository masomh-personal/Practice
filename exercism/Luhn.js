/**
 * Checks if a string is a valid Luhn number
 *
 * @param {string} str - The input string to validate
 * @returns {boolean} - True if valid, False otherwise
 */
export const valid = (str) => {
  // Guard: length 1 or less
  if (str.length <= 1) return false;

  // Fail fast: Check for any character that is NOT a digit or space
  if (/[^0-9\s]/.test(str)) {
    return false;
  }

  // Normalize the string by removing all spaces
  const normalized = str.replace(/\s/g, '');

  // Guard: After normalization, the length should be greater than 1
  if (normalized.length <= 1) return false;

  // Step #1: Combine doubling and summation in a single loop (we don't need to map to Numbers)
  let sum = 0;
  const n = normalized.length;
  for (let i = n - 1; i >= 0; i--) {
    let digit = Number(normalized[i]);

    // Double every second digit from the right
    if ((n - i) % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    // Accumulate the sum
    sum += digit;
  }

  // Step #2: Check if the sum is divisible by 10
  return sum % 10 === 0;
};
