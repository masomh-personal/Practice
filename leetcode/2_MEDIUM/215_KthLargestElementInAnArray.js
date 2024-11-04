/**
 * MaxHeap is a specialized binary tree-based data structure that satisfies the heap property.
 * MaxHeaps are used for priority queues, where the highest-priority element (maximum) is accessed first,
 * or for efficiently finding the maximum element.
 *
 * MaxHeap Property:
 * The root node contains the maximum value.
 * Every parent node is greater than or equal to its children.
 *
 * Time Complexities:
 * Insert: O(log n)
 * Remove: O(log n)
 * Peek: O(1)
 */

export class MaxHeap215 {
  #heap = [];

  // Public Methods
  getHeapArr() {
    return this.#heap;
  }

  /**
   * Insert a new value into the heap while maintaining the heap property.
   * @param {number} value - The value to be inserted.
   */
  insert(value) {
    this.#heap.push(value);

    const n = this.#heap.length;
    if (n > 1) {
      // Pass the index of the newly inserted element (n - 1)
      this.#bubbleUp(n - 1);
    }
  }

  /**
   * Extract (remove) the maximum value from the heap and return it.
   * The last element replaces the root, and the heap is restructured by "bubbling down".
   * @returns {number|null} - The extracted maximum value, or null if the heap is empty.
   */
  extractMax() {
    if (this.isEmpty()) return null;

    this.#swap(0, this.#heap.length - 1);
    const extracted = this.#heap.pop();
    this.#bubbleDown(0);
    return extracted;
  }

  /**
   * Peek at the maximum value without removing it.
   * @returns {number|null} - The maximum value, or null if the heap is empty.
   */
  peekMax() {
    return this.isEmpty() ? null : this.#heap[0];
  }

  /**
   * Check if the heap is empty.
   * @returns {boolean} - True if the heap is empty, otherwise false.
   */
  isEmpty() {
    return this.#heap.length === 0;
  }

  /**
   * Get the size of the heap.
   * @returns {number} - The number of elements in the heap.
   */
  getSize() {
    return this.#heap.length;
  }

  /**
   * Build the heap from an array using the heapify method.
   * @param {number[]} arr - The array to convert into a heap.
   */
  heapify(arr) {
    this.#heap = arr;
    const n = this.#heap.length;

    // Start from the last non-leaf node and sift down
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.#bubbleDown(i);
    }
  }

  // Private Methods

  /**
   * Swap two elements in the heap.
   * @param {number} idx1 - Index of the first element.
   * @param {number} idx2 - Index of the second element.
   */
  #swap(idx1, idx2) {
    [this.#heap[idx1], this.#heap[idx2]] = [this.#heap[idx2], this.#heap[idx1]];
  }

  /**
   * Get the index of the parent node.
   * @param {number} idx - Index of the current node.
   * @returns {number} - Index of the parent node.
   */
  #getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  /**
   * Get the indices of the left and right children.
   * @param {number} idx - Index of the current node.
   * @returns {number[]} - An array with the indices of the left and right children.
   */
  #getChildrenIndices(idx) {
    return [2 * idx + 1, 2 * idx + 2];
  }

  /**
   * Heapify up to maintain the max heap property after insertions.
   * @param {number} childIdx - Index of the newly inserted element.
   */
  #bubbleUp(childIdx) {
    while (childIdx > 0) {
      let parentIdx = this.#getParentIdx(childIdx);

      const parentNum = this.#heap.at(parentIdx);
      const childNum = this.#heap.at(childIdx);

      // If the parent is larger, the heap property is satisfied
      if (parentNum >= childNum) break;

      // Swap the child and parent if heap property is violated
      this.#swap(parentIdx, childIdx);

      // Move up to the parent index
      childIdx = parentIdx;
    }
  }

  /**
   * Heapify down to maintain the max heap property after extraction or during heapify.
   * @param {number} parentIdx - Index of the root element after extraction or during heapify.
   */
  #bubbleDown(parentIdx) {
    while (parentIdx < this.#heap.length) {
      let [leftChildIdx, rightChildIdx] = this.#getChildrenIndices(parentIdx);

      let parentNum = this.#heap.at(parentIdx);
      let leftChildNum = leftChildIdx < this.#heap.length ? this.#heap.at(leftChildIdx) : -Infinity;
      let rightChildNum =
        rightChildIdx < this.#heap.length ? this.#heap.at(rightChildIdx) : -Infinity;

      // If the parent is larger than both children, we're done
      if (parentNum >= leftChildNum && parentNum >= rightChildNum) break;

      // Choose the larger child to swap with the parent
      const largerChildIdx = leftChildNum > rightChildNum ? leftChildIdx : rightChildIdx;

      this.#swap(parentIdx, largerChildIdx);

      // Move to the larger child's index and continue bubbling down
      parentIdx = largerChildIdx;
    }
  }
}

