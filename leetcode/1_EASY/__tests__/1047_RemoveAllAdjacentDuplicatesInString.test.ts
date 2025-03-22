import { removeDuplicates } from '../1047_RemoveAllAdjacentDuplicatesInString';

describe('Leetcode #1047: Remove All Adjacent Duplicates in String', () => {
  describe('Basic Functionality', () => {
    it('should remove adjacent duplicates and return the reduced string (example case)', () => {
      const input = 'abbaca';
      const expected = 'ca';
      const result = removeDuplicates(input);
      expect(result).toBe(expected);
    });

    it('should return the original string if no adjacent duplicates exist', () => {
      const input = 'abcde';
      const expected = 'abcde';
      const result = removeDuplicates(input);
      expect(result).toBe(expected);
    });
  });

  describe('Edge Cases', () => {
    it('should return an empty string if input is already empty', () => {
      const input = '';
      const expected = '';
      const result = removeDuplicates(input);
      expect(result).toBe(expected);
    });

    it('should return the same string if input has only one character', () => {
      const input = 'a';
      const expected = 'a';
      const result = removeDuplicates(input);
      expect(result).toBe(expected);
    });

    it('should return an empty string if all characters are removed due to full cascading duplicates', () => {
      const input = 'aabbcc';
      const expected = '';
      const result = removeDuplicates(input);
      expect(result).toBe(expected);
    });

    it('should correctly resolve nested duplicates that only become apparent after multiple passes', () => {
      const input = 'azxxzy';
      const expected = 'ay';
      const result = removeDuplicates(input);
      expect(result).toBe(expected);
    });
  });

  describe('Stress Test', () => {
    it('should efficiently process a very large input string with many adjacent duplicates', () => {
      const input = 'a'.repeat(1_000_000); // 1 million 'a's
      const expected = ''; // All pairs of 'a' will be removed
      const result = removeDuplicates(input);
      expect(result).toBe(expected);
    });
  });
});
