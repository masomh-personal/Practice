import { numOfSubarrays } from '../1343_NumberOfSubArraysOfSizeKAverage.js';

// Leetcode #1343: Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

describe('Leetcode #1343: Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold', () => {
  it('should return the correct count of sub-arrays for example 1', () => {
    const arr = [2, 2, 2, 2, 5, 5, 5, 8];
    const k = 3;
    const threshold = 4;
    const expected = 3;

    const result = numOfSubarrays(arr, k, threshold);
    expect(result).toBe(expected);
  });

  it('should return the correct count of sub-arrays for example 2', () => {
    const arr = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3];
    const k = 3;
    const threshold = 5;
    const expected = 6;

    const result = numOfSubarrays(arr, k, threshold);
    expect(result).toBe(expected);
  });

  it('should handle an array with one element', () => {
    const arr = [10];
    const k = 1;
    const threshold = 10;
    const expected = 1;

    const result = numOfSubarrays(arr, k, threshold);
    expect(result).toBe(expected);
  });

  // Tests handling of k = 1 where each sub-array is a single element
  it('should handle an array with multiple elements when k = 1', () => {
    const arr = [2, 4, 6, 8, 10, 20, 30, 40, 50, 60, 100, 1];
    const k = 1;
    const threshold = 10;
    const expected = 7;

    const result = numOfSubarrays(arr, k, threshold);
    expect(result).toBe(expected);
  });

  it('should handle edge case of no valid sub-arrays', () => {
    const arr = [1, 1, 1, 1, 1];
    const k = 3;
    const threshold = 10;
    const expected = 0;

    const result = numOfSubarrays(arr, k, threshold);
    expect(result).toBe(expected);
  });

  it('should handle large input with k equal to the array length', () => {
    const arr = Array(100).fill(10);
    const k = 100;
    const threshold = 10;
    const expected = 1;

    const result = numOfSubarrays(arr, k, threshold);
    expect(result).toBe(expected);
  });

  it('should handle large input with k smaller than array length', () => {
    const arr = Array(100).fill(10);
    const k = 10;
    const threshold = 9;
    const expected = 91;

    const result = numOfSubarrays(arr, k, threshold);
    expect(result).toBe(expected);
  });
});
