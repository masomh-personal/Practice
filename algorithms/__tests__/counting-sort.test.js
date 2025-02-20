import { countingSort } from '../counting-sort.ts';

describe('Counting Sort', () => {
  describe('Error Handling', () => {
    it('should throw an error if there are negative numbers in the array', () => {
      const arr = [-1, 3, 6, 1, 8, 2, 9, 5, 7, 4, -10];
      expect(() => countingSort(arr)).toThrowError(
        'Counting Sort only supports non-negative integers'
      );
    });
  });

  describe('Basic Functionality', () => {
    it('should sort an array of positive integers', () => {
      const arr = [3, 6, 1, 8, 2, 9, 5, 7, 4];
      const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const result = countingSort(arr);
      expect(result).toEqual(expected);
    });

    it('should handle an array with duplicate numbers', () => {
      const arr = [4, 2, 2, 8, 3, 3, 1];
      const expected = [1, 2, 2, 3, 3, 4, 8];
      const result = countingSort(arr);
      expect(result).toEqual(expected);
    });

    it('should handle an already sorted array', () => {
      const arr = [1, 2, 3, 4, 5, 6];
      const expected = [1, 2, 3, 4, 5, 6];
      const result = countingSort(arr);
      expect(result).toEqual(expected);
    });

    it('should handle an array with a single element', () => {
      const arr = [5];
      const expected = [5];
      const result = countingSort(arr);
      expect(result).toEqual(expected);
    });

    it('should handle an empty array', () => {
      const arr = [];
      const expected = [];
      const result = countingSort(arr);
      expect(result).toEqual(expected);
    });

    it('should handle an array with all identical elements', () => {
      const arr = [7, 7, 7, 7, 7];
      const expected = [7, 7, 7, 7, 7];
      const result = countingSort(arr);
      expect(result).toEqual(expected);
    });
  });

  /**
   * WHEN TO USE COUNTING SORT:
   * - When all numbers are non-negative integers
   * - When the range (k) is relatively small compared to the number of elements (n)
   * - When stable sorting is needed (preserving the order of equal elements)
   * - When predictable O(n + k) time complexity is desired
   */

  describe('Performance Tests', () => {
    it('should sort a large array efficiently when k < n by a factor of 10', () => {
      const length = 1e5;
      const valueCeiling = length / 10; // k is less than n by a factor of 10
      const largeArray = Array.from({ length }, () => Math.floor(Math.random() * valueCeiling));

      // Clone the array before measuring time
      const nativeSortArray = [...largeArray];

      // Timing JavaScript's Native V8 Engine Sort
      console.time('V8 Engine Sort');
      const expected = nativeSortArray.sort((a, b) => a - b);
      console.timeEnd('V8 Engine Sort');

      // Timing Counting Sort Implementation
      console.time('Counting Sort');
      const result = countingSort(largeArray);
      console.timeEnd('Counting Sort');

      expect(result).toEqual(expected);
    });
  });
});
