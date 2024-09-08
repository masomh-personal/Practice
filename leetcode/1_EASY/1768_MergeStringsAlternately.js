/**
 * 1768. Merge Strings Alternately (Easy)
 * Time: O(n)
 * Space: O(n)
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
export const mergeAlternately = (word1, word2) => {
  const w1Length = word1.length;
  const w2Length = word2.length;
  const shortestWordLength = Math.min(w1Length, w2Length); // get shortest of two word lengths to do main loop
  const mergedString = Array(w1Length + w2Length); // Pre-allocate the array to hold the merged string

  let i = 0; // Pointer for alternating at each iteration
  let j = 0; // Pointer for the mergedString array

  // Merge characters alternately from both words
  while (i < shortestWordLength) {
    mergedString[j++] = word1[i]; // Add character from word1 to mergedString
    mergedString[j++] = word2[i]; // Add character from word2 to mergedString
    i++; // Move to the next character
  }

  // Append remaining characters from either word1 or word2 (whichever is longer)
  // Spread the merged array and add any leftover characters from word1 or word2,
  // then join the array into a final string.
  return [...mergedString, word1.slice(i), word2.slice(i)].join('');
};
