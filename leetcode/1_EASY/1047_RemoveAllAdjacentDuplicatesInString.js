/**
 * Time Complexity: O(n) - Each character is pushed and popped from the stack at most once.
 * Space Complexity: O(n) - In the worst case, the stack stores all characters if no duplicates exist.
 *
 * Approach: Stack + Greedy
 * - Iterate through the string and use a stack to remove adjacent duplicates.
 * - If the stack is empty or the top element differs from the current character, push it.
 * - Otherwise, pop the stack to remove the adjacent duplicate.
 *
 * @param {string} s - The input string containing lowercase letters.
 * @return {string} - The resulting string after removing adjacent duplicates.
 */
export function removeDuplicates(s) {
  // Edge case: single character strings remain unchanged
  if (s.length === 1) return s;

  const stack = [];

  for (const char of s) {
    // Add character if it's not a duplicate of the last one or the stack becomes empty
    if (!stack.length || stack.at(-1) !== char) {
      stack.push(char);
    } else {
      stack.pop(); // Remove adjacent duplicate
    }
  }

  return stack.join('');
}
