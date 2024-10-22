import { MinHeap } from '../data-structures/MinHeap';
import { MaxHeap } from '../data-structures/MaxHeap';

/**
 * heapSort function using MinHeap or MaxHeap for sorting an array.
 *
 * This function sorts an array in ascending or descending order using a heap.
 * It uses the heapify method to efficiently build the heap and then extracts
 * elements to build the sorted result.
 *
 * Time Complexity: O(n * log n)
 * Space Complexity: O(n)
 *
 * @param numArr - The array of numbers to be sorted.
 * @param isAscending - If true, sorts in ascending order; if false, sorts in descending order (default is true).
 * @returns The sorted array.
 */
export const heapSort = (numArr: number[], isAscending: boolean = true): number[] => {
  // Early return for arrays with 0 or 1 element (already sorted)
  if (numArr.length <= 1) return numArr;

  // Choose MinHeap for ascending sort, MaxHeap for descending sort
  const heap = isAscending ? new MinHeap() : new MaxHeap();

  // Build the heap from the array using the heapify method
  heap.heapify(numArr);

  const sorted: number[] = [];

  // Extract elements from the heap to build the sorted array
  while (!heap.isEmpty()) {
    const extracted = heap instanceof MinHeap ? heap.extractMin() : heap.extractMax();
    sorted.push(extracted);
  }

  return sorted;
};
