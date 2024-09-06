/**
 * 58. Length of Last Word
 * Time: O(n) - We iterate through the string once, so the complexity is linear in relation to the length of the string.
 * Space: O(1) - We use a constant amount of extra space regardless of the input size.
 * @param {string} s - Input string containing words and possibly trailing spaces.
 * @return {number} - Length of the last word in the string (words are separated by spaces).
 */
const lengthOfLastWord = (s) => {
  let count = 0; // Variable to store the length of the last word.
  let i = s.length - 1; // Start from the end of the string.

  // Skip trailing spaces if there are any.
  while (i >= 0 && s.at(i) === ' ') {
    i--; // Move backward until we reach a non-space character.
  }

  // Count characters of the last word.
  while (i >= 0 && s.at(i) !== ' ') {
    count++; // Increment count for each character in the last word.
    i--; // Continue moving backward.
  }

  return count; // Return the length of the last word.
};

/**
 * A simpler approach to find the length of the last word using string methods.
 * Time: O(n) - We iterate through the string with trimEnd() and split().
 * Space: O(n) - The split() method creates an array, using additional space.
 * @param {string} s - Input string.
 * @return {number} - Length of the last word in the string.
 */
const lengthOfLastWordNaive = (s) => {
  // Handle single character strings.
  if (s.length === 1) {
    return s.at(0) === ' ' ? 0 : 1; // Return 0 if it's a space, 1 if it's a letter.
  }

  // Trim trailing spaces, split the string into words, and return the length of the last word.
  return s.trimEnd().split(' ').at(-1).length;
};

export { lengthOfLastWordNaive, lengthOfLastWord };
