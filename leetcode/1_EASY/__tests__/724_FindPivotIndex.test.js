import { pivotIndex } from '../724_FindPivotIndex.js';

describe('pivotIndex', () => {
  // Test case from example 1
  it('should return 3 when nums = [1, 7, 3, 6, 5, 6]', () => {
    const nums = [1, 7, 3, 6, 5, 6];
    const result = pivotIndex(nums);
    expect(result).toBe(3);
  });

  // Test case from example 2
  it('should return -1 when nums = [1, 2, 3]', () => {
    const nums = [1, 2, 3];
    const result = pivotIndex(nums);
    expect(result).toBe(-1);
  });

  // Test case from example 3
  it('should return 0 when nums = [2, 1, -1]', () => {
    const nums = [2, 1, -1];
    const result = pivotIndex(nums);
    expect(result).toBe(0);
  });

  // Test case with only one element
  it('should return 0 when nums = [10]', () => {
    const nums = [10];
    const result = pivotIndex(nums);
    expect(result).toBe(0); // Since there are no left or right elements, the only element is the pivot
  });

  // Test case with multiple valid pivots (should return the leftmost one)
  it('should return 1 when nums = [1, 0, 1]', () => {
    const nums = [1, 0, 1];
    const result = pivotIndex(nums);
    expect(result).toBe(1); // Left sum and right sum are both 1
  });

  // Edge case: all zeros
  it('should return 0 when nums = [0, 0, 0, 0, 0]', () => {
    const nums = [0, 0, 0, 0, 0];
    const result = pivotIndex(nums);
    expect(result).toBe(0); // All elements are zero, any index could technically be the pivot, but we return the leftmost one
  });

  // Leetcode Test 549/746
  it('should return 2 when nums = [-1,-1,0,0,-1,-1]', () => {
    const nums = [-1, -1, 0, 0, -1, -1];
    const result = pivotIndex(nums);
    expect(result).toBe(2);
  });

  // Edge case: large array with all elements the same
  it('should return 4 when nums = [5, 5, 5, 5, 5, 5, 5, 5, 5]', () => {
    const nums = [5, 5, 5, 5, 5, 5, 5, 5, 5];
    const result = pivotIndex(nums);
    expect(result).toBe(4); // Pivot index at 4
  });

  // Edge case: large array with alternating values
  it('should handle a large array with alternating values correctly', () => {
    const nums = new Array(10_000).fill(1).map((_, i) => (i % 2 === 0 ? 1000 : -1000));
    const result = pivotIndex(nums);
    expect(result).toBe(-1); // No pivot index for alternating large values
  });

  // Edge case: sum might overflow without proper handling
  it('should return the correct pivot for large positive and negative numbers', () => {
    const nums = [1_000_000, -1_000_000, 2, 0, 2, 1_000_000, -1_000_000];
    const result = pivotIndex(nums);
    expect(result).toBe(3); // Pivot index where left and right sums equal
  });
});
