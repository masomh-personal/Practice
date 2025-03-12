/**
 * Approach: Expand out from center
 * NOTE: brute force is very inefficient @ O(n **3)
 *
 * Time Complexity: O(n ** 2)
 * - We consider each position in the string as a potential center: O(n)
 * - For each center, we potentially expand to check the entire string: O(n)
 *
 * Space Complexity: O(1)
 * - We only use a constant amount of extra space regardless of input size (variables)
 *
 * @param {string} str - The input string to search for palindromic substrings
 * @returns {string} The longest palindromic substring found
 */
export function longestPalindrome(str) {
  if (str.length <= 1) return str;

  let start = 0;
  let maxLength = 1;

  // HELPER: to expand around a potential palindrome center
  function expandAroundCenter(left, right) {
    // Continue expanding as long as characters match and we're within bounds
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      const currentLength = right - left + 1;

      // Update if we found a longer palindrome
      if (currentLength > maxLength) {
        maxLength = currentLength;
        start = left;
      }

      // Expand each side inner => outward
      left--;
      right++;
    }
  }

  // Check each position as potential center
  for (let i = 0; i < str.length; i++) {
    // Check for odd-length palindromes (single character center)
    expandAroundCenter(i, i);

    // Check for even-length palindromes (between characters)
    expandAroundCenter(i, i + 1);
  }

  // Extract the longest palindromic substring
  return str.slice(start, start + maxLength);
}
