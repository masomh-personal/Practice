/**
 * Time: O(n) - Iterate over the string to populate the frequency map, then iterate over the map's values.
 * Space: O(k) - Store at most k unique characters in the map, where k is the size of the alphabet (constant for ASCII).
 * @param {string} str
 * @return {boolean}
 */
export function canPermutePalindrome(str) {
  const n = str.length;
  if (n <= 1) return true; // Handle empty or single-character strings

  const isEven = (num) => num % 2 === 0;

  // Create frequency counter map
  const sMap = new Map();
  for (const char of str) {
    sMap.set(char, (sMap.get(char) ?? 0) + 1);
  }

  // Determine if a palindrome can be formed
  let allowedOdd = isEven(n) ? 0 : 1; // Allow one odd count for odd-length strings
  for (const count of sMap.values()) {
    if (!isEven(count)) {
      if (--allowedOdd < 0) return false; // Too many odd counts
    }
  }

  return true;
}
