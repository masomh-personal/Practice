import { search as binarySearch } from '../704_BinarySearch.js';

describe('Leetcode #704: Binary Search', () => {
  describe('When the target exists in the array', () => {
    it('should return the correct index when the target is in the middle', () => {
      const result = binarySearch([-1, 0, 3, 5, 9, 12], 9);
      expect(result).toBe(4);
    });

    it('should return the correct index when the target is at the beginning', () => {
      const result = binarySearch([2, 5, 8, 12, 16], 2);
      expect(result).toBe(0);
    });

    it('should return the correct index when the target is at the end', () => {
      const result = binarySearch([1, 3, 5, 7, 9], 9);
      expect(result).toBe(4);
    });

    it('should return the correct index when the array has only one element and matches the target', () => {
      const result = binarySearch([7], 7);
      expect(result).toBe(0);
    });
  });

  describe('When the target does not exist in the array', () => {
    it('should return -1 when the target is not present', () => {
      const result = binarySearch([-10, -5, 0, 5, 10], 6);
      expect(result).toBe(-1);
    });

    it('should return -1 when the array is empty', () => {
      const result = binarySearch([], 5);
      expect(result).toBe(-1);
    });

    it('should return -1 when the array has only one element and does not match the target', () => {
      const result = binarySearch([7], 3);
      expect(result).toBe(-1);
    });
  });

  describe('Handling even-length arrays', () => {
    it('should return the correct index when the target is in the first half', () => {
      const result = binarySearch([1, 3, 5, 7, 9, 11], 3);
      expect(result).toBe(1);
    });

    it('should return the correct index when the target is in the second half', () => {
      const result = binarySearch([1, 3, 5, 7, 9, 11], 9);
      expect(result).toBe(4);
    });
  });

  describe('Edge case handling', () => {
    it('should correctly find the first element', () => {
      const result = binarySearch([1, 2, 3, 4, 5], 1);
      expect(result).toBe(0);
    });

    it('should correctly find the last element', () => {
      const result = binarySearch([1, 2, 3, 4, 5], 5);
      expect(result).toBe(4);
    });

    it('should correctly handle negative numbers', () => {
      const result = binarySearch([-10, -5, -2, 0, 3, 7], -2);
      expect(result).toBe(2);
    });

    it('should correctly handle a large array', () => {
      const largeArray = Array.from({ length: 100_000 }, (_, i) => i);
      const result = binarySearch(largeArray, 75_000);
      expect(result).toBe(75_000);
    });
  });
});
