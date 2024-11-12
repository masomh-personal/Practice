/**
 * Checks if a string is a palindrome, ignoring non-alphanumeric characters and case.
 *
 * Time Complexity: O(n) - Processing each character once for normalization and palindrome check.
 * Space Complexity: O(m) - Storing only alphanumeric characters, where m <= n.
 *
 * @param {string} s - The input string.
 * @return {boolean} - Returns true if the string is a palindrome; otherwise, false.
 */
export const isPalindrome = (s) => {
  // Convert to lowercase and then remove non-alphanumeric characters.
  // Using `replace` here instead of `match` is more efficient since `replace`
  // directly returns a single normalized string without creating an intermediate array.
  const normalizedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // If only one or zero alphanumeric characters, it’s a palindrome by default
  if (normalizedString.length <= 1) return true;

  // Two-pointer approach to check palindrome properties
  let leftIdx = 0;
  let rightIdx = normalizedString.length - 1;

  while (leftIdx < rightIdx) {
    if (normalizedString[leftIdx] !== normalizedString[rightIdx]) {
      return false; // Mismatch found, not a palindrome
    }
    leftIdx++;
    rightIdx--;
  }

  return true; // All characters matched, it's a palindrome
};
