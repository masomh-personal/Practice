/**
 * 3. Longest Substring Without Repeating Characters (MEDIUM)
 *
 * Time Complexity: O(n)
 *   - We iterate through the string once with the 'runner' pointer.
 *   - The 'anchor' pointer also moves forward, but each character is processed once,
 *     making the overall time complexity O(n), where n is the length of the string.
 *
 * Space Complexity: O(min(n, m))
 *   - The space complexity depends on the number of unique characters in the string.
 *   - In the worst case, the Set will hold all unique characters in the input string.
 *   - If the string contains more characters than the alphabet size (e.g., ASCII set with m characters),
 *     the space complexity is O(m). Otherwise, it is O(n) if all characters are unique.
 *
 * @param {string} s - input string
 * @return {number} - length of the longest substring without repeating characters
 */
export const lengthOfLongestSubstring = (s) => {
  const n = s.length;

  // If the string is empty or has one character, return its length
  if (n <= 1) return n;

  let result = 0; // Stores the length of the longest substring found
  const seen = new Set(); // Set to track characters in the current window (substring)
  let anchor = 0; // 'anchor' marks the start of the current substring

  // Loop through the string with 'runner' as the end of the current window
  for (let runner = 0; runner < n; runner++) {
    const runnerVal = s.at(runner); // Character at the current 'runner' position

    // If the current character already exists in the Set, move the 'anchor'
    // and remove characters from the Set until the duplicate is removed
    while (seen.has(runnerVal)) {
      seen.delete(s.at(anchor)); // Remove the character at the 'anchor' from the Set
      anchor++; // Move the 'anchor' forward to shrink the window
    }

    // Add the current character to the Set as it's now part of the window
    seen.add(runnerVal);

    // Update the result with the maximum window size found so far
    result = Math.max(result, runner - anchor + 1);
  }

  return result; // Return the length of the longest substring found
};
