import {
  lengthOfLongestSubstring,
  lengthOfLongestSubstringV2,
} from '../3_LongestSubstringNoRepeatingChars.js'; // Adjust this to your actual file path

// Define the test cases as an array of objects
const testCases = [
  {
    description: 'Leetcode example 1: Input "abcabcbb", expected output is 3',
    input: 'abcabcbb',
    expected: 3,
  },
  {
    description: 'Leetcode example 2: Input "bbbbb", expected output is 1',
    input: 'bbbbb',
    expected: 1,
  },
  {
    description: 'Leetcode example 3: Input "pwwkew", expected output is 3',
    input: 'pwwkew',
    expected: 3,
  },
  {
    description: 'Edge case: Empty string input, expected output is 0',
    input: '',
    expected: 0,
  },
  {
    description: 'Single character input "a", expected output is 1',
    input: 'a',
    expected: 1,
  },
  {
    description: 'String with all unique characters "abcdef", expected output is 6',
    input: 'abcdef',
    expected: 6,
  },
  {
    description:
      'Longer string with mix of repeating and unique characters "abcabcabcd", expected output is 4',
    input: 'abcabcabcd',
    expected: 4,
  },
  {
    description: 'Case where longest substring is at the end "abcdabc", expected output is 4',
    input: 'abcdabc',
    expected: 4,
  },
  {
    description: 'Test with special characters "a!@#a!", expected output is 4',
    input: 'a!@#a!',
    expected: 4,
  },
  {
    description: 'Test with numbers "123123", expected output is 3',
    input: '123123',
    expected: 3,
  },
  {
    description: 'Test with a long string of repeating patterns and unique characters',
    input: 'abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde',
    expected: 5, // The longest substring without repeating characters is "abcde"
  },
];

// Wrap both implementations in separate describe blocks
describe('Optimized HashMap with 0-based indexing', () => {
  testCases.forEach(({ description, input, expected }) => {
    it(description, () => {
      const output = lengthOfLongestSubstring(input);
      expect(output).toBe(expected);
    });
  });
});

describe('Set-based Sliding Window', () => {
  testCases.forEach(({ description, input, expected }) => {
    it(description, () => {
      const output = lengthOfLongestSubstringV2(input);
      expect(output).toBe(expected);
    });
  });
});
