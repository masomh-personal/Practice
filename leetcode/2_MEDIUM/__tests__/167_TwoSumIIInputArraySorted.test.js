import { twoSum } from '../167_TwoSumIIInputArraySorted.js';

describe('Leetcode #167: Two Sum II - Input Array Is Sorted', () => {
  it('Example 1: should return [1, 2] for numbers = [2,7,11,15] and target = 9', () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(numbers, target);
    const expected = [1, 2];
    expect(result).toEqual(expected);
  });

  it('Example 2: should return [1, 3] for numbers = [2,3,4] and target = 6', () => {
    const numbers = [2, 3, 4];
    const target = 6;
    const result = twoSum(numbers, target);
    const expected = [1, 3];
    expect(result).toEqual(expected);
  });

  it('Example 3: should return [1, 2] for numbers = [-1,0] and target = -1', () => {
    const numbers = [-1, 0];
    const target = -1;
    const result = twoSum(numbers, target);
    const expected = [1, 2];
    expect(result).toEqual(expected);
  });

  it('Edge Case: should return [1, 5] for numbers = [1,2,3,4,5] and target = 6', () => {
    const numbers = [1, 2, 3, 4, 5];
    const target = 6;
    const result = twoSum(numbers, target);
    const expected = [1, 5];
    expect(result).toEqual(expected);
  });

  it('Edge Case: should return [1, 3] for numbers = [1,1,3,4] and target = 4', () => {
    const numbers = [1, 1, 3, 4];
    const target = 4;
    const result = twoSum(numbers, target);
    const expected = [1, 3];
    expect(result).toEqual(expected);
  });
});
