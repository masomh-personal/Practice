/**
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

  // Step #1: Combine doubling and summation using reduceRight
  const n = normalized.length;

  const sum = [...normalized].reduceRight((acc, num, idx) => {
    let digit = Number(num);
    // Double every second digit from the right
    if ((n - idx) % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    // Accumulate the sum
    return acc + digit;
  }, 0);

  // Step #2: Check if the sum is divisible by 10
  return sum % 10 === 0;
};
