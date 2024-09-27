import { isSubsequence, isSubsequenceNaive, isSubsequenceStack } from '../392_IsSubsequence.js';

// Helper function to test all three implementations
function testAllImplementations(s, t, expectedResult) {
  expect(isSubsequence(s, t)).toBe(expectedResult);
  expect(isSubsequenceNaive(s, t)).toBe(expectedResult);
  expect(isSubsequenceStack(s, t)).toBe(expectedResult);
}

describe('isSubsequence - testing all implementations', () => {
  it('should return true for an empty s string', () => {
    const s = '';
    const t = 'ahbgdc';
    testAllImplementations(s, t, true);
  });

  it('should return true for s = "abc" and t = "ahbgdc"', () => {
    const s = 'abc';
    const t = 'ahbgdc';
    testAllImplementations(s, t, true);
  });

  it('should return false for s = "axc" and t = "ahbgdc"', () => {
    const s = 'axc';
    const t = 'ahbgdc';
    testAllImplementations(s, t, false);
  });

  it('should return true when s is equal to t', () => {
    const s = 'ahbgdc';
    const t = 'ahbgdc';
    testAllImplementations(s, t, true);
  });

  it('should return true for single character match', () => {
    const s = 'a';
    const t = 'a';
    testAllImplementations(s, t, true);
  });

  it('should return false when s is longer than t', () => {
    const s = 'abcde';
    const t = 'abc';
    testAllImplementations(s, t, false);
  });

  it('should return false when t is empty but s is not', () => {
    const s = 'a';
    const t = '';
    testAllImplementations(s, t, false);
  });

  it('should return true when both s and t are empty strings', () => {
    const s = '';
    const t = '';
    testAllImplementations(s, t, true);
  });

  it('should return true for non-consecutive characters', () => {
    const s = 'ace';
    const t = 'abcde';
    testAllImplementations(s, t, true);
  });

  it('should return false for similar characters but incorrect order', () => {
    const s = 'aec';
    const t = 'abcde';
    testAllImplementations(s, t, false);
  });

  it('should return true when s is a valid non-contiguous subsequence of t', () => {
    const s = 'ace';
    const t = 'abcdefghij';
    testAllImplementations(s, t, true);
  });

  it('should return true when s is a subsequence at the end of t', () => {
    const s = 'cde';
    const t = 'abcde';
    testAllImplementations(s, t, true);
  });

  it('should return false when s has characters not present in t', () => {
    const s = 'xyz';
    const t = 'ahbgdc';
    testAllImplementations(s, t, false);
  });

  it('should return true when s is a valid subsequence but not contiguous substring', () => {
    const s = 'hgd';
    const t = 'ahbgdc';
    testAllImplementations(s, t, true);
  });
});
