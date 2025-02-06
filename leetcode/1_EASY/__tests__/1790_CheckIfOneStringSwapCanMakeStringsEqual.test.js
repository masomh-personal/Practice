import { areAlmostEqual } from '../1790_CheckIfOneStringSwapCanMakeStringsEqual.js';

describe('Leetcode #1790: Check if One String Swap Can Make Strings Equal', () => {
  describe('Basic functionality', () => {
    it('should return true when two characters can be swapped to make the strings equal', () => {
      const result = areAlmostEqual('bank', 'kanb');
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return false when more than one swap is required', () => {
      const result = areAlmostEqual('attack', 'defend');
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return true when the strings are already equal', () => {
      const result = areAlmostEqual('abcd', 'abcd');
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return false when the strings have completely different characters', () => {
      const result = areAlmostEqual('abc', 'xyz');
      const expected = false;
      expect(result).toBe(expected);
    });
  });

  describe('Edge cases', () => {
    it('should return false length of strings is 1 and they are not the same character', () => {
      const result = areAlmostEqual('a', 'b');
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return false when more than two positions differ', () => {
      const result = areAlmostEqual('abcd', 'badc');
      const expected = false;
      expect(result).toBe(expected);
    });

    it('should return true when exactly two differing characters can be swapped', () => {
      const result = areAlmostEqual('ab', 'ba');
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return false when only one character is different', () => {
      const result = areAlmostEqual('aa', 'ab');
      const expected = false;
      expect(result).toBe(expected);
    });
  });
});
