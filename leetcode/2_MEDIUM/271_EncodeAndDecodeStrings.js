export const DELIMITER = '\u26AA'; // ⚪ (WHITE CIRCLE)

/**
 * Time Complexity: O(n) - Joins all words in a single pass.
 * Space Complexity: O(n) - Stores the encoded string.
 *
 * Encodes a list of strings to a single string using a delimiter-based approach.
 * @param {string[]} words
 * @return {string}
 */
export function encode(words) {
  return words.join(DELIMITER);
}

/**
 * Time Complexity: O(n) - Splits the string in a single pass.
 * Space Complexity: O(n) - Stores the decoded array of words.
 *
 * Decodes a single string to a list of strings using a delimiter-based approach.
 * @param {string} word
 * @return {string[]}
 */
export function decode(word) {
  return word.split(DELIMITER);
}

/**
 * Time Complexity: O(n) - Iterates through all words and constructs the encoded string.
 * Space Complexity: O(n) - Stores the encoded string.
 *
 * Encodes an array of strings using length-prefix encoding.
 * Each word is prefixed with its length followed by a `#` separator.
 * @param {string[]} words
 * @return {string}
 */
export function encodeLengthPrefix(words) {
  return words.map((word) => `${word.length}#${word}`).join('');
}

/**
 * Time Complexity: O(n) - Iterates through the encoded string while parsing word lengths.
 * Space Complexity: O(n) - Stores the decoded array of words.
 *
 * Decodes a length-prefixed encoded string back into an array of strings.
 * Extracts each word by reading the length before the `#` separator.
 * @param {string} encoded
 * @return {string[]}
 */
export function decodeLengthPrefix(encoded) {
  let result = [];
  let i = 0;

  while (i < encoded.length) {
    let j = i;

    // Find the position of the next '#' to extract the length
    while (encoded[j] !== '#') j++;

    let length = parseInt(encoded.slice(i, j)); // Extract length
    let word = encoded.slice(j + 1, j + 1 + length); // Extract word

    result.push(word);
    i = j + 1 + length; // Move pointer forward
  }

  return result;
}
