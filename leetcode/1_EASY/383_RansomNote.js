/**
 * Time Complexity: O(n)
 * - We traverse the magazine to create a frequency map (O(m), where m is magazine length).
 * - We traverse the ransomNote to validate constructible (O(r), where r is ransomNote length).
 * - Total: O(m + r) -> linear time.
 *
 * Space Complexity: O(n)
 * - Frequency map requires space proportional to the unique characters in the magazine (O(m)).
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
export const canConstruct = (ransomNote, magazine) => {
  // Quick win! An empty ransom note can always be constructed. No letters needed, no problem!
  if (ransomNote === '') return true;

  // Step 1: Create a frequency map for the magazine
  // This counts how many times each letter appears in the magazine.
  const freqMap = new Map();
  for (const char of magazine) {
    // If char exists, increment its count; if not, set it to 1.
    freqMap.set(char, (freqMap.get(char) ?? 0) + 1);
  }

  // Step 2: Verify if ransomNote can be constructed
  for (const char of ransomNote) {
    const currCharCount = freqMap.get(char) ?? 0; // Get available count or default to 0.
    if (currCharCount === 0) {
      // Ran out of available letters in magazine "pot"/map
      return false;
    }
    // Use up one occurrence of the current letter.
    freqMap.set(char, currCharCount - 1);
  }

  // If we made it here, congrats! The ransom note can be fully constructed.
  return true;
};
