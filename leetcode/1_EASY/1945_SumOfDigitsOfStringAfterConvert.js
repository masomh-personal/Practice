/**
 * Time Complexity: O(n + log m)
 *   - O(n) for the initial conversion from letters to numbers.
 *   - O(log m) for digit summation transformations (since sum reduces in magnitude).
 * Space Complexity: O(1)
 *   - Uses only a few variables and no additional data structures.
 *
 * @param {string} s - The input string containing only lowercase English letters.
 * @param {number} k - The number of transformations to apply.
 * @return {number} - The final sum after k transformations.
 */
export function getLucky(s, k) {
  // Convert letters to numeric string (a=1, b=2, ..., z=26)
  const convertAlphaStringToNumString = (str) => {
    let result = '';
    for (const char of str) {
      result += char.charCodeAt(0) - 96;
    }
    return result;
  };

  // Sum digits of a numeric string
  const sumNumStringsInArray = (str) => {
    let sum = 0;
    for (const numChar of str) {
      sum += +numChar; // Faster than Number(numChar)
    }
    return sum;
  };

  // Convert the input string to its corresponding numeric string
  let result = sumNumStringsInArray(convertAlphaStringToNumString(s));

  // Apply the transformation k - 1 more times
  for (let i = 1; i < k; i++) {
    if (result < 10) return result; // Stop early if result is already a single digit
    result = sumNumStringsInArray(result.toString());
  }

  return result;
}
