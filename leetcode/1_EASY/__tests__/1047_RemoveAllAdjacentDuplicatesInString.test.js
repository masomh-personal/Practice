import { removeDuplicates } from '../1047_RemoveAllAdjacentDuplicatesInString.js';

describe('Leetcode #1047: Remove All Adjacent Duplicates in String', () => {
  describe('removeDuplicates function', () => {
    it('should remove adjacent duplicates from a basic case', () => {
      const result = removeDuplicates('abbaca');
      const expected = 'ca';
      expect(result).toBe(expected);
    });

    it('should return an empty string if all characters are removed', () => {
      const result = removeDuplicates('aabbcc');
      const expected = '';
      expect(result).toBe(expected);
    });

    it('should return the same string if no adjacent duplicates exist', () => {
      const result = removeDuplicates('abcdef');
      const expected = 'abcdef';
      expect(result).toBe(expected);
    });

    it('should handle a string with only one character', () => {
      const result = removeDuplicates('a');
      const expected = 'a';
      expect(result).toBe(expected);
    });

    it('should remove duplicates recursively', () => {
      const result = removeDuplicates('azxxzy');
      const expected = 'ay';
      expect(result).toBe(expected);
    });

    it('should handle a string with all the same characters', () => {
      const result = removeDuplicates('aaaaaa');
      const expected = '';
      expect(result).toBe(expected);
    });

    it('should handle a long string with multiple adjacent duplicates', () => {
      const result = removeDuplicates('aabccba');
      const expected = 'a';
      expect(result).toBe(expected);
    });

    it('should handle a mix of adjacent and non-adjacent duplicates', () => {
      const result = removeDuplicates('abbccddeebba');
      const expected = '';
      expect(result).toBe(expected);
    });
  });
});
