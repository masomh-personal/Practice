import { isArraySpecial } from '../3151_SpecialArray1.js';

describe('Leetcode #3151: Special Array I', () => {
  describe('isArraySpecial function', () => {
    it('should return true for an array with a single element', () => {
      const nums = [1];
      const result = isArraySpecial(nums);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return true for an array where all adjacent pairs have different parity', () => {
      const nums = [2, 1, 4];
      const result = isArraySpecial(nums);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return false when there is at least one pair with the same parity', () => {
      const nums = [4, 3, 1, 6];
      const result = isArraySpecial(nums);
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return true for an alternating sequence of even and odd numbers', () => {
      const nums = [1, 2, 3, 4, 5, 6];
      const result = isArraySpecial(nums);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return false when the array consists of only even numbers', () => {
      const nums = [2, 4, 6, 8, 10];
      const result = isArraySpecial(nums);
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return false when the array consists of only odd numbers', () => {
      const nums = [1, 3, 5, 7, 9];
      const result = isArraySpecial(nums);
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return true for a mixed array starting with an even number', () => {
      const nums = [2, 1, 6, 5, 8, 7];
      const result = isArraySpecial(nums);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return true for a long alternating even-odd array', () => {
      const nums = Array.from({ length: 100 }, (_, i) => i + 1);
      const result = isArraySpecial(nums);
      const expected = true;
      expect(result).toBe(expected);
    });
  });
});
