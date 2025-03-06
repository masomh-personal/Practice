import { findMissingAndRepeatedValues } from '../2965_FindMissingAndRepeatingValues.js';

describe('Leetcode #2965: Find Missing and Repeated Values', () => {
  describe('Basic functionality', () => {
    it('should return [2, 4] for a 2x2 grid where 2 is repeated and 4 is missing', () => {
      const grid = [
        [1, 3],
        [2, 2],
      ];
      const result = findMissingAndRepeatedValues(grid);
      const expected = [2, 4];
      expect(result).toEqual(expected);
    });

    it('should return [9, 5] for a 3x3 grid where 9 is repeated and 5 is missing', () => {
      const grid = [
        [9, 1, 7],
        [8, 9, 2],
        [3, 4, 6],
      ];
      const result = findMissingAndRepeatedValues(grid);
      const expected = [9, 5];
      expect(result).toEqual(expected);
    });
  });

  describe('Edge cases', () => {
    it('should handle the smallest possible grid (2x2) with a different repeated and missing number', () => {
      const grid = [
        [2, 1],
        [2, 4],
      ];
      const result = findMissingAndRepeatedValues(grid);
      const expected = [2, 3];
      expect(result).toEqual(expected);
    });

    it('should handle a 4x4 grid where multiple rows contain the repeated number', () => {
      const grid = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 14, 16],
      ];
      const result = findMissingAndRepeatedValues(grid);
      const expected = [14, 15];
      expect(result).toEqual(expected);
    });

    it('should handle a larger grid (5x5) where the missing number is at the end', () => {
      const grid = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 23, 24],
      ];
      const result = findMissingAndRepeatedValues(grid);
      const expected = [23, 25];
      expect(result).toEqual(expected);
    });

    it('should handle a grid where the missing number is in the middle', () => {
      const grid = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 8, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
      ];
      const result = findMissingAndRepeatedValues(grid);
      const expected = [8, 9];
      expect(result).toEqual(expected);
    });
  });

  describe('Performance testing', () => {
    it('should handle the largest possible 50x50 grid without timing out', () => {
      const n = 50;
      const grid = Array.from({ length: n }, (_, row) =>
        Array.from({ length: n }, (_, col) => row * n + col + 1)
      );
      grid[5][5] = 777; // Replace an arbitrary number to make it repeated
      grid[10][10] = 0; // Make a number missing

      const result = findMissingAndRepeatedValues(grid);
      expect(result[0]).toBe(777);
      expect(result[1]).toBe(10 * 50 + 11); // The missing number in the sequence
    });
  });
});
