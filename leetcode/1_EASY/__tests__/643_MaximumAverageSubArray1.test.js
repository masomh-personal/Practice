import { findMaxAverage } from '../643_MaximumAverageSubArray1.js';

describe('findMaxAverage', () => {
  it('should return 12.75000 for input [1,12,-5,-6,50,3] and k = 4', () => {
    const nums = [1, 12, -5, -6, 50, 3];
    const k = 4;
    const result = findMaxAverage(nums, k);
    expect(result).toBeCloseTo(12.75, 5); // Check the result with precision up to 5 decimal places
  });

  it('should return 5.00000 for input [5] and k = 1', () => {
    const nums = [5];
    const k = 1;
    const result = findMaxAverage(nums, k);
    expect(result).toBeCloseTo(5.0, 5); // Check the result with precision up to 5 decimal places
  });

  it('should return correct value for large negative and positive numbers', () => {
    const nums = [-10_000, 10_000, 10_000, -10_000];
    const k = 2;
    const result = findMaxAverage(nums, k);
    expect(result).toBeCloseTo(10_000, 5); // The maximum average is from indices 1 and 2
  });

  it('should handle edge case where k equals the length of the array', () => {
    const nums = [1, 2, 3, 4];
    const k = 4;
    const result = findMaxAverage(nums, k);
    expect(result).toBeCloseTo(2.5, 5); // Entire array averaged out
  });

  it('should return correct value for all negative numbers', () => {
    const nums = [-1, -12, -5, -6, -50, -3];
    const k = 3;
    const result = findMaxAverage(nums, k);
    expect(result).toBeCloseTo(-6.0, 5); // Max average subarray is [-1, -12, -5]
  });

  it('should return correct value when nums contains zeroes', () => {
    const nums = [0, 0, 0, 0, 0];
    const k = 3;
    const result = findMaxAverage(nums, k);
    expect(result).toBeCloseTo(0.0, 5); // Average of zeros is zero
  });

  it('should handle a large array efficiently', () => {
    const nums = new Array(100000).fill(1); // Array of 100,000 ones
    const k = 50000;
    const result = findMaxAverage(nums, k);
    expect(result).toBeCloseTo(1.0, 5); // Max average of ones should still be 1
  });
});
