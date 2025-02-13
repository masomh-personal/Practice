import { removeDuplicateLetters } from '../316_RemoveDuplicateLetters.js';

describe('Leetcode #316: Remove Duplicate Letters', () => {
  describe('Valid Cases', () => {
    it('should return "abc" when input is "bcabc"', () => {
      const result = removeDuplicateLetters('bcabc');
      const expected = 'abc';
      expect(result).toBe(expected);
    });

    it('should return "acdb" when input is "cbacdcbc"', () => {
      const result = removeDuplicateLetters('cbacdcbc');
      const expected = 'acdb';
      expect(result).toBe(expected);
    });

    it('should return "bac" when input is "bbac"', () => {
      const result = removeDuplicateLetters('bbac');
      const expected = 'bac';
      expect(result).toBe(expected);
    });

    it('should return "abcd" when input is "dcbaabcd"', () => {
      const result = removeDuplicateLetters('dcbaabcd');
      const expected = 'abcd';
      expect(result).toBe(expected);
    });
  });

  describe('Edge Cases', () => {
    it('should return an empty string when input is empty', () => {
      const result = removeDuplicateLetters('');
      const expected = '';
      expect(result).toBe(expected);
    });

    it('should return the same string when input has no duplicates', () => {
      const result = removeDuplicateLetters('abc');
      const expected = 'abc';
      expect(result).toBe(expected);
    });

    it('should return "a" when input is all "a" characters', () => {
      const result = removeDuplicateLetters('aaaaaa');
      const expected = 'a';
      expect(result).toBe(expected);
    });

    it('should return "xyz" when input is "zxyxzyx"', () => {
      const result = removeDuplicateLetters('zxyxzyx');
      const expected = 'xyz';
      expect(result).toBe(expected);
    });
  });

  describe('Long Input Cases', () => {
    it('should handle long input without performance issues', () => {
      const input = 'abcdefghijklmnopqrstuvwxyz'.repeat(10);
      const result = removeDuplicateLetters(input);
      const expected = 'abcdefghijklmnopqrstuvwxyz';
      expect(result).toBe(expected);
    });
  });
});
