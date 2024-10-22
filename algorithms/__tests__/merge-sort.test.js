import { mergeSort } from '../merge-sort'; // Adjust the import path as necessary
import MiscUtils from '../../utilities/MiscUtils.ts';
import ArrayUtils from '../../utilities/ArrayUtils.ts';

describe('mergeSort', () => {
  it('should return an empty array when input is an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  it('should return the same array when input has a single element', () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  it('should sort an array with multiple elements', () => {
    expect(mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5])).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
  });

  it('should correctly sort an already sorted array', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should correctly sort an array sorted in descending order', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should correctly sort an array with negative numbers', () => {
    expect(mergeSort([-3, -1, -4, -2, 0])).toEqual([-4, -3, -2, -1, 0]);
  });

  it('should correctly sort an array with duplicate numbers', () => {
    expect(mergeSort([5, 3, 5, 3, 8, 8, 1, 1])).toEqual([1, 1, 3, 3, 5, 5, 8, 8]);
  });

  describe('Merge Sort - Large Arrays (comparing to JS engine sorting()', () => {
    // Used for all tests within this block
    const arr = ArrayUtils.createRandomIntegerArr(1_000);

    it('should handle a large array efficiently and return the correct sorted result (ascending)', () => {
      const result = mergeSort([...arr]);
      expect(result).toEqual(arr.sort((a, b) => a - b));
    });
  });

  describe('Merge Sort - Performance Testing (to be less than specific set amount in ms)', () => {
    const arrSize = 1e6;
    // Used for all tests within this block
    const arr = ArrayUtils.createRandomIntegerArr(arrSize);

    it('should measure performance for large arrays (ascending)', () => {
      const timeTaken = MiscUtils.measurePerformance(mergeSort, [...arr]);

      console.log(
        `Performance: mergeSort() executed in ${timeTaken.toFixed(2)} milliseconds (ascending).`
      );
      expect(timeTaken).toBeLessThan(1000); // Example assertion for performance threshold
    });

    it('should measure performance for large arrays (descending)', () => {
      const timeTaken = MiscUtils.measurePerformance(mergeSort, [...arr], false);

      console.log(
        `Performance: mergeSort() executed in ${timeTaken.toFixed(2)} milliseconds (descending).`
      );
      expect(timeTaken).toBeLessThan(1000); // Example assertion for performance threshold
    });
  });
});
