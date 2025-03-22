/**
 * Removes all adjacent duplicates in the input string by simulating a stack.
 *
 * @param {string} str - The input string to process
 * @returns {string} - The resulting string after removing all adjacent duplicates
 *
 * @approach Stack (push/pop characters, build result)
 * @timecomplexity O(n) - Each character is visited once
 * @spacecomplexity O(n) - Stack size can grow to n in worst-case (all unique chars)
 */
export function removeDuplicates(str: string): string {
  if (str.length <= 1) return str; // quick return for empty or single-character strings

  const charStack: string[] = [];

  for (const char of str) {
    const topOfStackChar = charStack.at(-1); // peek at top of stack

    if (topOfStackChar === char) {
      charStack.pop(); // remove duplicate
    } else {
      charStack.push(char); // push non-duplicate
    }
  }

  return charStack.join(''); // build final string from remaining characters
}
