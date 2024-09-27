/**
 * Two pointer approach
 * Determines if string 's' is a subsequence of string 't'.
 * Time: O(n) where n = t.length. In the worst case, we iterate through the entire 't' string.
 * Space: O(1) as we only use a constant amount of extra space (a single index variable).
 *
 * @param {string} s - The potential subsequence string.
 * @param {string} t - The target string.
 * @return {boolean} - Returns true if 's' is a subsequence of 't', otherwise false.
 */
export const isSubsequence = function (s, t) {
  // An empty string is always a subsequence of any string.
  if (!s.length) return true;

  // If both strings are equal, 's' is trivially a subsequence.
  if (s === t) return true;

  // If 's' is longer than 't', 's' cannot be a subsequence.
  if (s.length > t.length) return false;

  let sIdx = 0; // Index to track the position in 's'.

  // Iterate over each character in 't'.
  for (const tChar of t) {
    const sChar = s[sIdx]; // Current character in 's' to be matched.

    // If characters match, move to the next character in 's'.
    if (tChar === sChar) {
      sIdx++;
    }

    // If all characters in 's' have been matched, return true.
    if (sIdx === s.length) return true;
  }

  // If we finish the loop without matching all of 's', return false.
  return false;
};

/**
 * QUEUE approach
 * Educational purposes only!
 * Time: O(n * m) where n = t.length and m = s.length, due to the .shift() operation re-indexing the array each time.
 * Space: O(m) where m = s.length, because of the extra array created from 's'.
 *
 * @param {string} s - The potential subsequence string.
 * @param {string} t - The target string.
 * @return {boolean} - Returns true if 's' is a subsequence of 't', otherwise false.
 */
export const isSubsequenceNaive = function (s, t) {
  if (!s.length) return true;
  if (s === t) return true;
  if (s.length > t.length) return false;

  // Split 's' into an array, treating it like a queue
  const sCharArr = s.split('');

  for (const tChar of t) {
    const sChar = sCharArr[0]; // First character in the queue

    if (tChar === sChar) {
      sCharArr.shift(); // Remove the matched character
    }

    // If all characters in 's' have been matched, return true
    if (sCharArr.length === 0) return true;
  }

  // If not all characters in 's' were found in 't', return false
  return false;
};

/**
 * STACK Approach
 * Educational purposes only!
 * Time: O(n), where n = t.length (iterating over t once)
 * Space: O(m), where m = s.length (due to the extra array created from 's')
 *
 * @param {string} s - The potential subsequence string.
 * @param {string} t - The target string.
 * @return {boolean} - Returns true if 's' is a subsequence of 't', otherwise false.
 */
export const isSubsequenceStack = function (s, t) {
  if (!s.length) return true;
  if (s === t) return true;
  if (s.length > t.length) return false;

  // Reverse 's' and treat it like a stack
  const sCharArr = s.split('').reverse();

  for (const tChar of t) {
    const sChar = sCharArr[sCharArr.length - 1]; // Check the top of the stack

    if (tChar === sChar) {
      sCharArr.pop(); // Remove the matched character
    }

    // If the stack is empty, all characters have been matched
    if (sCharArr.length === 0) return true;
  }

  // If not all characters in 's' were found in 't', return false
  return false;
};
