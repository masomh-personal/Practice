import { longestPalindrome } from '../5_LongestPalindromicSubstring.js';

describe('Leetcode #5: Longest Palindromic Substring', () => {
  describe('Basic cases', () => {
    it('should return the longest palindromic substring for an odd-length palindrome', () => {
      const result = longestPalindrome('babad');
      const expected = ['bab', 'aba']; // Either 'bab' or 'aba' is valid
      expect(expected).toContain(result);
    });

    it('should return the longest palindromic substring for an even-length palindrome', () => {
      const result = longestPalindrome('cbbd');
      const expected = 'bb';
      expect(result).toBe(expected);
    });

    it('should return the entire string if the input itself is a palindrome', () => {
      const result = longestPalindrome('racecar');
      const expected = 'racecar';
      expect(result).toBe(expected);
    });

    it('should handle multiple palindromes of the same length', () => {
      const result = longestPalindrome('aacabdkacaa');
      const expected = 'aca'; // There are two 'aca' palindromes
      expect(result).toBe(expected) || expect(result.length).toBe(expected.length);
    });
  });

  describe('Edge cases', () => {
    it('should return the single character if the input length is 1', () => {
      const result = longestPalindrome('a');
      const expected = 'a';
      expect(result).toBe(expected);
    });

    it('should return one of the characters if all are unique', () => {
      const result = longestPalindrome('abcde');
      // In this case, any single character is a valid palindrome
      expect(result.length).toBe(1);
      expect('abcde').toContain(result);
    });

    it('should handle strings with multiple palindromes, returning the longest one', () => {
      const result = longestPalindrome('abaxyzzyxf');
      const expected = 'xyzzyx';
      expect(result).toBe(expected);
    });

    it('should handle an input with all identical characters', () => {
      const result = longestPalindrome('aaaaa');
      const expected = 'aaaaa';
      expect(result).toBe(expected);
    });

    it('should handle an input with spaces and return the correct palindrome', () => {
      const result = longestPalindrome('a b a');
      const expected = 'a b a';
      expect(result).toBe(expected);
    });

    it('should return an empty string if input is empty', () => {
      const result = longestPalindrome('');
      const expected = '';
      expect(result).toBe(expected);
    });

    it('should correctly handle palindromes at the beginning of the string', () => {
      const result = longestPalindrome('abcdcba123');
      const expected = 'abcdcba';
      expect(result).toBe(expected);
    });

    it('should correctly handle palindromes at the end of the string', () => {
      const result = longestPalindrome('123abcdcba');
      const expected = 'abcdcba';
      expect(result).toBe(expected);
    });
  });

  describe('Tricky cases', () => {
    it('should handle nested palindromes correctly', () => {
      const result = longestPalindrome('aaabaaaa');
      const expected = 'aaabaaa';
      expect(result).toBe(expected);
    });

    it('should handle overlapping palindromes correctly', () => {
      const result = longestPalindrome('cabac');
      const expected = 'cabac';
      expect(result).toBe(expected);
    });

    it('should correctly identify when an odd-length palindrome is longer', () => {
      const result = longestPalindrome('bbcabdbaxy');
      const expected = 'abdba'; // 'bb' is even length but 'abdba' is longer
      expect(result).toBe(expected);
    });

    it('should handle special characters and maintain case sensitivity', () => {
      const result = longestPalindrome('A man, a plan, a canal: Panama');
      // This full string isn't a palindrome due to spaces and punctuation
      // But it might contain smaller palindromes
      expect(result.length).toBeGreaterThan(0);

      // If we want to test specifically for this case-sensitive palindrome:
      const specialResult = longestPalindrome('amanaplanacanalpanama');
      expect(specialResult).toBe('amanaplanacanalpanama');
    });
  });

  describe('Performance cases', () => {
    it('should handle a long string efficiently', () => {
      const input = 'a'.repeat(1e3) + 'racecar' + 'b'.repeat(1e3);
      const result = longestPalindrome(input);
      // The expected result could be either 'racecar' or the sequence of 'a's
      // depending on implementation, but the 'a's would be longer
      const expected = 'a'.repeat(1e3);
      expect(result).toBe(expected);
    });

    it('should handle a very long palindrome', () => {
      // Create a palindrome with 1E3 'a's, then 'b', then 1E3 'a's
      const longPalindrome = 'a'.repeat(1e3) + 'b' + 'a'.repeat(1e3);
      const result = longestPalindrome(longPalindrome);
      expect(result).toBe(longPalindrome);
    });

    it('should handle when the longest palindrome is a repeat of the same character', () => {
      const input = 'abc' + 'x'.repeat(1e3) + 'def';
      const result = longestPalindrome(input);
      const expected = 'x'.repeat(1e3);
      expect(result).toBe(expected);
    });
  });
});
