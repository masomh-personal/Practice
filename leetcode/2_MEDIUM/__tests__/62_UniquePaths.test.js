import { uniquePaths, uniquePathsRecursive } from '../62_UniquePaths.js';

// Sample tests based on LeetCode problem 62 - Unique Paths
describe('Unique Paths (Bottom-Up DP)', () => {
  it('should return 28 for a 3x7 grid', () => {
    expect(uniquePaths(3, 7)).toBe(28);
  });

  it('should return 3 for a 2x3 grid', () => {
    expect(uniquePaths(2, 3)).toBe(3);
  });

  it('should return 1 for a 1x1 grid', () => {
    expect(uniquePaths(1, 1)).toBe(1);
  });

  it('should return 1 for a 10x1 grid', () => {
    expect(uniquePaths(10, 1)).toBe(1);
  });

  it('should return 1 for a 1x10 grid', () => {
    expect(uniquePaths(1, 10)).toBe(1);
  });

  it('should return 6 for a 3x3 grid', () => {
    expect(uniquePaths(3, 3)).toBe(6);
  });

  it('should return 193_536_720 for a 23x12 grid', () => {
    expect(uniquePaths(23, 12)).toBe(193_536_720);
  });
});

describe('Unique Paths (Top-Down Recursive with Memoization)', () => {
  it('should return 28 for a 3x7 grid', () => {
    expect(uniquePathsRecursive(3, 7)).toBe(28);
  });

  it('should return 3 for a 2x3 grid', () => {
    expect(uniquePathsRecursive(2, 3)).toBe(3);
  });

  it('should return 1 for a 1x1 grid', () => {
    expect(uniquePathsRecursive(1, 1)).toBe(1);
  });

  it('should return 1 for a 10x1 grid', () => {
    expect(uniquePathsRecursive(10, 1)).toBe(1);
  });

  it('should return 1 for a 1x10 grid', () => {
    expect(uniquePathsRecursive(1, 10)).toBe(1);
  });

  it('should return 6 for a 3x3 grid', () => {
    expect(uniquePathsRecursive(3, 3)).toBe(6);
  });

  it('should return 193_536_720 for a 23x12 grid', () => {
    expect(uniquePathsRecursive(23, 12)).toBe(193_536_720);
  });
});
