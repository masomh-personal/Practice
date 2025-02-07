/**
 * TIME: O(n) - We iterate through the string once, performing O(1) operations for each character.
 * SPACE: O(n) - In the worst case, the stack holds all open brackets
 *
 * @param {string} s - Input string containing only '()', '{}', '[]'.
 * @return {boolean} - Returns true if the string is valid, otherwise false.
 */
export function isValid(s) {
  // Mapping of closing brackets to their corresponding opening brackets
  const closedOpenMap = { ')': '(', '}': '{', ']': '[' };

  // Quick rejection: Odd-length strings are always invalid, and first char cannot be a closing bracket
  if (s.length % 2 !== 0 || Reflect.has(closedOpenMap, s[0])) return false;

  const stack = [s[0]]; // Stack to track unmatched opening brackets

  for (let i = 1; i < s.length; i++) {
    const currBracket = s[i];

    if (!Reflect.has(closedOpenMap, currBracket)) {
      // If it's an opening bracket, push it onto the stack
      stack.push(currBracket);
    } else if (stack.at(-1) === closedOpenMap[currBracket]) {
      // If it matches the last open bracket, pop the stack
      stack.pop();
    } else {
      // If there's a mismatch, return false early
      return false;
    }
  }

  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0;
}
