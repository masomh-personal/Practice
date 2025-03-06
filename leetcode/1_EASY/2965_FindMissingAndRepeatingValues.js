/**
 * Approach: HashMap for frequency counting
 * Time: O(n²) - Iterating over the grid and then the range 1 to n²
 * Space: O(n²) - Storing occurrences in the hash map
 * @param {number[][]} grid
 * @return {number[]}
 */
export function findMissingAndRepeatedValues(grid) {
  const maxNum = grid.length ** 2;
  let repeated = 0,
    missing = 0;

  // Count occurrences directly
  const freqMap = new Map();
  for (const row of grid) {
    for (const num of row) {
      freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
    }
  }

  // Identify repeated and missing numbers
  for (let i = 1; i <= maxNum; i++) {
    const count = freqMap.get(i) ?? 0;
    if (count === 2) repeated = i;
    if (count === 0) missing = i;
  }

  return [repeated, missing];
}
