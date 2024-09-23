import { productExceptSelf, productExceptSelfNaive } from '../238_ProductArrayExceptSelf.js'; // Replace with actual path to your solution file

describe('productExceptSelf', () => {
  it('should return [24,12,8,6] for input [1,2,3,4]', () => {
    const nums = [1, 2, 3, 4];
    const expected = [24, 12, 8, 6];
    expect(productExceptSelf(nums)).toEqual(expected);
    expect(productExceptSelfNaive(nums)).toEqual(expected);
  });

  it('should return [4800,3840,19200,2400,9600,1920,3200] for input [4,5,1,8,2,10,6]', () => {
    const nums = [4, 5, 1, 8, 2, 10, 6];
    const expected = [4800, 3840, 19200, 2400, 9600, 1920, 3200];
    expect(productExceptSelf(nums)).toEqual(expected);
    expect(productExceptSelfNaive(nums)).toEqual(expected);
  });

  it('should return [0,0,9,0,0] for input [-1,1,0,-3,3]', () => {
    const nums = [-1, 1, 0, -3, 3];
    const expected = [0, 0, 9, 0, 0];
    const result = productExceptSelf(nums);
    const resultNaive = productExceptSelfNaive(nums);
    expect(result.every((num, idx) => num === expected[idx])).toBe(true);
    expect(resultNaive.every((num, idx) => num === expected[idx])).toBe(true);
  });

  it('should return [1] for input [1]', () => {
    const nums = [1];
    const expected = [1];
    expect(productExceptSelf(nums)).toEqual(expected);
    expect(productExceptSelfNaive(nums)).toEqual(expected);
  });

  it('should handle negative numbers correctly', () => {
    const nums = [-2, -3, -4];
    const expected = [12, 8, 6];
    expect(productExceptSelf(nums)).toEqual(expected);
    expect(productExceptSelfNaive(nums)).toEqual(expected);
  });

  it('should handle array with two elements', () => {
    const nums = [2, 3];
    const expected = [3, 2];
    expect(productExceptSelf(nums)).toEqual(expected);
    expect(productExceptSelfNaive(nums)).toEqual(expected);
  });

  it('should handle large input size efficiently', () => {
    const nums = Array(100000).fill(1); // Test for large input size
    const expected = Array(100000).fill(1);
    expect(productExceptSelf(nums)).toEqual(expected);
    expect(productExceptSelfNaive(nums)).toEqual(expected);
  });
});