/**
 * Finds the kth largest element in an array without sorting.
 *
 * TIME: O(n + k log n) - Building the MaxHeap is O(n), and extracting k elements has O(k log n) complexity.
 * SPACE: O(n) - due to storing the heapified array in a MaxHeap.
 *
 * Approach: Use a MaxHeap to efficiently extract the maximum k times.
 *  - We heapify the array, then extract the max element k times to get the kth largest.
 *
 * @param {number[]} nums - The array of integers.
 * @param {number} kthLargest - The position (k) of the largest element to find.
 * @return {number} - The kth largest element in the array.
 */
export const findKthLargest = (nums, kthLargest) => {
  // Edge Case: If the array has only one element, return it immediately.
  if (nums.length === 1) return nums[0];

  // Step 1: Initialize the MaxHeap and heapify the nums array.
  const heap = new MaxHeap215();
  heap.heapify(nums);

  // Step 2: Extract the max element k times to find the kth largest.
  let result = 0;
  for (let i = 0; i < kthLargest; i++) {
    result = heap.extractMax();
  }

  return result; // The kth largest element after k extractions.
};

/**
 * Finds the kth largest element in an array using sorting (naive approach).
 *
 * TIME: O(n * log n) - Sorting the array takes O(n * log n).
 * SPACE: O(n) - Due to creating a new sorted array.
 *
 * Approach: Sort the array in ascending order, then access the element at the kth largest position.
 *
 * @param {number[]} nums - The array of integers.
 * @param {number} kthLargest - The position (k) of the largest element to find.
 * @return {number} - The kth largest element in the array.
 */
export const findKthLargestNaive = (nums, kthLargest) => {
  // Edge Case: If the array has only one element, return it immediately.
  if (nums.length === 1) return nums[0];

  // NOTE: In-Place Sorting: If an in-place sort was used, this would reduce the space complexity to O(1),
  // but it would mutate the input array, which may not be desirable in all cases.

  // Sort the array in ascending order, then retrieve the kth largest element.
  // NOTE: compare b - a for ascending order
  return nums.toSorted((a, b) => b - a).at(kthLargest - 1);
};

/**
 * Finds the kth largest element in an array using count sorting.
 *
 * TIME: O(n + m) - Counting sort complexity, where n is the number of elements and m is the range of values.
 * SPACE: O(m) - Space for the count array based on the value range.
 *
 * Approach:
 *  - Use a counting array to record occurrences within the range [-10^4, 10^4].
 *  - Traverse the count array to find the kth largest element.
 *
 * @param {number[]} nums - The array of integers.
 * @param {number} kthLargest - The position (k) of the largest element to find.
 * @return {number} - The kth largest element in the array.
 */
export const findKthLargestCountSort = (nums, kthLargest) => {
  // Edge Case: If the array has only one element, return it immediately.
  if (nums.length === 1) return nums[0];

  // Step 1: Define constants for the counting array
  const OFFSET = 10_000; // Offset to handle negative indices (maps -10,000 to 0)
  const MAX_LENGTH = 20_001; // Full range from -10,000 to 10,000

  // Step 2: Initialize the count array with zeros
  const countArr = Array.from({ length: MAX_LENGTH }, () => 0);

  // Step 3: Populate the count array based on values in nums
  for (const num of nums) {
    countArr[num + OFFSET]++; // Shift index by OFFSET to handle negative values
  }

  // Step 4: Traverse the count array from high to low to find the kth largest
  for (let i = countArr.length - 1; i >= 0; i--) {
    const countForNum = countArr[i]; // Occurrences of the value (i - OFFSET) in nums

    if (countForNum) {
      // Check if the kth largest falls within this count
      if (kthLargest - countForNum < 1) {
        return i - OFFSET; // Map back to the original number
      }

      // Decrement kthLargest by the count of this number
      kthLargest -= countForNum;
    }
  }
};
