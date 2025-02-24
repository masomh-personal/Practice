/**
 * Optimized HashMap Approach with 0-based indexing
 * Time Complexity: O(n) - Each character is visited at most twice (once by `right` and once by `left` pointer).
 * Space Complexity: O(k) - Where `k` is the size of the character set (e.g., 26 for lowercase English letters).
 * @param {string} str - Input string.
 * @return {number} - Length of the longest substring without repeating characters.
 */
export function lengthOfLongestSubstring(str) {
  // Guard: edge case when str.length equals 0 or 1
  const n = str.length;
  if (n <= 1) return n;

  let longest = 0; // result variable to return at end
  let left = 0; // left pointer
  const seenMapRecentIdx = new Map(); // char => most recent idx map

  for (let right = 0; right < n; right++) {
    const rightChar = str[right];

    // Check if rightChar has been seen and is within the current window
    if (seenMapRecentIdx.has(rightChar) && seenMapRecentIdx.get(rightChar) >= left) {
      // Move left pointer just past the last occurrence of rightChar by 1
      left = seenMapRecentIdx.get(rightChar) + 1;
    }

    // Update the longest substring length
    // NOTE: + 1 because we have to also include current character
    longest = Math.max(longest, right - left + 1);

    // Update the map with the current index of rightChar
    seenMapRecentIdx.set(rightChar, right);
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
