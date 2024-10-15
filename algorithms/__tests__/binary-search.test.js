import { binarySearch } from '../binary-search.js';

describe('binarySearch', () => {
  describe('when the target exists in the array', () => {
    it('should return the correct index for target at the start of the array', () => {
      const nums = [1, 3, 5, 7, 9];
      const target = 1;
      const result = binarySearch(nums, target);
      expect(result).toBe(0);
    });

    it('should return the correct index for target in the middle of the array', () => {
      const nums = [1, 3, 5, 7, 9];
      const target = 5;
      const result = binarySearch(nums, target);
      expect(result).toBe(2);
    });

    it('should return the correct index for target at the end of the array', () => {
      const nums = [1, 3, 5, 7, 9];
      const target = 9;
      const result = binarySearch(nums, target);
      expect(result).toBe(4);
    });

    it('should return the correct index for target within a very large sorted array', () => {
      const arraySize = 1e6; // 1 million, going higher may overflow
      const nums = Array(arraySize);

      // Populate the array with sorted random numbers
      nums[0] = 0;
      for (let i = 1; i < arraySize; i++) {
        nums[i] = nums[i - 1] + Math.floor(Math.random() * 10);
      }

      // Generate a random index within bounds
      const randomIndexWithinBounds = Math.floor(Math.random() * (arraySize - 1));

      // Get the target value from the nums array at the random index
      const target = nums[randomIndexWithinBounds];

      // Perform binary search and expect the result to be the correct index
      const result = binarySearch(nums, target);
      expect(result).toBe(randomIndexWithinBounds);
    });
  });

  describe('when the target does not exist in the array', () => {
    it('should return -1 for target less than the smallest number', () => {
      const nums = [1, 3, 5, 7, 9];
      const target = 0;
      const result = binarySearch(nums, target);
      expect(result).toBe(-1);
    });

    it('should return -1 for target greater than the largest number', () => {
      const nums = [1, 3, 5, 7, 9];
      const target = 10;
      const result = binarySearch(nums, target);
      expect(result).toBe(-1);
    });

    it('should return -1 for target that is not present in the array', () => {
      const nums = [1, 3, 5, 7, 9];
      const target = 4;
      const result = binarySearch(nums, target);
      expect(result).toBe(-1);
    });
  });

  describe('edge cases', () => {
    it('should return -1 for an empty array', () => {
      const nums = [];
      const target = 1;
      const result = binarySearch(nums, target);
      expect(result).toBe(-1);
    });

    it('should return 0 when the array contains only one element and it matches the target', () => {
      const nums = [1];
      const target = 1;
      const result = binarySearch(nums, target);
      expect(result).toBe(0);
    });

    it('should return -1 when the array contains only one element and it does not match the target', () => {
      const nums = [1];
      const target = 2;
      const result = binarySearch(nums, target);
      expect(result).toBe(-1);
    });
  });
});
