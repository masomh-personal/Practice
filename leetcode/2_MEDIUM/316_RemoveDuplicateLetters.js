/**
 * Approach: Stack + Greedy
 * Time Complexity: O(n) - We iterate through the string once and perform stack operations efficiently.
 * Space Complexity: O(1) - We store at most 26 lowercase English letters.
 *
 * @param {string} s
 * @return {string}
 */
export function removeDuplicateLetters(s) {
  const lastOccurrenceMap = new Map();
  const resultStack = [];
  const seenInStack = new Set();

  // Helper functions
  const addCharToResult = (charToAdd) => {
    resultStack.push(charToAdd);
    seenInStack.add(charToAdd);
  };

  const popFromResult = () => {
    const removedChar = resultStack.pop();
    seenInStack.delete(removedChar); // Remove from seen set
  };

  // Step 1: Record the last occurrence of each character
  for (let i = 0; i < s.length; i++) {
    lastOccurrenceMap.set(s[i], i);
  }

  // Step 2: Iterate through the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If the character has already been seen in stack, skip it
    if (seenInStack.has(char)) continue;

    // Step 3: Maintain increasing order while ensuring all letters appear at least once
    while (
      resultStack.length && // Stack is not empty
      resultStack[resultStack.length - 1] > char && // Current character is smaller
      lastOccurrenceMap.get(resultStack[resultStack.length - 1]) > i // The top character appears later again
    ) {
      popFromResult();
    }

    // Step 4: Add current character to stack and mark as seen
    addCharToResult(char);
  }

  return resultStack.join('');
}
