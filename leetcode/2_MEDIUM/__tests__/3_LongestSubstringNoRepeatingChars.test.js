import { lengthOfLongestSubstring } from '../3_LongestSubstringNoRepeatingChars.js'; // Adjust this to your actual file path

describe('lengthOfLongestSubstring', () => {
  // Leetcode example 1: Input "abcabcbb", expected output is 3
  it('should return 3 for input "abcabcbb"', () => {
    const input = 'abcabcbb';
    const output = lengthOfLongestSubstring(input);
    expect(output).toBe(3);
  });

  // Leetcode example 2: Input "bbbbb", expected output is 1
  it('should return 1 for input "bbbbb"', () => {
    const input = 'bbbbb';
    const output = lengthOfLongestSubstring(input);
    expect(output).toBe(1);
  });

  // Leetcode example 3: Input "pwwkew", expected output is 3
  it('should return 3 for input "pwwkew"', () => {
    const input = 'pwwkew';
    const output = lengthOfLongestSubstring(input);
    expect(output).toBe(3);
  });

  // Edge case: Empty string input, expected output is 0
  it('should return 0 for empty string', () => {
    const input = '';
    const output = lengthOfLongestSubstring(input);
    expect(output).toBe(0);
  });

  // Single character input, expected output is 1
  it('should return 1 for single character input "a"', () => {
    const input = 'a';
    const output = lengthOfLongestSubstring(input);
    expect(output).toBe(1);
  });

  // String with all unique characters, expected output is length of the string
  it('should return 6 for input "abcdef"', () => {
    const input = 'abcdef';
    const output = lengthOfLongestSubstring(input);
    expect(output).toBe(6);
  });

  // Longer string with a mix of repeating and unique characters
  it('should return 8 for input "abcabcabcd"', () => {
    const input = 'abcabcabcd';
    const output = lengthOfLongestSubstring(input);
    expect(output).toBe(4);
  });

  // Case where the longest substring is at the end
  it('should return 4 for input "abcdabc"', () => {
    const input = 'abcdabc';
    const output = lengthOfLongestSubstring(input);
    expect(output).toBe(4);
  });

  // Test with special characters
  it('should return 4 for input "a!@#a!"', () => {
    const input = 'a!@#a!';
    const output = lengthOfLongestSubstring(input);
    expect(output).toBe(4);
  });

  // Test with numbers
  it('should return 3 for input "123123"', () => {
    const input = '123123';
    const output = lengthOfLongestSubstring(input);
    expect(output).toBe(3);
  });
});
