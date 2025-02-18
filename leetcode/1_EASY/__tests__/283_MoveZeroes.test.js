import { moveZeroes } from '../283_MoveZeroes.js';

describe('Leetcode #283: Move Zeroes', () => {
  describe('moveZeroes function', () => {
    it('should move all zeroes to the end while maintaining the order of non-zero elements', () => {
      const nums = [0, 1, 0, 3, 12];
      const expected = [1, 3, 12, 0, 0];
      moveZeroes(nums);
      expect(nums).toEqual(expected);
    });

    it('should handle an array with all zeroes', () => {
      const nums = [0, 0, 0, 0];
      const expected = [0, 0, 0, 0];
      moveZeroes(nums);
      expect(nums).toEqual(expected);
    });

    it('should handle an array with no zeroes', () => {
      const nums = [1, 2, 3, 4, 5];
      const expected = [1, 2, 3, 4, 5];
      moveZeroes(nums);
      expect(nums).toEqual(expected);
    });

    it('should handle an array with a single zero', () => {
      const nums = [0];
      const expected = [0];
      moveZeroes(nums);
      expect(nums).toEqual(expected);
    });

    it('should handle an array with a single non-zero element', () => {
      const nums = [5];
      const expected = [5];
      moveZeroes(nums);
      expect(nums).toEqual(expected);
    });

    it('should handle an array with zeros at the end', () => {
      const nums = [1, 2, 3, 0, 0];
      const expected = [1, 2, 3, 0, 0];
      moveZeroes(nums);
      expect(nums).toEqual(expected);
    });

    it('should handle an array with zeros at the beginning', () => {
      const nums = [0, 0, 1, 2, 3];
      const expected = [1, 2, 3, 0, 0];
      moveZeroes(nums);
      expect(nums).toEqual(expected);
    });

    it('should handle an array with alternating zeroes and non-zeroes', () => {
      const nums = [0, 1, 0, 2, 0, 3, 0, 4];
      const expected = [1, 2, 3, 4, 0, 0, 0, 0];
      moveZeroes(nums);
      expect(nums).toEqual(expected);
    });

    it('should handle a large array efficiently', () => {
      const nums = new Array(10_000).fill(0);

      // Fill arbitrary/random indices with non-zero numbers
      nums[123] = 1;
      nums[999] = 2;
      nums[5000] = 3;
      nums[7500] = 4;
      const expected = [1, 2, 3, 4, ...new Array(9_996).fill(0)];
      moveZeroes(nums);
      expect(nums).toEqual(expected);
    });
  });
});
