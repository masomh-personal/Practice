/**
 * Compresses the input array of characters in place, using constant extra space.
 * Time: O(n)
 * Space: O(1)
 * @param {string[]} chars
 * @return {number} The new length of the compressed array.
 */
export const compress = (chars) => {
  // Base case: If there's only one character, return 1 (no compression needed).
  if (chars.length === 1) return 1;

  let writer = 0; // This will track where to write compressed results.
  let anchor = 0; // Pointer to traverse the array.

  // Traverse the entire array of characters.
  while (anchor < chars.length) {
    const char = chars[anchor]; // Current character.
    let count = 0;

    // Count occurrences of the current character.
    while (anchor < chars.length && chars[anchor] === char) {
      anchor++;
      count++;
    }

    // Write the character to the array.
    chars[writer] = char;
    writer++;

    // If there are more than one occurrence, write the count.
    if (count > 1) {
      const countStr = count.toString();
      for (const numChar of countStr) {
        chars[writer] = numChar;
        writer++;
      }
    }
  }

  // Return the new length of the compressed array.
  return writer;
};

/**
 * Naive compression that builds a new string based on character frequencies.
 * Time: O(n)
 * Space: O(n)
 * @param {string[]} chars
 * @return {number} The length of the newly created array.
 */
export const compressNaive = (chars) => {
  // Base case: If there's only one character, return 1.
  if (chars.length === 1) return 1;

  const freqMap = new Map();
  let result = [];

  // Count the total occurrences of each character (global frequency).
  for (const char of chars) {
    freqMap.set(char, (freqMap.get(char) ?? 0) + 1);
  }

  // Construct a new array from the frequency map.
  for (const [char, count] of freqMap) {
    result.push(char);
    if (count > 1) {
      result.push(...count.toString()); // Push each digit of the count as a separate character.
    }
  }

  // This array creation is not in-place, but it simulates compression.
  return result.length;
};
