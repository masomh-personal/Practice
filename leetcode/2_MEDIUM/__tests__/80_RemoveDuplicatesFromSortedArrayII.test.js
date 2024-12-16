import { removeDuplicates } from '../80_RemoveDuplicatesFromSortedArrayII.js';

describe('removeDuplicates', () => {
  // Test case 1: Basic input with duplicates exceeding the limit
  it('should handle basic input with duplicates exceeding the limit', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const expected = [1, 1, 2, 2, 3];
    const result = removeDuplicates(nums);
    const k = expected.length;

    expect(result).toBe(k); // Check the returned k
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expected[i]); // Check modified nums
    }
  });

  // Test case 2: Input with varying duplicate counts
  it('should handle input with varying duplicate counts', () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    const expected = [0, 0, 1, 1, 2, 3, 3];
    const result = removeDuplicates(nums);
    const k = expected.length;

    expect(result).toBe(k);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expected[i]);
    }
  });

  // Test case 3: Single-element array
  it('should handle single-element arrays', () => {
    const nums = [1];
    const expected = [1];
    const result = removeDuplicates(nums);
    const k = expected.length;

    expect(result).toBe(k);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expected[i]);
    }
  });

  // Test case 4: All elements are the same
  it('should handle arrays where all elements are the same', () => {
    const nums = [2, 2, 2, 2, 2];
    const expected = [2, 2];
    const result = removeDuplicates(nums);
    const k = expected.length;

    expect(result).toBe(k);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expected[i]);
    }
  });

  // Test case 5: Already within the constraints
  it('should handle arrays already within constraints', () => {
    const nums = [1, 1, 2, 2, 3, 3];
    const expected = [1, 1, 2, 2, 3, 3];
    const result = removeDuplicates(nums);
    const k = expected.length;

    expect(result).toBe(k);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expected[i]);
    }
  });

  // Test case 6: Empty array
  it('should handle an empty array', () => {
    const nums = [];
    const expected = [];
    const result = removeDuplicates(nums);
    const k = expected.length;

    expect(result).toBe(k);
    for (let i = 0; i < k; i++) {
      expect(nums[i]).toBe(expected[i]);
    }
  });
});
