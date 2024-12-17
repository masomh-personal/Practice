import { removeDuplicates } from '../80_RemoveDuplicatesFromSortedArrayII.js';

describe('Leetcode #80: Remove Duplicates from Sorted Array II', () => {
  // Test case 1: Basic input with duplicates exceeding the limit
  it('should remove duplicates beyond the allowed two occurrences', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const expected = [1, 1, 2, 2, 3];
    const result = removeDuplicates(nums);

    expect(result).toBe(expected.length); // Validate return length
    expect(nums.slice(0, result)).toEqual(expected); // Validate array content
  });

  // Test case 2: Input with varying duplicate counts
  it('should handle input with different numbers of duplicates', () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const expected = [0, 0, 1, 1, 2, 3, 3];
    const result = removeDuplicates(nums);

    expect(result).toBe(expected.length);
    expect(nums.slice(0, result)).toEqual(expected);
  });

  // Test case 3: Single-element array
  it('should return the same array for single-element inputs', () => {
    const nums = [1];
    const expected = [1];
    const result = removeDuplicates(nums);

    expect(result).toBe(expected.length);
    expect(nums.slice(0, result)).toEqual(expected);
  });

  // Test case 4: Two-element array
  it('should return the same array for two-element inputs', () => {
    const nums = [1, 2];
    const expected = [1, 2];
    const result = removeDuplicates(nums);

    expect(result).toBe(expected.length);
    expect(nums.slice(0, result)).toEqual(expected);
  });

  // Test case 5: All elements are the same
  it('should limit duplicates to two occurrences when all elements are identical', () => {
    const nums = [2, 2, 2, 2, 2];
    const expected = [2, 2];
    const result = removeDuplicates(nums);

    expect(result).toBe(expected.length);
    expect(nums.slice(0, result)).toEqual(expected);
  });

  // Test case 6: Already within the constraints
  it('should return the same array if it already meets the constraints', () => {
    const nums = [1, 1, 2, 2, 3, 3];
    const expected = [1, 1, 2, 2, 3, 3];
    const result = removeDuplicates(nums);

    expect(result).toBe(expected.length);
    expect(nums.slice(0, result)).toEqual(expected);
  });

  // Test case 7: Empty array
  it('should return zero for an empty array', () => {
    const nums = [];
    const expected = [];
    const result = removeDuplicates(nums);

    expect(result).toBe(expected.length);
    expect(nums.slice(0, result)).toEqual(expected);
  });
});
