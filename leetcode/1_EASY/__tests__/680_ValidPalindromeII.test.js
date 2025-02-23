import { validPalindrome } from '../680_ValidPalindromeII.js';

describe('Leetcode #680: Valid Palindrome II', () => {
  describe('Base cases', () => {
    it('should return true for an already valid palindrome', () => {
      const s = 'aba';
      const result = validPalindrome(s);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return true if one character can be removed to make it a palindrome', () => {
      const s = 'abca';
      const result = validPalindrome(s);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return false if no single removal can make it a palindrome', () => {
      const s = 'abc';
      const result = validPalindrome(s);
      const expected = false;
      expect(result).toBe(expected);
    });
  });

  describe('Edge cases', () => {
    it('should return true for a single character string', () => {
      const s = 'a';
      const result = validPalindrome(s);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return true for an empty string', () => {
      const s = '';
      const result = validPalindrome(s);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return true for a palindrome with special characters', () => {
      const s = 'a!!a';
      const result = validPalindrome(s);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return true for a string that becomes a palindrome after removing one non-alphanumeric character', () => {
      const s = 'ab@ba';
      const result = validPalindrome(s);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return true for a palindrome with all same characters', () => {
      const s = 'aaaa';
      const result = validPalindrome(s);
      const expected = true;
      expect(result).toBe(expected);
    });
  });

  describe('Complex cases', () => {
    it('should return true when one character removal at the start makes it a palindrome', () => {
      const s = 'acbbca';
      const result = validPalindrome(s);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return true when one character removal at the end makes it a palindrome', () => {
      const s = 'abccba';
      const result = validPalindrome(s);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return false for a long string that cannot become a palindrome', () => {
      const s = 'abcdecba';
      const result = validPalindrome(s);
      const expected = true;
      expect(result).toBe(expected);
    });

    it('should return true for a long string that can become a palindrome by removing one character', () => {
      const s = 'abcddcba';
      const result = validPalindrome(s);
      const expected = true;
      expect(result).toBe(expected);
    });
  });
});
