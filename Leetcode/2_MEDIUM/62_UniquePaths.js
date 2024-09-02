/**
 * 62. Unique Paths (Medium)
 * Given the two integers rows and cols, return the number of possible unique
 * paths that the robot can take to reach the bottom-right corner.
 *
 * NOTE: can only move down and right
 *
 * Bottom-Up DP Approach
 * Time: O(n * m) - checking every cell
 * Space: O(m) - only storing one row at a time
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
const uniquePaths = (rows, cols) => {
  // Initialize dummy row (out of bounds) to build the first real row
  let prevRow = Array.from({ length: cols }, () => 0);

  // Iterate through the grid from the bottom row upwards
  for (let i = rows - 1; i >= 0; i--) {
    const currRow = Array.from({ length: cols }, () => 0);
    currRow[cols - 1] = 1; // Last cell in the row is always 1

    // Fill current row by summing the right cell and the cell below (from prevRow)
    for (let j = cols - 2; j >= 0; j--) {
      currRow[j] = currRow.at(j + 1) + prevRow.at(j);
    }

    // Move up to the next row
    prevRow = currRow;
  }

  // Top-left corner value is the total number of unique paths
  return prevRow.at(0);
};

/**
 * Top-Down Recursive Approach (with Memo)
 * Time: O(n * m) - checking every cell
 * Space: O(n * m) - need to have a complete matrix/grid to remember
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
const uniquePathsRecursive = (rows, cols) => {
  const [startR, startC] = [0, 0];

  // Initialize a cache to store results of subproblems
  const cache = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));

  const innerPathing = (rowIdx, colIdx) => {
    // Base case #1: Out of bounds, no valid paths from here
    if (rowIdx === rows || colIdx === cols) return 0;

    // Base case #2: Reached the destination, one valid path found
    if (rowIdx === rows - 1 && colIdx === cols - 1) return 1;

    // Base case #3: If result is already cached, return it to avoid recomputation
    if (cache[rowIdx][colIdx]) return cache[rowIdx][colIdx];

    // Recursive calls: calculate paths by moving down and right
    const downMove = innerPathing(rowIdx + 1, colIdx);
    const rightMove = innerPathing(rowIdx, colIdx + 1);

    // Cache the result for the current cell
    cache[rowIdx][colIdx] = downMove + rightMove;

    return cache[rowIdx][colIdx];
  };

  // Start the recursion from the top-left corner of the grid
  return innerPathing(startR, startC);
};

export { uniquePaths, uniquePathsRecursive };
