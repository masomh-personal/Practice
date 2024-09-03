/**
 * Converts a Roman numeral string to an integer.
 * Time: O(n) in general, but effectively O(1) due to the fixed maximum length of Roman numerals.
 * Space: O(1) - constant space usage
 * @param {string} s - The Roman numeral string to be converted
 * @return {number} - The integer value corresponding to the Roman numeral
 */
export const romanToInt = (s) => {
  // Create a map of Roman numeral symbols and their integer values.
  const romanMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currValue = romanMap.get(s.at(i)); // Current Roman numeral value
    const nextValue = romanMap.get(s.at(i + 1)); // Next Roman numeral value

    // Check if this is a subtractive combination (like 'IV' or 'IX')
    if (nextValue && currValue < nextValue) {
      result -= currValue; // Subtract the current value
    } else {
      result += currValue; // Otherwise, add the current value
    }
  }

  return result; // Return the final accumulated integer value
};
