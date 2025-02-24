import {
  lengthOfLongestSubstring,
  lengthOfLongestSubstringV2,
} from '../3_LongestSubstringNoRepeatingChars.js';

// Implementations to Test
const implementations = [
  { name: 'lengthOfLongestSubstring', fn: lengthOfLongestSubstring },
  { name: 'lengthOfLongestSubstringV2', fn: lengthOfLongestSubstringV2 },
];

// Test Cases
const testCases = [
  // Base Cases
  {
    description: 'should return the length of the longest substring without repeating characters',
    input: 'abcabcbb',
    expected: 3,
  },
  {
    description: 'should handle a string with all unique characters',
    input: 'abcdef',
    expected: 6,
  },
  {
    description: 'should return 1 when all characters are the same',
    input: 'aaaaaa',
    expected: 1,
  },
  {
    description: 'should handle an empty string',
    input: '',
    expected: 0,
  },
  // Edge Cases
  {
    description: 'should handle strings with special characters',
    input: 'a!@#b!@#',
    expected: 5,
  },
  {
    description: 'should handle strings with only special characters',
    input: '!@#$%^&*()',
    expected: 10,
  },
  {
    description: 'should handle strings with numbers and letters',
    input: 'a1b2c3d4',
    expected: 8,
  },
  {
    description: 'should handle very long strings',
    input: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    expected: 62,
  },
  // Complex Cases
  {
    description: 'should handle alternating repeating characters',
    input: 'ababababababab',
    expected: 2,
  },
  {
    description: 'should handle palindromic structures',
    input: 'abccba',
    expected: 3,
  },
  {
    description: 'should handle nested repeating patterns',
    input: 'abcabcabcabcabcabcabc',
    expected: 3,
  },
  {
    description: 'should handle extremely long strings efficiently',
    input: 'abcdefghijklmnopqrstuvwxyz'.repeat(1923) + 'ab', // 50,000 characters
    expected: 26,
  },
];

// Test Suite for both Implementations
describe('Leetcode #3: Longest Substring Without Repeating Characters', () => {
  implementations.forEach(({ name, fn }) => {
    describe(`Implementation: ${name}`, () => {
      testCases.forEach(({ description, input, expected }) => {
        it(description, () => {
          const result = fn(input);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
