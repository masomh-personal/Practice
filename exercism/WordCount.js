/**
 * Counts the occurrences of each word in a given string.
 * Words include letters, numbers, and contractions with apostrophes.
 *
 * @param {string} str - The input string to analyze.
 * @returns {Object} - An object mapping each word to its frequency in the string.
 */
export function countWords(str) {
  if (!str.length) return {}; // Handle empty input

  // Match all valid words (letters, numbers, and contractions)
  // Regex: /\b[a-z0-9']+\b/g
  // Explanation:
  // \b       // Matches a word boundary (start or end of a word)
  // [a-z0-9']+ // Matches one or more lowercase letters, numbers, or apostrophes
  // \b       // Matches another word boundary
  // g        // Global flag to find all matches in the string
  const words = str.toLowerCase().match(/\b[a-z0-9']+\b/g) || [];

  // Create a frequency map of words
  return words.reduce((acc, word) => {
    acc[word] = (acc[word] ?? 0) + 1; // Increment the count for each word
    return acc;
  }, {});
}
