import { threeSum } from '../15_3sum.js';

describe('Leetcode #15: 3Sum', () => {
  describe('Standard Cases', () => {
    it('finds multiple unique triplets in a mixed array of positive and negative numbers', () => {
      const input = [-1, 0, 1, 2, -1, -4];
      const expected = [
        [-1, -1, 2],
        [-1, 0, 1],
      ];
      const result = threeSum(input);
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.length).toBe(expected.length);
    });

    it('finds unique triplets correctly without duplication even when input has duplicates', () => {
      const input = [-2, -1, -1, 0, 1, 1, 2, -4];
      const expected = [
        [-2, 0, 2],
        [-2, 1, 1],
        [-1, -1, 2],
        [-1, 0, 1],
      ];
      const result = threeSum(input);
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.length).toBe(expected.length);
    });

    it('handles all negative numbers correctly (no solution expected)', () => {
      const input = [-5, -4, -3, -2, -1];
      const expected = [];
      const result = threeSum(input);
      expect(result).toEqual(expected);
    });

    it('handles all positive numbers correctly (no solution expected)', () => {
      const input = [1, 2, 3, 4, 5];
      const expected = [];
      const result = threeSum(input);
      expect(result).toEqual(expected);
    });
  });

  describe('Edge Cases', () => {
    it('handles an array with exactly three elements summing to zero', () => {
      const input = [-1, 0, 1];
      const expected = [[-1, 0, 1]];
      const result = threeSum(input);
      expect(result).toEqual(expected);
    });

    it('handles an array with exactly three elements not summing to zero', () => {
      const input = [1, 2, 3];
      const expected = [];
      const result = threeSum(input);
      expect(result).toEqual(expected);
    });

    it('handles an array with fewer than three elements', () => {
      const input = [0, 1];
      const expected = [];
      const result = threeSum(input);
      expect(result).toEqual(expected);
    });

    it('handles an empty array', () => {
      const input = [];
      const expected = [];
      const result = threeSum(input);
      expect(result).toEqual(expected);
    });
  });

  describe('Arrays with Zeroes', () => {
    it('returns a single triplet when array contains only zeroes', () => {
      const input = [0, 0, 0, 0];
      const expected = [[0, 0, 0]];
      const result = threeSum(input);
      expect(result).toEqual(expected);
    });

    it('handles zeroes combined with positive and negative numbers', () => {
      const input = [-2, -1, 0, 0, 1, 2];
      const expected = [
        [-2, 0, 2],
        [-1, 0, 1],
      ];
      const result = threeSum(input);
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.length).toBe(expected.length);
    });

    it('returns empty if array contains fewer than three zeroes', () => {
      const input = [0, 0];
      const expected = [];
      const result = threeSum(input);
      expect(result).toEqual(expected);
    });
  });

  describe('Large Inputs & Performance', () => {
    it('handles large input efficiently with guaranteed zero-sum triplets', () => {
      const input = [];
      for (let i = -500; i <= 500; i++) input.push(i);
      const result = threeSum(input);

      expect(result).toEqual(
        expect.arrayContaining([
          [-500, 0, 500],
          [-500, 1, 499],
          [-1, 0, 1],
        ])
      );
      expect(result.length).toBeGreaterThan(0);
    });

    it('efficiently handles large array with excessive duplicates', () => {
      const input = Array(100).fill([-1, 0, 1]).flat();
      const expected = [
        [-1, 0, 1],
        [0, 0, 0], // Include this triplet as it is valid
      ];

      const result = threeSum(input);
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.length).toBe(expected.length);
    });
  });

  describe('Order and Sorting Invariance', () => {
    it('returns triplets sorted in ascending order regardless of input order', () => {
      const input = [1, -1, 0];
      const expected = [[-1, 0, 1]];
      const result = threeSum(input);
      expect(result).toEqual(expected);
    });

    it('ensures inner arrays (triplets) are sorted consistently', () => {
      const input = [3, -2, -1, 0, 1, 2, -3];
      const expected = [
        [-3, 0, 3],
        [-3, 1, 2],
        [-2, -1, 3],
        [-2, 0, 2],
        [-1, 0, 1],
      ];
      const result = threeSum(input);
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result.length).toBe(expected.length);
    });
  });
});
