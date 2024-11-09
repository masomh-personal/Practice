export class Codec {
  #delimiter = '#';

  /**
   * Encodes a list of strings to a single string.
   * Each string is prefixed by its length and a delimiter, so we can reliably decode.
   * Example: ["Hello", "World"] -> "5#Hello5#World"
   * @param {string[]} strArr - Array of strings to encode.
   * @return {string} - Encoded string representation of the list.
   */
  encode(strArr) {
    return strArr.map((str) => `${str.length}${this.#delimiter}${str}`).join('');
  }

  /**
   * Decodes a single string back to a list of strings.
   * Extracts each string by reading its length and slicing accordingly.
   * @param {string} s - Encoded string to decode.
   * @return {string[]} - Decoded list of original strings.
   */
  decode(s) {
    const decoded = [];
    let i = 0;

    while (i < s.length) {
      // Find the delimiter to get the length of the next string
      let j = i;
      while (s[j] !== this.#delimiter) {
        j++;
      }

      // Extract the length (from i to j) and convert it to a number
      const length = parseInt(s.slice(i, j), 10);
      i = j + 1; // Move past the delimiter

      // Extract the actual string using the length
      decoded.push(s.slice(i, i + length));
      i += length; // Move to the next encoded string
    }

    return decoded;
  }
}

// ===============================================================
// LEETCODE code format
// DEV Note: using JSON.stringify() / JSON.parse() could be a great way of solving this as well
// ===============================================================
const delimiter = '#';

/**
 * Encodes a list of strings to a single string.
 * Each string is prefixed by its length and a delimiter, so we can reliably decode.
 * Example: ["Hello", "World"] -> "5#Hello5#World"
 * @param {string[]} strArr - Array of strings to encode.
 * @return {string} - Encoded string representation of the list.
 */
function encode(strArr) {
  return strArr.map((str) => `${str.length}${delimiter}${str}`).join('');
}

/**
 * Decodes a single string back to a list of strings.
 * Extracts each string by reading its length and slicing accordingly.
 * @param {string} s - Encoded string to decode.
 * @return {string[]} - Decoded list of original strings.
 */
function decode(s) {
  const decoded = [];
  let i = 0;

  while (i < s.length) {
    // Find the delimiter to get the length of the next string
    let j = i;
    while (s[j] !== delimiter) {
      j++;
    }

    // Extract the length (from i to j) and convert it to a number
    const length = parseInt(s.slice(i, j), 10);
    i = j + 1; // Move past the delimiter

    // Extract the actual string using the length
    decoded.push(s.slice(i, i + length));
    i += length; // Move to the next encoded string
  }

  return decoded;
}
