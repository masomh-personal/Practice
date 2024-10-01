import { maxVowels, maxVowelsNaive } from '../1465_MaximumNumberVowelsInSubstringGivenLength.js'; // Replace with your actual file name

describe('maxVowels (Optimized Approach)', () => {
  it('should return 3 for input "abciiidef" and k = 3', () => {
    const s = 'abciiidef';
    const k = 3;
    const result = maxVowels(s, k);
    expect(result).toBe(3); // The substring "iii" has 3 vowels
  });

  it('should return 2 for input "aeiou" and k = 2', () => {
    const s = 'aeiou';
    const k = 2;
    const result = maxVowels(s, k);
    expect(result).toBe(2); // Any substring of length 2 has 2 vowels
  });

  it('should return 2 for input "leetcode" and k = 3', () => {
    const s = 'leetcode';
    const k = 3;
    const result = maxVowels(s, k);
    expect(result).toBe(2); // "lee", "eet", and "ode" have 2 vowels each
  });

  it('should return 0 for input with no vowels and k = 3', () => {
    const s = 'bcdfghjkl';
    const k = 3;
    const result = maxVowels(s, k);
    expect(result).toBe(0); // No vowels in any substring
  });

  it('should return 1 for input "xyz" and k = 1', () => {
    const s = 'xyz';
    const k = 1;
    const result = maxVowels(s, k);
    expect(result).toBe(0); // No vowels in this string
  });

  it('should return the length of the string when all characters are vowels', () => {
    const s = 'aaaaa';
    const k = 5;
    const result = maxVowels(s, k);
    expect(result).toBe(5); // The entire string has 5 vowels
  });

  it('should handle edge case where k equals the length of the string', () => {
    const s = 'abcde';
    const k = 5;
    const result = maxVowels(s, k);
    expect(result).toBe(2); // The string "abcde" has 2 vowels
  });

  it('should handle large input efficiently', () => {
    const s = new Array(100000).fill('a').join('') + 'bcdef'; // Very large input
    const k = 100000;
    const result = maxVowels(s, k);
    expect(result).toBe(100000); // The first 100000 characters are all vowels
  });
});

describe('maxVowelsNaive (Naive Approach)', () => {
  it('should return 3 for input "abciiidef" and k = 3', () => {
    const s = 'abciiidef';
    const k = 3;
    const result = maxVowelsNaive(s, k);
    expect(result).toBe(3); // The substring "iii" has 3 vowels
  });

  it('should return 2 for input "aeiou" and k = 2', () => {
    const s = 'aeiou';
    const k = 2;
    const result = maxVowelsNaive(s, k);
    expect(result).toBe(2); // Any substring of length 2 has 2 vowels
  });

  it('should return 2 for input "leetcode" and k = 3', () => {
    const s = 'leetcode';
    const k = 3;
    const result = maxVowelsNaive(s, k);
    expect(result).toBe(2); // "lee", "eet", and "ode" have 2 vowels each
  });

  it('should return 0 for input with no vowels and k = 3', () => {
    const s = 'bcdfghjkl';
    const k = 3;
    const result = maxVowelsNaive(s, k);
    expect(result).toBe(0); // No vowels in any substring
  });

  it('should return 1 for input "xyz" and k = 1', () => {
    const s = 'xyz';
    const k = 1;
    const result = maxVowelsNaive(s, k);
    expect(result).toBe(0); // No vowels in this string
  });

  it('should return the length of the string when all characters are vowels', () => {
    const s = 'aaaaa';
    const k = 5;
    const result = maxVowelsNaive(s, k);
    expect(result).toBe(5); // The entire string has 5 vowels
  });

  it('should handle edge case where k equals the length of the string', () => {
    const s = 'abcde';
    const k = 5;
    const result = maxVowelsNaive(s, k);
    expect(result).toBe(2); // The string "abcde" has 2 vowels
  });

  it('should handle large input (less efficiently than optimized approach)', () => {
    const s = new Array(1000).fill('a').join('') + 'bcdef'; // Smaller large input
    const k = 500;
    const result = maxVowelsNaive(s, k);
    expect(result).toBe(500); // First 500 characters are vowels
  });
});
