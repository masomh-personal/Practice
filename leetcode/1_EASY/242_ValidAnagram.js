/**
 * Time Complexity: O(n)
 * - The first loop iterates through the string `s` to build the frequency map, taking O(n).
 * - The second loop iterates through the string `t` to validate characters, also taking O(n).
 * - Overall, this results in O(2n), which simplifies to O(n).

 * Space Complexity: O(1)
 * - The space complexity is O(1) because the frequency map's size is bounded by the character set (e.g., 26 for lowercase English letters).
 * - Even for Unicode characters, the size of the map is dependent on the character set, not the input length.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  // Create a frequency map for the first string
  const sMap = {};
  for (const char of s) {
    sMap[char] = (sMap[char] ?? 0) + 1;
  }

  // Loop through the second string and check against the frequency map
  for (const char of t) {
    if (!sMap[char]) {
      return false; // Fail fast if the char is not found or count is zero
    }
    sMap[char]--; // Decrement the count
  }

  // If we pass the second loop, return true
  return true;
}
