import { firstMissingPositive } from '../41_FirstMissingPositive';

describe('Leetcode #41: First Missing Positive', () => {
  describe('Basic functionality', () => {
    it('should return 1 for an empty array', () => {
      const input: number[] = [];
      const expected = 1;
      const result = firstMissingPositive(input);
      expect(result).toBe(expected);
    });

    it('should return 1 when 1 is not in the array', () => {
      const input: number[] = [2, 3, 4, 5];
      const expected = 1;
      const result = firstMissingPositive(input);
      expect(result).toBe(expected);
    });

    it('should return 2 when 1 is in the array but 2 is not', () => {
      const input: number[] = [1, 3, 4, 5];
      const expected = 2;
      const result = firstMissingPositive(input);
      expect(result).toBe(expected);
    });
  });

  describe('LeetCode examples', () => {
    it('should handle example 1: [1,2,0]', () => {
      const input: number[] = [1, 2, 0];
      const expected = 3;
      const result = firstMissingPositive(input);
      expect(result).toBe(expected);
    });

    it('should handle example 2: [3,4,-1,1]', () => {
      const input: number[] = [3, 4, -1, 1];
      const expected = 2;
      const result = firstMissingPositive(input);
      expect(result).toBe(expected);
    });

    it('should handle example 3: [7,8,9,11,12]', () => {
      const input: number[] = [7, 8, 9, 11, 12];
      const expected = 1;
      const result = firstMissingPositive(input);
      expect(result).toBe(expected);
    });
  });

  describe('Edge cases', () => {
    it('should handle array with only negative numbers', () => {
      const input: number[] = [-1, -2, -3];
      const expected = 1;
      const result = firstMissingPositive(input);
      expect(result).toBe(expected);
    });

    it('should handle array with duplicates', () => {
      const input: number[] = [1, 1, 2, 2];
      const expected = 3;
      const result = firstMissingPositive(input);
      expect(result).toBe(expected);
    });

    it('should handle array with large numbers', () => {
      const input: number[] = [1000, 1001, 1002];
      const expected = 1;
      const result = firstMissingPositive(input);
      expect(result).toBe(expected);
    });
  });

  describe('Performance', () => {
    it('should handle large arrays efficiently', () => {
      // Create an array with numbers 1 to 100000, but missing 50000
      const input: number[] = Array.from({ length: 99999 }, (_, i) => (i < 49999 ? i + 1 : i + 2));
      const expected = 50000;
      const result = firstMissingPositive(input);
      expect(result).toBe(expected);
    });
  });
});
