import { reverseVowels, reverseVowelsNaive } from '../345_ReverseVowelsString.js';

describe('reverseVowels and reverseVowelsNaive', () => {
  const testCases = [
    { input: 'IceCreAm', expected: 'AceCreIm' },
    { input: 'leetcode', expected: 'leotcede' },
    { input: 'rhythm', expected: 'rhythm' },
    { input: '', expected: '' },
    { input: 'AbCdEfGhI', expected: 'IbCdEfGhA' },
    { input: 'aeiou', expected: 'uoiea' },
    { input: 'b', expected: 'b' },
    { input: 'a' + 'b'.repeat(100000) + 'e', expected: 'e' + 'b'.repeat(100000) + 'a' },
  ];

  // Loop over the test cases to test both functions
  testCases.forEach(({ input, expected }) => {
    it(`should reverse the vowels in "${input}" correctly with both functions`, () => {
      expect(reverseVowels(input)).toBe(expected);
      expect(reverseVowelsNaive(input)).toBe(expected);
    });
  });
});
