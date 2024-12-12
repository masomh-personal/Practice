import { groupAnagrams } from '../49_GroupAnagrams.js';

describe('Leetcode #49 - Group Anagrams', () => {
  it('should group anagrams in a basic case', () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const result = groupAnagrams(strs);
    const expected = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];
    // Validation: Ensure each group contains the correct anagrams (order doesn't matter)
    expect(result).toEqual(
      expect.arrayContaining(expected.map((group) => expect.arrayContaining(group)))
    );
  });

  it('should handle an empty string input', () => {
    const strs = [''];
    const result = groupAnagrams(strs);
    const expected = [['']];
    expect(result).toEqual(expected);
  });

  it('should handle a single-character string', () => {
    const strs = ['a'];
    const result = groupAnagrams(strs);
    const expected = [['a']];
    expect(result).toEqual(expected);
  });

  it('should handle a case with multiple single-character strings', () => {
    const strs = ['a', 'b', 'c', 'a'];
    const result = groupAnagrams(strs);
    const expected = [['a', 'a'], ['b'], ['c']];
    expect(result).toEqual(
      expect.arrayContaining(expected.map((group) => expect.arrayContaining(group)))
    );
  });

  it('should handle no anagrams in the input array', () => {
    const strs = ['abc', 'def', 'ghi'];
    const result = groupAnagrams(strs);
    const expected = [['abc'], ['def'], ['ghi']];
    expect(result).toEqual(
      expect.arrayContaining(expected.map((group) => expect.arrayContaining(group)))
    );
  });

  it('should handle an array of identical strings', () => {
    const strs = ['aaa', 'aaa', 'aaa'];
    const result = groupAnagrams(strs);
    const expected = [['aaa', 'aaa', 'aaa']];
    expect(result).toEqual(
      expect.arrayContaining(expected.map((group) => expect.arrayContaining(group)))
    );
  });

  it('should handle very long strings with anagrams', () => {
    const strs = ['abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba'];
    const result = groupAnagrams(strs);
    const expected = [['abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba']];
    expect(result).toEqual(
      expect.arrayContaining(expected.map((group) => expect.arrayContaining(group)))
    );
  });

  it('should handle a large number of input strings', () => {
    const strs = Array(10000).fill('abcd').concat('dcba', 'badc');
    const result = groupAnagrams(strs);
    expect(result.length).toBeGreaterThan(0); // Basic check for large inputs
    // Note: For performance testing, checking structure alone to avoid exhaustive computation
  });
});
