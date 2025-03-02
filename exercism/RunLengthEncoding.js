/**
 * Encodes a string using Run-Length Encoding (RLE).
 * - Consecutive characters are replaced with their count followed by the character.
 * - Single characters remain unchanged.
 *
 * @param {string} str - The input string to be encoded.
 * @returns {string} - The run-length encoded string.
 * @remarks Time Complexity: O(n), Space Complexity: O(n)
 */
export const encode = (str) => {
  if (!str.length) return ''; // Edge case: empty string should return an empty result

  const encoded = []; // Using an array to efficiently build the encoded string
  let seeker = 0; // Pointer to traverse the input string

  while (seeker < str.length) {
    let count = 1; // Initialize count for current character
    const currChar = str[seeker]; // Store the current character

    // Count consecutive occurrences of the same character
    while (currChar === str[++seeker]) count++;

    // Append the count (if > 1) and the character itself to the array
    encoded.push(count > 1 ? count : '', currChar);
  }

  return encoded.join(''); // Convert array to string for optimal performance
};

/**
 * Decodes a run-length encoded string.
 * - Numbers preceding characters indicate how many times to repeat the character.
 * - Single characters remain unchanged.
 *
 * @param {string} str - The run-length encoded string.
 * @returns {string} - The decoded original string.
 * @remarks Time Complexity: O(n), Space Complexity: O(n)
 */
export const decode = (str) => {
  if (!str.length) return ''; // Edge case: empty input should return an empty result

  const decoded = []; // Using an array to efficiently build the decoded string
  let seeker = 0; // Pointer to traverse the encoded input

  while (seeker < str.length) {
    const countBuilder = []; // Array to store multi-digit numbers

    // Collect all consecutive numeric characters to form the repetition count
    while (/\d/.test(str[seeker])) {
      countBuilder.push(str[seeker]);
      seeker++;
    }

    // Convert collected number string to an integer, default to 1 if no number exists
    const count = countBuilder.length ? parseInt(countBuilder.join(''), 10) : 1;
    const char = str[seeker]; // The actual character to be repeated

    // Expand the character based on the parsed count and push to the decoded array
    decoded.push(char.repeat(count));

    seeker++; // Move to the next character
  }

  return decoded.join(''); // Convert array to string for optimal performance
};
