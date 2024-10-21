import { MinHeap } from '../data-structures/MinHeap.js';
import { MaxHeap } from '../data-structures/MaxHeap.js';

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
 * @param {number[]} numArr - The array of numbers to be sorted.
 * @param {boolean} [isAscending=true] - If true, sorts in ascending order; if false, sorts in descending order.
 * @returns {number[]} - The sorted array.
 */
export const heapSort = (numArr, isAscending = true) => {
  // Early return for arrays with 0 or 1 element (already sorted)
  if (numArr.length <= 1) return numArr;

  // Choose MinHeap for ascending sort, MaxHeap for descending sort
  const heap = isAscending ? new MinHeap() : new MaxHeap();

  // Build the heap from the array using the heapify method
  heap.heapify(numArr);

  const sorted = [];
  // Extract elements from the heap to build the sorted array
  while (!heap.isEmpty()) {
    const extractedValue = isAscending ? heap.extractMin() : heap.extractMax();
    sorted.push(extractedValue);
  }

  return sorted;
};
