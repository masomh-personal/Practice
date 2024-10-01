import {
  maxOperations,
  maxOperationsMap,
  maxOperationsMapNaive,
} from '../1679_MaxNumberKSumPairs.js';

describe('maxOperations tests', () => {
  it('should return 2 when input is [1, 2, 3, 4] and k is 5 (Two-pointer approach)', () => {
    const nums = [1, 2, 3, 4];
    const k = 5;
    const result = maxOperations(nums, k);
    expect(result).toBe(2);
  });

  it('should return 1 when input is [3, 1, 3, 4, 3] and k is 6 (Two-pointer approach)', () => {
    const nums = [3, 1, 3, 4, 3];
    const k = 6;
    const result = maxOperations(nums, k);
    expect(result).toBe(1);
  });

  it('should return 0 when no pairs sum to k (Two-pointer approach)', () => {
    const nums = [1, 1, 1, 1];
    const k = 10;
    const result = maxOperations(nums, k);
    expect(result).toBe(0);
  });

  it('should handle large input arrays efficiently (Two-pointer approach)', () => {
    const nums = new Array(100000).fill(1);
    const k = 2;
    const result = maxOperations(nums, k);
    expect(result).toBe(50000);
  });

  it('should return 2 for [1, 2, 3, 4] with k = 5 (Map Approach with index checking)', () => {
    const nums = [1, 2, 3, 4];
    const k = 5;
    const result = maxOperationsMap(nums, k);
    expect(result).toBe(2);
  });

  it('should return 1 for [3, 1, 3, 4, 3] with k = 6 (Map Approach with index checking)', () => {
    const nums = [3, 1, 3, 4, 3];
    const k = 6;
    const result = maxOperationsMap(nums, k);
    expect(result).toBe(1);
  });

  it('should return 0 when no pairs sum to k (Map Approach with index checking)', () => {
    const nums = [1, 1, 1, 1];
    const k = 10;
    const result = maxOperationsMap(nums, k);
    expect(result).toBe(0);
  });

  it('should handle large input arrays efficiently (Map Approach with index checking)', () => {
    const nums = new Array(100000).fill(1);
    const k = 2;
    const result = maxOperationsMap(nums, k);
    expect(result).toBe(50000);
  });

  it('should return 2 for [1, 2, 3, 4] with k = 5 (Naive HashMap approach)', () => {
    const nums = [1, 2, 3, 4];
    const k = 5;
    const result = maxOperationsMapNaive(nums, k);
    expect(result).toBe(2);
  });

  it('should return 1 for [3, 1, 3, 4, 3] with k = 6 (Naive HashMap approach)', () => {
    const nums = [3, 1, 3, 4, 3];
    const k = 6;
    const result = maxOperationsMapNaive(nums, k);
    expect(result).toBe(1);
  });

  it('should return 0 when no pairs sum to k (Naive HashMap approach)', () => {
    const nums = [1, 1, 1, 1];
    const k = 10;
    const result = maxOperationsMapNaive(nums, k);
    expect(result).toBe(0);
  });

  it('should handle large input arrays efficiently (Naive HashMap approach)', () => {
    const nums = new Array(100000).fill(1);
    const k = 2;
    const result = maxOperationsMapNaive(nums, k);
    expect(result).toBe(50000);
  });
});
