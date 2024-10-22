import { heapSort } from '../heap-sort.js';
import { measurePerformance } from '../../utilities/benchmarking.ts';

describe('heapSort', () => {
  describe('Basic Functionality', () => {
    it('should sort an array of numbers in ascending order', () => {
      const arr = [5, 2, 9, 1, 5, 6];
      const result = heapSort(arr);
      expect(result).toEqual([1, 2, 5, 5, 6, 9]);
    });

    it('should sort an array of numbers in descending order', () => {
      const arr = [5, 2, 9, 1, 5, 6];
      const result = heapSort(arr, false);
      expect(result).toEqual([9, 6, 5, 5, 2, 1]);
    });
  });

  describe('Edge Cases', () => {
    it('should return an empty array when input is an empty array', () => {
      const arr = [];
      const result = heapSort(arr);
      expect(result).toEqual([]);
    });

    it('should return the same array when input has one element', () => {
      const arr = [42];
      const result = heapSort(arr);
      expect(result).toEqual([42]);
    });

    it('should correctly sort an array with all identical elements', () => {
      const arr = [7, 7, 7, 7];
      const result = heapSort(arr);
      expect(result).toEqual([7, 7, 7, 7]);
    });

    it('should handle already sorted arrays (ascending)', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = heapSort(arr);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle already sorted arrays (descending)', () => {
      const arr = [5, 4, 3, 2, 1];
      const result = heapSort(arr, false);
      expect(result).toEqual([5, 4, 3, 2, 1]);
    });
  });

  describe('Special Cases', () => {
    it('should sort an array with negative numbers correctly (ascending)', () => {
      const arr = [-3, -1, -7, -4, -5];
      const result = heapSort(arr);
      expect(result).toEqual([-7, -5, -4, -3, -1]);
    });

    it('should sort an array with negative numbers correctly (descending)', () => {
      const arr = [-3, -1, -7, -4, -5];
      const result = heapSort(arr, false);
      expect(result).toEqual([-1, -3, -4, -5, -7]);
    });

    it('should sort an array with a mix of positive, negative, and zero values (ascending)', () => {
      const arr = [0, -1, 4, -5, 3, 2];
      const result = heapSort(arr);
      expect(result).toEqual([-5, -1, 0, 2, 3, 4]);
    });

    it('should sort an array with a mix of positive, negative, and zero values (descending)', () => {
      const arr = [0, -1, 4, -5, 3, 2];
      const result = heapSort(arr, false);
      expect(result).toEqual([4, 3, 2, 0, -1, -5]);
    });
  });

  describe('Large Arrays (comparing to JS engine sorting()', () => {
    it('should handle a large array efficiently and return the correct sorted result (ascending)', () => {
      const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
      const result = heapSort([...arr]);
      expect(result).toEqual(arr.sort((a, b) => a - b));
    });

    it('should handle a large array efficiently and return the correct sorted result (descending)', () => {
      const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
      const result = heapSort([...arr], false);
      expect(result).toEqual(arr.sort((a, b) => b - a));
    });
  });

  describe('Performance Testing (to be less than specific set amount in ms)', () => {
    const arrSize = 1e5; // 100,000

    it('should measure performance for large arrays (ascending)', () => {
      const arr = Array.from({ length: arrSize }, () => Math.floor(Math.random() * arrSize));
      const timeTaken = measurePerformance(heapSort, [...arr]);

      console.log(
        `Performance: heapSort() executed in ${timeTaken.toFixed(2)} milliseconds (ascending).`
      );
      expect(timeTaken).toBeLessThan(1000); // Example assertion for performance threshold
    });

    it('should measure performance for large arrays (descending)', () => {
      const arr = Array.from({ length: arrSize }, () => Math.floor(Math.random() * arrSize));
      const timeTaken = measurePerformance(heapSort, [...arr], false);

      console.log(
        `Performance: heapSort() executed in ${timeTaken.toFixed(2)} milliseconds (descending).`
      );
      expect(timeTaken).toBeLessThan(1000); // Example assertion for performance threshold
    });
  });
});
