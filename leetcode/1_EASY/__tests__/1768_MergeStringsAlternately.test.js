import { mergeAlternately } from '../1768_MergeStringsAlternately.js'; // assuming your function is in this file

describe('mergeAlternately', () => {
  it('should merge two strings of equal length', () => {
    expect(mergeAlternately('abc', 'def')).toBe('adbecf');
    expect(mergeAlternately('hello', 'world')).toBe('hweolrllod');
  });

  it('should handle when the first string is longer', () => {
    expect(mergeAlternately('abc', 'd')).toBe('adbc'); // corrected expected result
    expect(mergeAlternately('abcd', 'xy')).toBe('axbycd'); // corrected expected result
  });

  it('should handle when the second string is longer', () => {
    expect(mergeAlternately('a', 'def')).toBe('adef');
    expect(mergeAlternately('pq', 'xyz')).toBe('pxqyz');
  });

  it('should handle very long strings', () => {
    const word1 = 'a'.repeat(100);
    const word2 = 'b'.repeat(100);
    const expected = 'ab'.repeat(100);
    expect(mergeAlternately(word1, word2)).toBe(expected);
  });
});
