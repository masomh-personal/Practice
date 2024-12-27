import { containsNearbyDuplicate } from '../219_ContainsDuplicatesII.js';

describe('Leetcode #219: Contains Duplicate II', () => {
  it('should return true when nums has duplicates within range k', () => {
    const nums = [1, 2, 3, 1];
    const k = 3;
    const expected = true;
    const result = containsNearbyDuplicate(nums, k);
    expect(result).toBe(expected);
  });

  it('should return true when nums has adjacent duplicates', () => {
    const nums = [1, 0, 1, 1];
    const k = 1;
    const expected = true;
    const result = containsNearbyDuplicate(nums, k);
    expect(result).toBe(expected);
  });

  it('should return false when nums does not have duplicates within range k', () => {
    const nums = [1, 2, 3, 1, 2, 3];
    const k = 2;
    const expected = false;
    const result = containsNearbyDuplicate(nums, k);
    expect(result).toBe(expected);
  });

  it('should return false when nums is unique', () => {
    const nums = [1, 2, 3, 4];
    const k = 3;
    const expected = false;
    const result = containsNearbyDuplicate(nums, k);
    expect(result).toBe(expected);
  });

  it('should handle edge case with k = 0', () => {
    const nums = [1, 2, 3, 1];
    const k = 0;
    const expected = false;
    const result = containsNearbyDuplicate(nums, k);
    expect(result).toBe(expected);
  });

  it('should handle edge case with nums of size 1', () => {
    const nums = [1];
    const k = 5;
    const expected = false;
    const result = containsNearbyDuplicate(nums, k);
    expect(result).toBe(expected);
  });

  it('should handle large input where k is greater than nums.length', () => {
    const nums = [1, 2, 3, 1, 2, 3];
    const k = 10;
    const expected = true;
    const result = containsNearbyDuplicate(nums, k);
    expect(result).toBe(expected);
  });
});
