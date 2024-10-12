/**
 * STACK approach using a simple for...of loop.
 * Time: O(n) - We traverse the string once and then join the resulting array into a string.
 * Space: O(n) - We use an auxiliary array (acting as a stack) that, in the worst case, holds all characters of the string.
 *
 * @param {string} s - The input string containing lowercase letters and stars.
 * @return {string} - The resulting string after all stars and their closest characters have been removed.
 */
export const removeStars = (s) => {
  const resultStack = []; // Stack to hold the resulting characters

  // Iterate over each character in the string
  for (const char of s) {
    if (char === '*') {
      // Remove the closest non-star character by popping from the stack
      resultStack.pop();
    } else {
      // Push the current character to the stack if it's not a star
      resultStack.push(char);
    }
  }

  // Join the stack into a final string
  return resultStack.join('');
};

/**
 * TWO POINTER approach
 * Time Complexity: O(n) - We traverse the string once with the for...of loop and join the resulting array.
 * Space Complexity: O(n) - We use an auxiliary array (resultArr) of the same length as the input string.
 *
 * @param {string} s - The input string containing lowercase letters and stars.
 * @return {string} - The resulting string after all stars and their closest characters have been removed.
 */
export const removeStarsTwoPointer = (s) => {
  // Initialize an array to store the resulting characters
  const resultArr = Array(s.length);

  let j = 0; // Pointer to track the index for adding valid characters to resultArr
  for (const char of s) {
    if (char === '*') {
      // When encountering a star, decrement j to "remove" the previous character
      j--;
    } else {
      // Otherwise, store the character and move the pointer forward
      resultArr[j] = char;
      j++;
    }
  }

  // Join and return only the valid portion of the result array (from index 0 to j)
  return resultArr.slice(0, j).join('');
};
