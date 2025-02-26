import { diagonalDifference } from '../diagonal-difference.js';

describe('HackerRank: Diagonal Difference', () => {
  describe('Basic Functionality', () => {
    it('should return 0 for a 1x1 matrix', () => {
      const input = [[5]];
      const expected = 0;
      const result = diagonalDifference(input);
      expect(result).toBe(expected);
    });

    it('should return the absolute difference for a 2x2 matrix', () => {
      const input = [
        [1, 2],
        [3, 4],
      ];
      const expected = 0; // |(1+4) - (2+3)| = |5 - 5| = 0
      const result = diagonalDifference(input);
      expect(result).toBe(expected);
    });

    it('should return the correct difference for a 3x3 matrix', () => {
      const input = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
      ];
      const expected = 15; // |(11+5+(-12)) - (4+5+10)| = |4 - 19| = 15
      const result = diagonalDifference(input);
      expect(result).toBe(expected);
    });
  });

  describe('Edge Cases', () => {
    it('should handle negative numbers correctly', () => {
      const input = [
        [-1, -2, -3],
        [-4, -5, -6],
        [-7, -8, -9],
      ];
      const expected = 0; // |(-1 - 5 - 9) - (-3 - 5 - 7)| = |(-15) - (-15)| = 0
      const result = diagonalDifference(input);
      expect(result).toBe(expected);
    });

    it('should handle large numbers correctly', () => {
      const input = [
        [1_000_000, 2, 3],
        [4, 1_000_000, 6],
        [7, 8, 1_000_000],
      ];
      const expected = 1_999_990; // |(3_000_000) - (1_000_010)| = 1_999_990
      const result = diagonalDifference(input);
      expect(result).toBe(expected);
    });

    it('should handle a matrix with zeros correctly', () => {
      const input = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const expected = 0;
      const result = diagonalDifference(input);
      expect(result).toBe(expected);
    });
  });

  describe('Performance', () => {
    it('should handle a large NxN matrix efficiently', () => {
      const N = 1e3;
      const input = Array.from({ length: N }, (_, i) =>
        Array.from({ length: N }, (_, j) => (i === j || i + j === N - 1 ? 1 : 0))
      );

      console.time('Performance Test');
      const result = diagonalDifference(input);
      console.timeEnd('Performance Test');

      expect(result).toBe(0); // Diagonals are equal
    });
  });
});
