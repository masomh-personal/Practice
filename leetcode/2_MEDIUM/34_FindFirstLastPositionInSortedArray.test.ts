import { searchRange } from './34_FindFirstLastPositionInSortedArray';

describe('Leetcode #34: Find First and Last Position of Element in Sorted Array', () => {
  describe('Basic functionality', () => {
    it('should return [3, 4] for target 8 in [5,7,7,8,8,10]', () => {
      const nums = [5, 7, 7, 8, 8, 10];
      const target = 8;
      const result = searchRange(nums, target);
      const expected = [3, 4];
      expect(result).toEqual(expected);
    });

    it('should return [-1, -1] when target is not found', () => {
      const nums = [5, 7, 7, 8, 8, 10];
      const target = 6;
      const result = searchRange(nums, target);
      const expected = [-1, -1];
      expect(result).toEqual(expected);
    });

    it('should return [0, 0] for single-element array where element matches target', () => {
      const nums = [1];
      const target = 1;
      const result = searchRange(nums, target);
      const expected = [0, 0];
      expect(result).toEqual(expected);
    });
  });

  describe('Edge cases', () => {
    it('should return the same index when target appears only once', () => {
      const nums: number[] = [1, 2, 3];
      const target = 2;
      const expected = [1, 1]; // Target 2 appears only at index 1
      const result = searchRange(nums, target);
      expect(result).toEqual(expected);
    });

    it('should return [-1, -1] for empty array', () => {
      const nums: number[] = [];
      const target = 0;
      const result = searchRange(nums, target);
      const expected = [-1, -1];
      expect(result).toEqual(expected);
    });

    it('should return correct range when entire array is the target', () => {
      const nums = [2, 2, 2, 2, 2];
      const target = 2;
      const result = searchRange(nums, target);
      const expected = [0, 4];
      expect(result).toEqual(expected);
    });

    it('should return correct range when target appears at the start', () => {
      const nums = [3, 3, 4, 5, 6];
      const target = 3;
      const result = searchRange(nums, target);
      const expected = [0, 1];
      expect(result).toEqual(expected);
    });

    it('should return correct range when target appears at the end', () => {
      const nums = [1, 2, 3, 4, 4];
      const target = 4;
      const result = searchRange(nums, target);
      const expected = [3, 4];
      expect(result).toEqual(expected);
    });
  });

  describe('Stress tests', () => {
    it('should handle a medium-sized sorted array with repeated target values', () => {
      const nums = [
        ...Array(333).fill(10),
        ...Array(368).fill(1983), // from index 333 to 700
        ...Array(299).fill(9999),
      ];

      const target = 1983;
      const expected = [333, 700];
      const result = searchRange(nums, target);

      expect(result).toEqual(expected);
    });

    it('should handle target values at the beginning of a large array', () => {
      const nums = Array(1000).fill(2);
      nums[0] = 1;
      nums[1] = 1;
      nums[2] = 1;

      const target = 1;
      const expected = [0, 2];
      const result = searchRange(nums, target);

      expect(result).toEqual(expected);
    });

    it('should handle target values at the end of a large array', () => {
      const nums = Array(1000).fill(1);
      nums[997] = 5;
      nums[998] = 5;
      nums[999] = 5;

      const target = 5;
      const expected = [997, 999];
      const result = searchRange(nums, target);

      expect(result).toEqual(expected);
    });
  });
});
