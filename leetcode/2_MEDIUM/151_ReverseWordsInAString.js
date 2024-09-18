/**
 * This function reverses the order of words in a given string.
 * Words are separated by one or more spaces. The final result
 * will contain words separated by a single space, with no leading
 * or trailing spaces.
 *
 * Time complexity: O(n) - We process the string with `trim()`, `split()`, `reverse()`, and `join()`, each running in linear time relative to the length of the string.
 * Space complexity: O(n) - We store an array of words from the input string, and the final result takes up space proportional to the length of the string.
 *
 * @param {string} s - The input string containing words separated by spaces.
 * @return {string} - The string with words in reverse order, separated by a single space.
 */
export const reverseWords = (s) => {
  // Step 1: Remove leading and trailing spaces using trim()
  // Step 2: Split the string into an array of words by matching one or more spaces using /\s+/
  // Step 3: Reverse the order of the words in the array
  // Step 4: Join the array back into a single string with words separated by a single space
  return s.trim().split(/\s+/).reverse().join(' ');
};
