import { closeStrings, closeStringsV2 } from '../1657_DetermineIfTwoStringsAreClose.js';

describe('closeStrings and closeStringsV2 tests', () => {
  // Define a reusable function to test both implementations
  const testAllImplementations = (word1, word2, expected) => {
    expect(closeStrings(word1, word2)).toBe(expected);
    expect(closeStringsV2(word1, word2)).toBe(expected);
  };

  // Sample tests from the problem description
  it('should return true for word1 = "abc" and word2 = "bca"', () => {
    testAllImplementations('abc', 'bca', true);
  });

  it('should return false for word1 = "a" and word2 = "aa"', () => {
    testAllImplementations('a', 'aa', false);
  });

  it('should return true for word1 = "cabbba" and word2 = "abbccc"', () => {
    testAllImplementations('cabbba', 'abbccc', true);
  });

  // Edge case: both strings are empty
  it('should return true for empty strings', () => {
    testAllImplementations('', '', true);
  });

  // Edge case: single character strings that are the same
  it('should return true for single character strings that are the same', () => {
    testAllImplementations('x', 'x', true);
  });

  // Edge case: single character strings that are different
  it('should return false for single character strings that are different', () => {
    testAllImplementations('x', 'y', false);
  });

  // Case with multiple characters and mixed frequencies
  it('should return true for strings with matching frequencies', () => {
    testAllImplementations('aabbccdd', 'ddccbbaa', true);
  });

  // Case with repeated characters in different proportions
  it('should return false for strings with mismatched character proportions', () => {
    testAllImplementations('abc', 'aabbcc', false);
  });

  // Case with characters that have different frequencies
  it('should return true when character frequencies are not the same, but have same unique characters', () => {
    testAllImplementations('abbccc', 'aabbbc', true);
  });

  // Edge case: large string with repetitive characters (performance check)
  it('should handle large strings with repetitive characters', () => {
    const word1 = 'a'.repeat(100000) + 'b'.repeat(100000);
    const word2 = 'b'.repeat(100000) + 'a'.repeat(100000);
    testAllImplementations(word1, word2, true);
  });

  // Case with completely different characters
  it('should return false for strings with completely different characters', () => {
    testAllImplementations('abc', 'def', false);
  });
});
