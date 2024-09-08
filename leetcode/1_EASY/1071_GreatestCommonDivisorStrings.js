/**
 * 1071. Greatest Common Divisor (Easy)
 * Time Complexity: O(n + m) due to the string concatenation and comparison.
 * Space Complexity: O(n + m) due to the storage used by the concatenated strings.
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
export const gcdOfStrings = (str1, str2) => {
  // Check if str1 and str2 can be constructed by repeating the same base string
  if (str1 + str2 !== str2 + str1) return '';

  // Helper function using Euclid's algorithm to get GCD of two lengths
  const getGcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  // Return the substring of str1 from index 0 to the GCD of the lengths
  return str1.slice(0, getGcd(str1.length, str2.length));
};
