import { MinHeap } from './MinHeap.js';
import { MaxHeap } from './MaxHeap.js';

/**
 * A utility class for heap-related algorithms.
 */
export class HeapUtils {
  /**
   * Sorts an array using a MinHeap or MaxHeap.
   *
   * @param {number[]} numArr - The array of numbers to be sorted.
   * @param {boolean} [isAscending=true] - If true, sorts in ascending order; if false, sorts in descending order.
   * @returns {number[]} - The sorted array.
   */
  static heapSort(numArr, isAscending = true) {
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
  }
}
