/**
 * Finds the first letter in the string that appears twice using an array as a lookup.
 *
 * Time: O(n) - We traverse the string once, checking each character.
 * Space: O(26) or O(1) - Constant space for the lookup array since there are 26 lowercase letters.
 *
 * @param {string} s - Input string consisting of lowercase English letters.
 * @return {string} - The first letter that appears twice in the string.
 */
export const repeatedCharacter = function (s) {
  // Create an array of size 26 initialized to false (to track seen characters).
  const lookupArr = Array(26).fill(false);
  const A_CHAR_CODE = 97; // ASCII code for 'a', used to normalize character codes.

  // Iterate over each character in the string.
  for (const char of s) {
    // Normalize the character code to map 'a' -> 0, 'b' -> 1, ..., 'z' -> 25.
    const normalizedCharCode = char.charCodeAt(0) - A_CHAR_CODE;

    // If the character has already been seen, return it as the first repeated character.
    if (lookupArr[normalizedCharCode]) return char;

    // Mark the character as seen by setting its corresponding index to true.
    lookupArr[normalizedCharCode] = true;
  }

  // This line should never be reached based on the problem's constraints (guaranteed repeated character).
  return '';
};

/**
 * Finds the first letter in the string that appears twice using a Set to track seen characters.
 *
 * Time: O(n) - We traverse the string once, checking each character.
 * Space: O(26) or O(1) - Constant space for the Set as the input consists of lowercase English letters.
 *
 * @param {string} s - Input string consisting of lowercase English letters.
 * @return {string} - The first letter that appears twice in the string.
 */
export const repeatedCharacterSet = function (s) {
  // Create a Set to track characters that have been seen.
  const seen = new Set();

  // Iterate over each character in the string.
  for (const char of s) {
    // If the character is already in the Set, return it as the first repeated character.
    if (seen.has(char)) return char;

    // Add the character to the Set, marking it as seen.
    seen.add(char);
  }

  // This line should never be reached based on the problem's constraints (guaranteed repeated character).
  return '';
};
