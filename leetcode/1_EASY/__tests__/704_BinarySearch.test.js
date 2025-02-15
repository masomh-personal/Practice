import { search as binarySearch } from '../704_BinarySearch.js';

describe('Leetcode #704: Binary Search', () => {
  describe('When the target exists in the array', () => {
    it('should return the correct index when the target is in the middle', () => {
      const result = binarySearch([-1, 0, 3, 5, 9, 12], 9);
      expect(result).toBe(4);
    });

    it('should return the correct index when the target is at the beginning', () => {
      const result = binarySearch([2, 5, 8, 12, 16], 2);
      expect(result).toBe(0);
    });

    it('should return the correct index when the target is at the end', () => {
      const result = binarySearch([1, 3, 5, 7, 9], 9);
      expect(result).toBe(4);
    });

    it('should return the correct index when the array has only one element and matches the target', () => {
      const result = binarySearch([7], 7);
      expect(result).toBe(0);
    });
  });

  describe('When the target does not exist in the array', () => {
    it('should return -1 when the target is not present', () => {
      const result = binarySearch([-10, -5, 0, 5, 10], 6);
      expect(result).toBe(-1);
    });

    it('should return -1 when the array is empty', () => {
      const result = binarySearch([], 5);
      expect(result).toBe(-1);
    });

    it('should return -1 when the array has only one element and does not match the target', () => {
      const result = binarySearch([7], 3);
      expect(result).toBe(-1);
    });
  });

  describe('Handling even-length arrays', () => {
    it('should return the correct index when the target is in the first half', () => {
      const result = binarySearch([1, 3, 5, 7, 9, 11], 3);
      expect(result).toBe(1);
    });

    it('should return the correct index when the target is in the second half', () => {
      const result = binarySearch([1, 3, 5, 7, 9, 11], 9);
      expect(result).toBe(4);
    });
  });

  describe('Edge case handling', () => {
    it('should correctly find the first element', () => {
      const result = binarySearch([1, 2, 3, 4, 5], 1);
      expect(result).toBe(0);
    });

    it('should correctly find the last element', () => {
      const result = binarySearch([1, 2, 3, 4, 5], 5);
      expect(result).toBe(4);
    });

    it('should correctly handle negative numbers', () => {
      const result = binarySearch([-10, -5, -2, 0, 3, 7], -2);
      expect(result).toBe(2);
    });
  });

  describe('Performance test versus traditional linear, custom two-pointer "linear search", and binary search', () => {
    /**
     * Traditional linear search: Iterates from start to end to find the target.
     * Time Complexity: O(n) - Worst case, scans the entire array.
     *
     * @param {number[]} nums - The sorted array
     * @param {number} target - The number to search for
     * @returns {number} - Index of the target or -1 if not found
     */
    function linearSearch(nums, target) {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
      }
      return -1;
    }

    /**
     * Two-pointer linear search: Scans from both ends towards the middle.
     * Time Complexity: O(n/2) ≈ O(n) - Still linear, but reduces average iterations by half.
     *
     * @param {number[]} nums - The sorted array
     * @param {number} target - The number to search for
     * @returns {number} - Index of the target or -1 if not found
     */
    function linearSearchV2(nums, target) {
      let left = 0;
      let right = nums.length - 1;

      while (left <= right) {
        if (nums[left] === target) {
          return left;
        } else if (nums[right] === target) {
          return right;
        }
        left++;
        right--;
      }
      return -1;
    }

    it('should correctly handle a large array [Performance Test]', () => {
      const SIZE = 1e6;
      const TARGET = Math.floor(SIZE * 0.75);
      const largeArray = Array.from({ length: SIZE }, (_, i) => i);

      console.log(
        `\nRunning Performance Test on Array of Size: ${SIZE.toLocaleString()}\nSearching for Target: ${TARGET.toLocaleString()}\n`
      );

      console.time('Binary Search Time');
      const binaryResult = binarySearch(largeArray, TARGET);
      console.timeEnd('Binary Search Time');

      console.time('Traditional Linear Search Time');
      const linearResult = linearSearch(largeArray, TARGET);
      console.timeEnd('Traditional Linear Search Time');

      console.time('Two-Pointer Linear Search Time');
      const linearV2Result = linearSearchV2(largeArray, TARGET);
      console.timeEnd('Two-Pointer Linear Search Time');

      expect(binaryResult).toBe(TARGET);
      expect(linearResult).toBe(TARGET);
      expect(linearV2Result).toBe(TARGET);
    });
  });
});
