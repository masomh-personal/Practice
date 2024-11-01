/**
 * Checks if a string of brackets is valid based on matching pairs.
 *
 * Time Complexity: O(n), where n is the length of the string.
 * We iterate through the string once, performing O(1) stack operations per character.
 *
 * Space Complexity: O(n) in the worst case, where n is the length of the string.
 * In the worst-case scenario (e.g., all open brackets), all characters are stored in the stack.
 *
 * @param {string} s - Input string containing only '()', '{}', '[]'.
 * @return {boolean} - Returns true if the string is valid, otherwise false.
 */
export const isValid = (s) => {
  // Guard: if string length is odd, it cannot be balanced
  if (s.length % 2 !== 0) return false;

  // NOTE: could use a map here, but since the key is a string, it's better to use an Object without Map overhead
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  // Guard: fail if the first character is a closing bracket
  if (s[0] in bracketMap) return false;

  // Stack to track open brackets
  const stack = [s[0]];

  // Process each character starting from the second
  for (let i = 1; i < s.length; i++) {
    const currentBracket = s[i];
    const isClosingBracket = currentBracket in bracketMap;
    const topBracket = stack.at(-1);

    if (isClosingBracket && bracketMap[currentBracket] === topBracket) {
      // Pop if there's a matching opening bracket at the stack's top
      stack.pop();
    } else if (!isClosingBracket) {
      // Push any open brackets onto the stack
      stack.push(currentBracket);
    } else {
      // Invalid state if there's no match for a closing bracket
      return false;
    }
  }

  // Return true if stack is empty (all brackets matched)
  return stack.length === 0;
};
