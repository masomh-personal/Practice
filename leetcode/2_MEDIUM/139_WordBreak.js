/**
 * Recursive Backtracking and Memoization
 * NOTE: optimized using min/max word length bounds
 *
 * TIME: O(n^2) - For each index, we can explore up to n substrings due to slicing.
 * SPACE: O(n) - Due to recursion depth and memoization storage.
 *
 * @param {string} s - The input string to segment.
 * @param {string[]} wordDict - Array of words that form the dictionary.
 * @return {boolean} - True if the string can be segmented, false otherwise.
 */
export function wordBreak(s, wordDict) {
  // Convert wordDict to a Set for O(1) lookups
  const wordSet = new Set(wordDict);

  // Let's find min and max word lengths for world length bounds
  let minLen = Infinity;
  let maxLen = -Infinity;
  for (const word of wordDict) {
    const currWordLen = word.length;
    minLen = Math.min(minLen, currWordLen);
    maxLen = Math.max(maxLen, currWordLen);
  }

  // Map to memoize results for each start index (number => boolean)
  const memo = new Map();

  /**
   * Helper function to determine if the substring s[startIdx...] can be segmented.
   * Uses memoization to avoid redundant calculations for the same start index.
   *
   * @param {number} startIdx - The start index of the current substring.
   * @returns {boolean} - True if the substring from startIdx can be segmented.
   */
  const canBreakSegment = (startIdx) => {
    // Base Case: If we reach the end of the string, it's a valid segmentation
    if (startIdx === s.length) {
      return true;
    }

    // Check the memo map to avoid re-calculating results for the same index
    if (memo.has(startIdx)) {
      return memo.get(startIdx);
    }

    // Iterate through all possible substrings starting at startIdx
    // Iterate through all possible substrings within word length bounds
    for (let i = startIdx + minLen; i <= Math.min(startIdx + maxLen, s.length); i++) {
      // Extract the current substring from startIdx to i
      const currSubstring = s.substring(startIdx, i);

      // Check if substring exists in the word set and recursively check the remainder
      if (wordSet.has(currSubstring) && canBreakSegment(i)) {
        // If valid, store result in memo and return true
        memo.set(startIdx, true);
        return true;
      }
    }

    // If no valid segmentation is found, memoize and return false
    memo.set(startIdx, false);
    return false;
  };

  // Initiate the recursive check starting from index 0
  return canBreakSegment(0);
}

/**
 * Word Break using Breadth-First Search (BFS)
 *
 * TIME: O(n^2) - For each index, substrings are checked, and each index is visited once
 * SPACE: O(n) - Queue and visited set store indices up to the length of the string
 *
 * @param {string} s - The input string to segment
 * @param {string[]} wordDict - Array of words that form the dictionary
 * @return {boolean} - True if the string can be segmented, false otherwise
 */
export function wordBreakBFS(s, wordDict) {
  // Convert wordDict to a Set for fast lookups
  const wordSet = new Set(wordDict);

  // Calculate minimum and maximum word lengths in the dictionary for substring bounds
  let minLen = Infinity;
  let maxLen = -Infinity;
  for (const word of wordDict) {
    const wordLen = word.length;
    minLen = Math.min(minLen, wordLen);
    maxLen = Math.max(maxLen, wordLen);
  }

  // Queue to track indices for exploration, starting with 0
  const queue = [0];

  // Set to track visited indices and avoid redundant checks
  const visited = new Set();

  while (queue.length > 0) {
    // Dequeue the next index to explore
    const startIdx = queue.shift();

    // Skip this index if it has already been visited
    if (visited.has(startIdx)) {
      continue;
    }

    // Mark the current index as visited
    visited.add(startIdx);

    // Iterate over substrings of lengths within the bounds of minLen and maxLen
    for (let i = startIdx + minLen; i <= Math.min(startIdx + maxLen, s.length); i++) {
      const currSubstring = s.substring(startIdx, i); // Extract substring from startIdx to i

      // If the current substring exists in wordSet
      if (wordSet.has(currSubstring)) {
        // If this substring reaches the end of the string, return true
        if (i === s.length) {
          return true;
        }

        // Otherwise, enqueue the next index to explore (end of current valid substring)
        queue.push(i);
      }
    }
  }

  // If no valid segmentation is found, return false
  return false;
}
