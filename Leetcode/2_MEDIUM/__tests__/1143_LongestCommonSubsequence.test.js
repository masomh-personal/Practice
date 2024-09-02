import {
  longestCommonSubsequence as dpLCS,
  longestCommonSubsequenceRecursive as recursiveLCS,
} from '../1143_LongestCommonSubsequence.js';

describe('Longest Common Subsequence (LeetCode 1143)', () => {
  describe('Dynamic Programming (Bottom-Up) Solution', () => {
    it('should return 3 for text1="abcde" and text2="ace"', () => {
      const text1 = 'abcde';
      const text2 = 'ace';
      expect(dpLCS(text1, text2)).toBe(3); // "ace"
    });

    it('should return 3 for text1="abc" and text2="abc"', () => {
      const text1 = 'abc';
      const text2 = 'abc';
      expect(dpLCS(text1, text2)).toBe(3); // "abc"
    });

    it('should return 0 for text1="abc" and text2="def"', () => {
      const text1 = 'abc';
      const text2 = 'def';
      expect(dpLCS(text1, text2)).toBe(0); // No common subsequence
    });

    it('should return 4 for text1="abcdaf" and text2="acbcf"', () => {
      const text1 = 'abcdaf';
      const text2 = 'acbcf';
      expect(dpLCS(text1, text2)).toBe(4); // "abcf"
    });

    it('should return 0 for two empty strings', () => {
      const text1 = '';
      const text2 = '';
      expect(dpLCS(text1, text2)).toBe(0);
    });

    it('should return 0 when one string is empty', () => {
      const text1 = 'abc';
      const text2 = '';
      expect(dpLCS(text1, text2)).toBe(0);
    });

    it('should return 1 for text1="a" and text2="a"', () => {
      const text1 = 'a';
      const text2 = 'a';
      expect(dpLCS(text1, text2)).toBe(1); // "a"
    });

    it('should return 1 for text1="abc" and text2="a"', () => {
      const text1 = 'abc';
      const text2 = 'a';
      expect(dpLCS(text1, text2)).toBe(1); // "a"
    });

    it('should return 1 for text1="abc" and text2="c"', () => {
      const text1 = 'abc';
      const text2 = 'c';
      expect(dpLCS(text1, text2)).toBe(1); // "c"
    });

    it('should return 1 for text1="a" and text2="b"', () => {
      const text1 = 'a';
      const text2 = 'b';
      expect(dpLCS(text1, text2)).toBe(0); // No common subsequence
    });

    it('should return 2 for text1="abcdefg" and text2="bd"', () => {
      const text1 = 'abcdefg';
      const text2 = 'bd';
      expect(dpLCS(text1, text2)).toBe(2); // "bd"
    });

    it('should return 4 for text1="abcde" and text2="abfde"', () => {
      const text1 = 'abcde';
      const text2 = 'abfde';
      expect(dpLCS(text1, text2)).toBe(4); // "abde"
    });

    it('should return 1 for text1="xyz" and text2="zyx"', () => {
      const text1 = 'xyz';
      const text2 = 'zyx';
      expect(dpLCS(text1, text2)).toBe(1); // "x", "y", or "z"
    });
  });

  describe('Recursive with Memoization Solution', () => {
    it('should return 3 for text1="abcde" and text2="ace"', () => {
      const text1 = 'abcde';
      const text2 = 'ace';
      expect(recursiveLCS(text1, text2)).toBe(3); // "ace"
    });

    it('should return 3 for text1="abc" and text2="abc"', () => {
      const text1 = 'abc';
      const text2 = 'abc';
      expect(recursiveLCS(text1, text2)).toBe(3); // "abc"
    });

    it('should return 0 for text1="abc" and text2="def"', () => {
      const text1 = 'abc';
      const text2 = 'def';
      expect(recursiveLCS(text1, text2)).toBe(0); // No common subsequence
    });

    it('should return 4 for text1="abcdaf" and text2="acbcf"', () => {
      const text1 = 'abcdaf';
      const text2 = 'acbcf';
      expect(recursiveLCS(text1, text2)).toBe(4); // "abcf"
    });

    it('should return 0 for two empty strings', () => {
      const text1 = '';
      const text2 = '';
      expect(recursiveLCS(text1, text2)).toBe(0);
    });

    it('should return 0 when one string is empty', () => {
      const text1 = 'abc';
      const text2 = '';
      expect(recursiveLCS(text1, text2)).toBe(0);
    });

    it('should return 1 for text1="a" and text2="a"', () => {
      const text1 = 'a';
      const text2 = 'a';
      expect(recursiveLCS(text1, text2)).toBe(1); // "a"
    });

    it('should return 1 for text1="abc" and text2="a"', () => {
      const text1 = 'abc';
      const text2 = 'a';
      expect(recursiveLCS(text1, text2)).toBe(1); // "a"
    });

    it('should return 1 for text1="abc" and text2="c"', () => {
      const text1 = 'abc';
      const text2 = 'c';
      expect(recursiveLCS(text1, text2)).toBe(1); // "c"
    });

    it('should return 1 for text1="a" and text2="b"', () => {
      const text1 = 'a';
      const text2 = 'b';
      expect(recursiveLCS(text1, text2)).toBe(0); // No common subsequence
    });

    it('should return 2 for text1="abcdefg" and text2="bd"', () => {
      const text1 = 'abcdefg';
      const text2 = 'bd';
      expect(recursiveLCS(text1, text2)).toBe(2); // "bd"
    });

    it('should return 4 for text1="abcde" and text2="abfde"', () => {
      const text1 = 'abcde';
      const text2 = 'abfde';
      expect(recursiveLCS(text1, text2)).toBe(4); // "abde"
    });

    it('should return 1 for text1="xyz" and text2="zyx"', () => {
      const text1 = 'xyz';
      const text2 = 'zyx';
      expect(recursiveLCS(text1, text2)).toBe(1); // "x", "y", or "z"
    });
  });
});
