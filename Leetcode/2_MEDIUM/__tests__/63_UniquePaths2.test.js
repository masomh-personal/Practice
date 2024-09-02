import { uniquePathsWithObstaclesRecursive } from '../63_UniquePaths2.js';

// Sample tests based on Leetcode problem 63 - Unique Paths II
describe('Unique Paths II (Recursive with Memoization)', () => {
  it('should return 2 for a 3x3 grid with obstacles', () => {
    const obstacleGrid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    expect(uniquePathsWithObstaclesRecursive(obstacleGrid)).toBe(2);
  });

  it('should return 1 for a 2x2 grid with an obstacle', () => {
    const obstacleGrid = [
      [0, 1],
      [0, 0],
    ];
    expect(uniquePathsWithObstaclesRecursive(obstacleGrid)).toBe(1);
  });

  it('should return 0 for a grid with an obstacle at the start', () => {
    const obstacleGrid = [[1, 0]];
    expect(uniquePathsWithObstaclesRecursive(obstacleGrid)).toBe(0);
  });

  it('should return 0 for a grid with an obstacle at the end', () => {
    const obstacleGrid = [
      [0, 0],
      [0, 1],
    ];
    expect(uniquePathsWithObstaclesRecursive(obstacleGrid)).toBe(0);
  });

  it('should return 0 for a 3x3 grid completely blocked', () => {
    const obstacleGrid = [
      [1, 0, 0],
      [1, 1, 0],
      [0, 0, 0],
    ];
    expect(uniquePathsWithObstaclesRecursive(obstacleGrid)).toBe(0);
  });

  it('should return 1 for a grid with no obstacles', () => {
    const obstacleGrid = [[0]];
    expect(uniquePathsWithObstaclesRecursive(obstacleGrid)).toBe(1);
  });

  it('should return 1 for a 1x2 grid with no obstacles', () => {
    const obstacleGrid = [[0, 0]];
    expect(uniquePathsWithObstaclesRecursive(obstacleGrid)).toBe(1);
  });

  it('should return 0 for a 1x2 grid with an obstacle blocking the way', () => {
    const obstacleGrid = [[0, 1]];
    expect(uniquePathsWithObstaclesRecursive(obstacleGrid)).toBe(0);
  });

  it('should return 1 for a 2x1 grid with no obstacles', () => {
    const obstacleGrid = [[0], [0]];
    expect(uniquePathsWithObstaclesRecursive(obstacleGrid)).toBe(1);
  });
});
