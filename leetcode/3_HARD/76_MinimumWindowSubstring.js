/**
 * APPROACH: Two Pointers + Sliding Window
 *
 * Time: O(n) - We traverse the string with two pointers, each moving at most n times.
 * Space: O(k) - Where k is the number of unique characters in `availableChars` (constant for ASCII).
 *
 * @param {string} pot - The main string (s)
 * @param {string} availableChars - The substring characters we need to match (t)
 * @return {string} - The minimum window substring containing all characters of `availableChars`
 */
export function minWindow(pot, availableChars) {
  // Edge case: If t is longer than s, no valid substring exists
  if (availableChars.length > pot.length) return '';

  let result = '';
  let left = 0,
    right = 0; // Two pointers to track the window
  let minLen = Infinity; // Track the smallest window size

  // Step 1: Create a frequency map for `availableChars`
  const freqMapAvailableChars = new Map();
  for (const char of availableChars) {
    freqMapAvailableChars.set(char, (freqMapAvailableChars.get(char) ?? 0) + 1);
  }

  let requiredMatches = freqMapAvailableChars.size; // Unique characters to match

  // Helper function to modify a frequency map value (increment/decrement)
  // Assumes that the key already exists in the map (since it's pre-populated from `availableChars`)
  // NOTE: we do not care about 'missing' keys as we are sure what will be passed in
  // No need for checks
  const manipulateMapValue = (map, key, delta) => {
    if (map.has(key)) {
      map.set(key, map.get(key) + delta);
    }
  };

  // Step 2: Expand right pointer to form a valid window
  while (right < pot.length) {
    const rightChar = pot[right];

    if (freqMapAvailableChars.has(rightChar)) {
      const rightCharCount = freqMapAvailableChars.get(rightChar);
      manipulateMapValue(freqMapAvailableChars, rightChar, -1);

      // When a character count reaches zero, it means all required occurrences are found
      if (rightCharCount === 1) requiredMatches--;
    }

    // Step 3: Contract the left pointer to minimize the window
    while (requiredMatches === 0) {
      // Valid window found
      const currWindowSize = right - left + 1;

      // Update result if the new window is smaller
      if (currWindowSize < minLen) {
        minLen = currWindowSize;
        result = pot.substring(left, right + 1); // `substring` excludes end index
      }

      const leftChar = pot[left];

      // Remove left character and adjust matches
      if (freqMapAvailableChars.has(leftChar)) {
        const leftCharCount = freqMapAvailableChars.get(leftChar);

        // If this character is at 0, removing it invalidates the window
        if (leftCharCount === 0) requiredMatches++; // Lost a fully matched character

        manipulateMapValue(freqMapAvailableChars, leftChar, 1);
      }

      left++; // SHRINK the window
    }

    right++; // EXPAND the window until we reach end of pot string
  }

  return result;
}
