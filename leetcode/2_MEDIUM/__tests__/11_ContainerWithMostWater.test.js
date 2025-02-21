import { maxArea } from '../11_ContainerWithMostWater.js';

describe('Leetcode #11: Container With Most Water', () => {
  describe('Basic functionality', () => {
    it('should return the maximum area for a simple case', () => {
      const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
      const result = maxArea(height);
      const expected = 49;
      expect(result).toBe(expected);
    });

    it('should return 0 for an array with less than two heights', () => {
      const height = [1];
      const result = maxArea(height);
      const expected = 0;
      expect(result).toBe(expected);
    });
  });

  describe('Edge cases', () => {
    it('should handle all elements being the same', () => {
      const height = [1, 1, 1, 1];
      const result = maxArea(height);
      const expected = 3;
      expect(result).toBe(expected);
    });

    it('should handle increasing height values', () => {
      const height = [1, 2, 3, 4, 5];
      const result = maxArea(height);
      const expected = 6;
      expect(result).toBe(expected);
    });

    it('should handle decreasing height values', () => {
      const height = [5, 4, 3, 2, 1];
      const result = maxArea(height);
      const expected = 6;
      expect(result).toBe(expected);
    });

    it('should handle large input size efficiently', () => {
      const height = Array(100000).fill(1);
      const result = maxArea(height);
      const expected = 99999;
      expect(result).toBe(expected);
    });
  });

  describe('Special cases', () => {
    it('should handle two elements correctly', () => {
      const height = [1, 2];
      const result = maxArea(height);
      const expected = 1;
      expect(result).toBe(expected);
    });

    it('should handle tall and short heights interleaved', () => {
      const height = [2, 9, 2, 4, 8, 1, 3];
      const result = maxArea(height);
      const expected = 24;
      expect(result).toBe(expected);
    });
  });

  describe('Extreme performance cases', () => {
    it('should handle the maximum input size efficiently', () => {
      const height = Array(100_000).fill(100_000);
      const result = maxArea(height);
      const expected = 100_000 * (100_000 - 1);
      expect(result).toBe(expected);
    });

    it('should handle alternating high and low heights at max input size', () => {
      const height = Array.from({ length: 100_000 }, (_, i) => (i % 2 === 0 ? 1 : 100_000));
      const result = maxArea(height);
      const expected = 100_000 * (100_000 - 2);
      expect(result).toBe(expected);
    });
  });
});
