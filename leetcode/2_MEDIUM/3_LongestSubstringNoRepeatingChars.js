/**
 * Optimized HashMap Approach with 0-based indexing
 * Time Complexity: O(n) - Each character is visited at most twice (once by `right` and once by `left` pointer).
 * Space Complexity: O(k) - Where `k` is the size of the character set (e.g., 26 for lowercase English letters).
 * @param {string} str - Input string.
 * @return {number} - Length of the longest substring without repeating characters.
 */
export function lengthOfLongestSubstring(str) {
  const n = str.length;

  // Edge case: If string is empty or contains only one character, return its length
  if (n <= 1) return n;

  let longest = 0; // Variable to store the length of the longest substring
  const charIdxMap = new Map(); // HashMap to store the last seen position of each character

  // Two-pointer technique with `left` and `right` pointers
  for (let left = 0, right = 0; right < n; right++) {
    const currRightChar = str[right];

    // If the current character is already in the map, update the `left` pointer
    if (charIdxMap.has(currRightChar)) {
      // Move `left` to the maximum of its current position or the position after the duplicate
      left = Math.max(left, charIdxMap.get(currRightChar) + 1);
    }

    // Update the longest substring length using the current window size
    longest = Math.max(longest, right - left + 1);

    // Store the current character's position in the map
    charIdxMap.set(currRightChar, right);
  }

  return longest;
}

/**
 * Finds the length of the longest substring without repeating characters.
 * Time: O(n) - `left` and `right` pointers traverse the string once, resulting in linear time complexity.
 * Space: O(k) - Uses a Set to track unique characters in the current window
 * @param {string} str - Input string.
 * @return {number} - Length of the longest substring without repeating characters.
 *
 */
export function lengthOfLongestSubstringV2(str) {
  const n = str.length;

  // Edge case: Empty or single-character strings return their length
  if (n <= 1) return n;

  // Tracking variables and set
  let longest = 0;
  const seen = new Set();
  let left = 0;

  // Iterate with the right pointer to expand the window
  for (let right = 0; right < n; right++) {
    // If a duplicate character is encountered, adjust the window by moving the left pointer
    while (seen.has(str[right])) {
      // Remove the leftmost character from the set, as it is no longer part of the current window
      seen.delete(str[left]);

      // Move the left pointer forward to shrink the window and resolve the duplicate
      left++;
    }

    // Add the current character to the set
    seen.add(str[right]);

    // Update the longest substring length
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}
