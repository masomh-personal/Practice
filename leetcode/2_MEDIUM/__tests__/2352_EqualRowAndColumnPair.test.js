import { equalPairs, equalPairsBrute } from '../2352_EqualRowAndColumnPair.js'; // Adjust the path accordingly

describe('Equal Row and Column Pairs - Testing Both Approaches', () => {
  // Helper function to test both implementations
  const testBothImplementations = (grid, expected) => {
    expect(equalPairs(grid)).toBe(expected);
    expect(equalPairsBrute(grid)).toBe(expected);
  };

  // Example 1 from the problem description
  it('should return 1 for grid = [[3,2,1],[1,7,6],[2,7,7]]', () => {
    const grid = [
      [3, 2, 1],
      [1, 7, 6],
      [2, 7, 7],
    ];
    testBothImplementations(grid, 1);
  });

  // Example 2 from the problem description
  it('should return 3 for grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]', () => {
    const grid = [
      [3, 1, 2, 2],
      [1, 4, 4, 5],
      [2, 4, 2, 2],
      [2, 4, 2, 2],
    ];
    testBothImplementations(grid, 3);
  });

  // Edge case: smallest grid size (1x1)
  it('should return 1 for grid = [[1]]', () => {
    const grid = [[1]];
    testBothImplementations(grid, 1);
  });

  // Edge case: grid with no matching row/column pairs
  it('should return 0 for grid = [[1,2],[3,4]]', () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    testBothImplementations(grid, 0);
  });

  // Case: grid with all rows and columns identical
  it('should return 4 for grid = [[1,1],[1,1]]', () => {
    const grid = [
      [1, 1],
      [1, 1],
    ];
    testBothImplementations(grid, 4);
  });

  // Edge case: grid where each row is equal to a column
  it('should return 9 for grid = [[3,3,3],[3,3,3],[3,3,3]]', () => {
    const grid = [
      [3, 3, 3],
      [3, 3, 3],
      [3, 3, 3],
    ];
    testBothImplementations(grid, 9); // Every row and column matches
  });

  // Edge case: large grid with unique values
  it('should return 0 for grid with no matching rows and columns', () => {
    const grid = Array.from({ length: 100 }, (_, i) =>
      Array.from({ length: 100 }, (_, j) => i * 100 + j)
    );
    testBothImplementations(grid, 0); // No row matches any column
  });

  // Edge case: large grid with all rows and columns equal
  it('should return 100 for grid with all rows and columns equal', () => {
    const grid = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 1));
    testBothImplementations(grid, 100); // Every row and column is identical
  });

  // Edge case: diagonal grid where rows and columns match at diagonal positions
  it('should return 10 for diagonal grid', () => {
    const grid = Array.from({ length: 10 }, (_, i) =>
      Array.from({ length: 10 }, (_, j) => (i === j ? 1 : 0))
    );
    testBothImplementations(grid, 10); // Only the diagonal rows and columns match
  });
});
