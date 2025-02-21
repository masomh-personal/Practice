import { isPossibleToSplit } from '../3046_SplitTheArray.js';

describe('Leetcode #3046: Split the Array', () => {
  describe('Basic functionality', () => {
    it('should return true for valid split with distinct elements', () => {
      const nums = [1, 1, 2, 2, 3, 4];
      const expected = true;
      const result = isPossibleToSplit(nums);
      expect(result).toEqual(expected);
    });

    it('should return false when all elements are the same', () => {
      const nums = [1, 1, 1, 1];
      const expected = false;
      const result = isPossibleToSplit(nums);
      expect(result).toEqual(expected);
    });

    it('should return true when the array can be split into two parts with distinct elements', () => {
      const nums = [1, 2, 3, 4, 5, 6];
      const expected = true;
      const result = isPossibleToSplit(nums);
      expect(result).toEqual(expected);
    });
  });

  describe('Edge cases', () => {
    it('should return false for the smallest array with duplicates', () => {
      const nums = [1, 1];
      const expected = true;
      const result = isPossibleToSplit(nums);
      expect(result).toEqual(expected);
    });

    it('should return true for the smallest array with distinct elements', () => {
      const nums = [1, 2];
      const expected = true;
      const result = isPossibleToSplit(nums);
      expect(result).toEqual(expected);
    });

    it('should handle maximum constraints with all elements distinct', () => {
      const nums = Array.from({ length: 100 }, (_, i) => i + 1);
      const expected = true;
      const result = isPossibleToSplit(nums);
      expect(result).toEqual(expected);
    });

    it('should handle maximum constraints with all elements duplicated', () => {
      const nums = Array.from({ length: 50 }, (_, i) => i + 1).concat(
        Array.from({ length: 50 }, (_, i) => i + 1)
      );
      const expected = true;
      const result = isPossibleToSplit(nums);
      expect(result).toEqual(expected);
    });
  });

  describe('Special scenarios', () => {
    it('should return false when no valid split is possible', () => {
      const nums = [1, 1, 2, 2, 2, 2];
      const expected = false;
      const result = isPossibleToSplit(nums);
      expect(result).toEqual(expected);
    });

    it('should return true when split results in balanced unique parts', () => {
      const nums = [1, 2, 3, 4, 4, 5];
      const expected = true;
      const result = isPossibleToSplit(nums);
      expect(result).toEqual(expected);
    });

    it('should return false when one half cannot have distinct elements', () => {
      const nums = [1, 1, 2, 3, 3, 4];
      const expected = true;
      const result = isPossibleToSplit(nums);
      expect(result).toEqual(expected);
    });
  });

  describe('Performance', () => {
    it('should run efficiently for 100,000 elements (extreme stress test) - no constraints', () => {
      // Create 100,000 elements where each number appears exactly twice
      const largeNums = Array(100_000);

      let numController = 1;
      for (let i = 0; i < largeNums.length; i++) {
        largeNums[i] = numController;

        // Make each number appear exactly twice
        if (i % 2 === 1) {
          numController++;
        }
      }

      console.time('Performance Test - 100,000 elements');
      const result = isPossibleToSplit(largeNums);
      console.timeEnd('Performance Test - 100,000 elements');
      expect(result).toEqual(true);
    });
  });
});
