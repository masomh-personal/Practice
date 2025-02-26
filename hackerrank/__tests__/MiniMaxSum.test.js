import { miniMaxSum } from '../MiniMaxSum.js';

describe('HackerRank: Mini-Max Sum', () => {
  describe('Basic Functionality', () => {
    it('should return the correct min and max sum for a mix of positive numbers', () => {
      const input = [1, 2, 3, 4, 5];
      const result = miniMaxSum(input);
      const expected = {
        minSum: 10,
        maxSum: 14,
      };
      expect(result).toEqual(expected);
    });

    it('should return the same min and max sum when all elements are the same', () => {
      const input = [5, 5, 5, 5, 5];
      const result = miniMaxSum(input);
      const expected = {
        minSum: 20,
        maxSum: 20,
      };
      expect(result).toEqual(expected);
    });

    it('should correctly calculate min and max sum when array contains a zero', () => {
      const input = [0, 1, 2, 3, 4];
      const result = miniMaxSum(input);
      const expected = {
        minSum: 6,
        maxSum: 10,
      };
      expect(result).toEqual(expected);
    });

    it('should return correct min and max sum when array contains negative numbers', () => {
      const input = [-1, -2, -3, -4, -5];
      const result = miniMaxSum(input);
      const expected = {
        minSum: -14,
        maxSum: -10,
      };
      expect(result).toEqual(expected);
    });
  });

  describe('Edge Cases', () => {
    it('should handle an array with all zeros', () => {
      const input = [0, 0, 0, 0, 0];
      const result = miniMaxSum(input);
      const expected = {
        minSum: 0,
        maxSum: 0,
      };
      expect(result).toEqual(expected);
    });

    it('should handle an array with one positive and all other elements as zero', () => {
      const input = [1, 0, 0, 0, 0];
      const result = miniMaxSum(input);
      const expected = {
        minSum: 0,
        maxSum: 1,
      };
      expect(result).toEqual(expected);
    });

    it('should handle the maximum input values', () => {
      const input = [1_000_000_000, 1_000_000_000, 1_000_000_000, 1_000_000_000, 1_000_000_000];
      const result = miniMaxSum(input);
      const expected = {
        minSum: 4_000_000_000,
        maxSum: 4_000_000_000,
      };
      expect(result).toEqual(expected);
    });
  });
});
