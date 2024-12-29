import { NumArray } from '../303_RangeSumQuery_Immutable.js';

describe('Leetcode #303: Range Sum Query - Immutable', () => {
  it('should return the correct sum for given ranges', () => {
    const nums = [-2, 0, 3, -5, 2, -1];
    const numArray = new NumArray(nums);

    // Test case 1
    let result = numArray.sumRange(0, 2);
    let expected = 1; // -2 + 0 + 3 = 1
    expect(result).toBe(expected);

    // Test case 2
    result = numArray.sumRange(2, 5);
    expected = -1; // 3 + (-5) + 2 + (-1) = -1
    expect(result).toBe(expected);

    // Test case 3
    result = numArray.sumRange(0, 5);
    expected = -3; // -2 + 0 + 3 + (-5) + 2 + (-1) = -3
    expect(result).toBe(expected);
  });

  it('should handle edge cases with single element ranges', () => {
    const nums = [1];
    const numArray = new NumArray(nums);

    // Test case 1
    let result = numArray.sumRange(0, 0);
    let expected = 1; // Single element
    expect(result).toBe(expected);

    // Test case 2
    const nums2 = [-100];
    const numArray2 = new NumArray(nums2);

    result = numArray2.sumRange(0, 0);
    expected = -100; // Single element
    expect(result).toBe(expected);
  });

  it('should handle an array with multiple identical elements', () => {
    const nums = [5, 5, 5, 5, 5];
    const numArray = new NumArray(nums);

    // Test case 1
    let result = numArray.sumRange(0, 4);
    let expected = 25; // 5 + 5 + 5 + 5 + 5 = 25
    expect(result).toBe(expected);

    // Test case 2
    result = numArray.sumRange(1, 3);
    expected = 15; // 5 + 5 + 5 = 15
    expect(result).toBe(expected);
  });

  it('should handle ranges that span the entire array', () => {
    const nums = [-1, -2, -3, -4, -5];
    const numArray = new NumArray(nums);

    // Test case 1
    let result = numArray.sumRange(0, 4);
    let expected = -15; // Sum of all elements
    expect(result).toBe(expected);

    // Test case 2
    result = numArray.sumRange(0, 0);
    expected = -1; // First element
    expect(result).toBe(expected);
  });

  // NOTE: optional test here with provided empty array (Leetcode constraints state there
  // will never be an empty array)
  it('should throw an error for an empty array', () => {
    expect(() => new NumArray([])).toThrow('Provided array nums must not be empty');
  });

  // NOTE: also optional test to check for proper sumRange() provided left/right indices
  it('should throw an error for invalid ranges in sumRange', () => {
    const nums = [1, 2, 3, 4, 5];
    const numArray = new NumArray(nums);

    // Invalid range: left is negative
    expect(() => numArray.sumRange(-1, 2)).toThrow('Invalid range for sumRange');

    // Invalid range: right is out of bounds
    expect(() => numArray.sumRange(1, 5)).toThrow('Invalid range for sumRange');

    // Invalid range: left is greater than right
    expect(() => numArray.sumRange(3, 1)).toThrow('Invalid range for sumRange');

    // Invalid range: both left and right are out of bounds
    expect(() => numArray.sumRange(-2, 10)).toThrow('Invalid range for sumRange');
  });
});
