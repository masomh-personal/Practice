// Assuming your counting sort function is named `countingSort` and is exported from a file named `countingSort.js`.
import { countingSort } from '../counting-sort.js';

describe('Counting Sort', () => {
  it('should throw an error if there are any negative numbers in provided array', () => {
    const arr = [-1, 3, 6, 1, 8, 2, 9, 5, 7, 4, -10];
    expect(() => countingSort(arr)).toThrowError();
  });

  it('should sort an array of positive integers', () => {
    const arr = [3, 6, 1, 8, 2, 9, 5, 7, 4];
    expect(countingSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should handle an array with duplicate numbers', () => {
    const arr = [4, 2, 2, 8, 3, 3, 1];
    expect(countingSort(arr)).toEqual([1, 2, 2, 3, 3, 4, 8]);
  });

  it('should handle an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(countingSort(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle an array with a single element', () => {
    const arr = [5];
    expect(countingSort(arr)).toEqual([5]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    expect(countingSort(arr)).toEqual([]);
  });

  it('should handle an array with all identical elements', () => {
    const arr = [7, 7, 7, 7, 7];
    expect(countingSort(arr)).toEqual([7, 7, 7, 7, 7]);
  });

  it('should sort a larger array of numbers efficiently', () => {
    const length = 1e3;
    const valueCeiling = 3e2;
    // Generating a large array
    const largeArray = Array.from({ length: length }, () =>
      Math.floor(Math.random() * valueCeiling)
    );

    // Creating a copy and sorting it using JavaScript's built-in sort for verification
    // NOTE: JS V8 engine uses a variation of Quicksort called Introsort (combines Quicksort, Heapsort, and Insertion Sort)
    const expected = [...largeArray].sort((a, b) => a - b);

    expect(countingSort(largeArray)).toEqual(expected);
  });
});
