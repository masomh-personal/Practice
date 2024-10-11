/**
 * HASHMAP approach
 *
 * Time: O(n)
 * Space: O(n)
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
export const closeStrings = (word1, word2) => {
  // If the lengths of the words are different, they can't be close
  if (word1.length !== word2.length) return false;

  // Build frequency map for each word
  const freqMap1 = new Map();
  const freqMap2 = new Map();

  for (const char of word1) {
    freqMap1.set(char, (freqMap1.get(char) ?? 0) + 1);
  }

  for (const char of word2) {
    freqMap2.set(char, (freqMap2.get(char) ?? 0) + 1);
  }

  // Ensure both words have the same number of unique characters
  if (freqMap1.size !== freqMap2.size) return false;

  // Maps to count the frequency of frequencies
  const countMap1 = new Map();
  const countMap2 = new Map();

  // Populate frequency maps and count frequencies in one loop
  for (const [char, count] of freqMap1) {
    // Check if word2 has the same character
    if (!freqMap2.has(char)) return false;

    // Increment count maps for word1 and word2 counts
    countMap1.set(count, (countMap1.get(count) || 0) + 1);
    const word2Count = freqMap2.get(char);
    countMap2.set(word2Count, (countMap2.get(word2Count) || 0) + 1);
  }

  // Compare the frequency maps of frequencies
  for (const [count, freq] of countMap1) {
    // If word2 does not have the same frequency count, return false
    if (countMap2.get(count) !== freq) return false;
  }

  return true;
};

/**
 * FIXED CHARACTER ARRAY Approach
 * Since the problem involves only lowercase English letters, you can replace the Map with arrays of size 26 to represent character frequencies.
 * This reduces the overhead of hashing that comes with Map objects, potentially improving performance in practice.
 *
 * NOTE: The time complexity is still O(n), where n is the length of the input strings
 * SORTING frequency array adds O(26 log 26) which is constant time O(1) because 26 is constant (26 being number of lower case characters)
 *
 * Time: O(n)
 * Space: O(1) (since we are using constant space for the character arrays)
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
export const closeStringsV2 = (word1, word2) => {
  // If the lengths of the words are different, they can't be close
  if (word1.length !== word2.length) return false;

  // Set some constants up
  const NUM_LOWER_CASE_CHARS = 26;
  const ALPHA_OFFSET_A = 97;

  // Initialize arrays for character frequencies (26 slots for 'a' to 'z')
  const freq1 = new Array(NUM_LOWER_CASE_CHARS).fill(0);
  const freq2 = new Array(NUM_LOWER_CASE_CHARS).fill(0);
  const chars1 = new Array(NUM_LOWER_CASE_CHARS).fill(0);
  const chars2 = new Array(NUM_LOWER_CASE_CHARS).fill(0);

  // Count frequencies and mark which characters exist in word1 and word2
  for (let i = 0; i < word1.length; i++) {
    const index1 = word1.charCodeAt(i) - ALPHA_OFFSET_A; // 'a' -> 0, 'b' -> 1, etc.
    const index2 = word2.charCodeAt(i) - ALPHA_OFFSET_A;
    freq1[index1]++;
    freq2[index2]++;
    chars1[index1] = 1; // Mark that this character exists in word1
    chars2[index2] = 1; // Mark that this character exists in word2
  }

  // If both words do not contain the same set of characters, return false
  for (let i = 0; i < NUM_LOWER_CASE_CHARS; i++) {
    if (chars1[i] !== chars2[i]) return false;
  }

  // Sort the frequency arrays and compare (constant time because 26 is constant)
  freq1.sort((a, b) => a - b);
  freq2.sort((a, b) => a - b);

  // We can simply use Array.every() to check each freq idx of both arrays
  return freq1.every((num, idx) => num === freq2[idx]);
};
