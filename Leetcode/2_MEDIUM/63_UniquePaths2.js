/**
 * 63. Unique Paths II (Medium)
 * Time Complexity: O(m * n)
 * The recursive approach with memoization ensures that each cell is processed once, making the overall time complexity O(m * n),
 * where `m` is the number of rows and `n` is the number of columns.
 *
 * Space Complexity: O(m * n)
 * The space complexity is also O(m * n) due to the memoization table that stores the results for each cell in the grid.
 * Additionally, the recursion stack can go as deep as `m + n`, but the dominant factor is the memoization table.
 *
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstaclesRecursive = (obstacleGrid) => {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;
  const memo = Array.from({ length: rows }, () => Array(cols).fill(-1));

  const findPaths = (r, c) => {
    // Base case: out of bounds or on an obstacle
    if (r >= rows || c >= cols || obstacleGrid[r][c] === 1) return 0;

    // Base case: reached the destination
    if (r === rows - 1 && c === cols - 1) return 1;

    // Return cached result if available
    if (memo[r][c] !== -1) return memo[r][c];

    // Recursive calls: move down and move right
    const downMove = findPaths(r + 1, c);
    const rightMove = findPaths(r, c + 1);

    // Cache the result
    memo[r][c] = downMove + rightMove;
    return memo[r][c];
  };

  return findPaths(0, 0);
};

export { uniquePathsWithObstaclesRecursive };
