/**
 * HASHMAP APPROACH
 * Time Complexity: O(n^2) - We iterate over the grid twice: once for rows and once for columns.
 * Space Complexity: O(n^2) - We store the string representations of rows in the map, which can take up to O(n^2) space.
 * @param {number[][]} grid - An n x n grid of integers.
 * @return {number} - The number of equal row and column pairs.
 */
export const equalPairs = (grid) => {
  let count = 0;

  // Create a frequency map of rows using string representation (Array.join() automatically uses commas as delimiters)
  const rowFreqMap = grid.reduce((acc, row) => {
    const key = row.join(); // Convert row to a string key
    acc.set(key, (acc.get(key) ?? 0) + 1); // Increment frequency for the row key
    return acc;
  }, new Map());

  // Iterate over each column and check if its string representation matches any row key in rowFreqMap
  for (let c = 0; c < grid.length; c++) {
    const colArr = [];
    for (const row of grid) {
      colArr.push(row[c]); // Collect the column elements
    }
    const colKey = colArr.join(); // Convert column to string key

    // Add to count if the column matches any row in the frequency map
    count += rowFreqMap.get(colKey) ?? 0;
  }

  return count;
};

/**
 * BRUTE FORCE APPROACH
 * Time: O(n ** 3)
 * Space: O(1)
 * @param {number[][]} grid
 * @return {number}
 */
export const equalPairsBrute = (grid) => {
  let count = 0;
  const gridLength = grid.length;

  // Loop over each row and check against each column
  for (let r = 0; r < gridLength; r++) {
    for (let c = 0; c < gridLength; c++) {
      let isMatch = true;
      // iterate over row and column
      for (let i = 0; i < gridLength; i++) {
        // check if each element matches sibling element (row => column)
        const e1 = grid[r][i];
        const e2 = grid[i][c];

        if (e1 !== e2) {
          isMatch = false;
          break; // can fail fast and don't care about rest of check for this iteration
        }
      }

      // if isMatch stays true, then we have a row/column match
      if (isMatch) count++;
    }
  }

  return count;
};
