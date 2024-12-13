import { groupAnagrams, groupAnagramsV2 } from '../49_GroupAnagrams.js';

describe('Leetcode #49 - Group Anagrams', () => {
  const implementations = [
    { name: 'groupAnagrams (Sorting-Based)', func: groupAnagrams },
    { name: 'groupAnagramsV2 (Frequency-Based)', func: groupAnagramsV2 },
  ];

  implementations.forEach(({ name, func }) => {
    describe(`${name}`, () => {
      it('should group anagrams in a basic case', () => {
        const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
        const result = func(strs);
        const expected = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];
        expect(result).toEqual(
          expect.arrayContaining(expected.map((group) => expect.arrayContaining(group)))
        );
      });

      it('should handle an empty string input', () => {
        const strs = [''];
        const result = func(strs);
        const expected = [['']];
        expect(result).toEqual(expected);
      });

      it('should handle a single-character string', () => {
        const strs = ['a'];
        const result = func(strs);
        const expected = [['a']];
        expect(result).toEqual(expected);
      });

      it('should handle a case with multiple single-character strings', () => {
        const strs = ['a', 'b', 'c', 'a'];
        const result = func(strs);
        const expected = [['a', 'a'], ['b'], ['c']];
        expect(result).toEqual(
          expect.arrayContaining(expected.map((group) => expect.arrayContaining(group)))
        );
      });

      it('should handle no anagrams in the input array', () => {
        const strs = ['abc', 'def', 'ghi'];
        const result = func(strs);
        const expected = [['abc'], ['def'], ['ghi']];
        expect(result).toEqual(
          expect.arrayContaining(expected.map((group) => expect.arrayContaining(group)))
        );
      });

      it('should handle an array of identical strings', () => {
        const strs = ['aaa', 'aaa', 'aaa'];
        const result = func(strs);
        const expected = [['aaa', 'aaa', 'aaa']];
        expect(result).toEqual(
          expect.arrayContaining(expected.map((group) => expect.arrayContaining(group)))
        );
      });

      it('should handle very long strings with anagrams', () => {
        const strs = ['abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba'];
        const result = func(strs);
        const expected = [['abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba']];
        expect(result).toEqual(
          expect.arrayContaining(expected.map((group) => expect.arrayContaining(group)))
        );
      });

      it('should handle a large number of input strings', () => {
        const strs = Array(10000).fill('abcd').concat('dcba', 'badc');
        const result = func(strs);
        expect(result.length).toBeGreaterThan(0); // Basic check for large inputs
      });
    });
  });
});
