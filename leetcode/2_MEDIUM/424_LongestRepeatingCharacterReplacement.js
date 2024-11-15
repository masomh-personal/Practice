/**
 * APPROACH: Sliding Window
 *
 * Time Complexity: O(n) - Each character is processed at most twice (once by the `right` pointer, once by the `left` pointer).
 * Space Complexity: O(1) - The size of `freqMap` is bounded by the number of distinct characters (constant for English uppercase letters).
 *
 * @param {string} s - Input string consisting of only uppercase English letters.
 * @param {number} k - Maximum number of replacements allowed.
 * @return {number} - Length of the longest substring with the same characters after at most k replacements.
 */
export const characterReplacement = (s, k) => {
  // Handle edge cases
  if (s.length === 0) return 0; // If the string is empty, there is no valid substring.
  if (s.length === 1 || k >= s.length) return s.length; // If `s` is a single character, or we can replace every character, return the string's length.

  // Initialize variables
  let maxCount = 0; // Keeps track of the highest frequency of a single character in the current window.
  let result = 0; // Stores the maximum length of a valid substring found so far.

  // Frequency map to count occurrences of characters in the current window
  const freqMap = new Map();

  // Sliding window pointers
  for (let right = 0, left = 0; right < s.length; right++) {
    const currChar = s[right]; // Character at the current `right` pointer

    // Update the frequency of the current character
    freqMap.set(currChar, (freqMap.get(currChar) ?? 0) + 1);

    // Update maxCount to reflect the frequency of the most common character in the current window
    maxCount = Math.max(maxCount, freqMap.get(currChar));

    // Calculate the current window size
    const windowSize = right - left + 1;

    /**
     * Check if the current window is invalid.
     * If the number of replacements required (windowSize - maxCount) exceeds `k`,
     * shrink the window by moving the `left` pointer.
     */
    if (windowSize - maxCount > k) {
      const leftChar = s[left]; // Character at the current `left` pointer
      freqMap.set(leftChar, freqMap.get(leftChar) - 1); // Decrement its frequency as it leaves the window
      left++; // Shrink the window from the left
    }

    /**
     * Update the result.
     * At this point, the window is valid (replacements needed <= k),
     * so update `result` to reflect the largest valid window seen so far.
     */
    result = Math.max(result, right - left + 1);
  }

  // Return the maximum length of a valid substring
  return result;
};
