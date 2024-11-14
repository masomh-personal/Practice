class MinHeap153 {
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
   * Extract (remove) the minimum value from the heap and return it.
   * The last element replaces the root, and the heap is restructured by "bubbling down".
   * @returns {number|null} - The extracted minimum value, or null if the heap is empty.
   */
  extractMin() {
    if (this.isEmpty()) return null;

    this.#swap(0, this.#heap.length - 1);
    const extracted = this.#heap.pop();
    this.#bubbleDown(0);
    return extracted;
  }

  /**
   * Peek at the minimum value without removing it.
   * @returns {number|null} - The minimum value, or null if the heap is empty.
   */
  peekMin() {
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
   * Heapify up to maintain the min heap property after insertions.
   * @param {number} childIdx - Index of the newly inserted element.
   */
  #bubbleUp(childIdx) {
    while (childIdx > 0) {
      let parentIdx = this.#getParentIdx(childIdx);

      const parentNum = this.#heap.at(parentIdx);
      const childNum = this.#heap.at(childIdx);

      // If the parent is smaller, the heap property is satisfied
      if (parentNum <= childNum) break;

      // Swap the child and parent if heap property is violated
      this.#swap(parentIdx, childIdx);

      // Move up to the parent index
      childIdx = parentIdx;
    }
  }

  /**
   * Heapify down to maintain the min heap property after extraction or during heapify.
   * @param {number} parentIdx - Index of the root element after extraction or during heapify.
   */
  #bubbleDown(parentIdx) {
    while (parentIdx < this.#heap.length) {
      let [leftChildIdx, rightChildIdx] = this.#getChildrenIndices(parentIdx);

      let parentNum = this.#heap.at(parentIdx);
      let leftChildNum = leftChildIdx < this.#heap.length ? this.#heap.at(leftChildIdx) : Infinity;
      let rightChildNum =
        rightChildIdx < this.#heap.length ? this.#heap.at(rightChildIdx) : Infinity;

      // If the parent is smaller than both children, we're done
      if (parentNum <= leftChildNum && parentNum <= rightChildNum) break;

      // Choose the smaller child to swap with the parent
      const smallerChildIdx = leftChildNum < rightChildNum ? leftChildIdx : rightChildIdx;

      this.#swap(parentIdx, smallerChildIdx);

      // Move to the smaller child's index and continue bubbling down
      parentIdx = smallerChildIdx;
    }
  }
}

/**
 * APPROACH: MinHeap
 *
 * This function finds the minimum element in a rotated sorted array by utilizing a MinHeap.
 * The array is first converted into a MinHeap, where the root node (first element) will be the minimum.
 * This approach is less optimal than binary search for this problem, as it has a higher space complexity.
 *
 * Space Complexity: O(n) - Additional space is required to create the MinHeap from the input array.
 * Time Complexity: O(n) - Heapify operation on the entire array takes O(n) time, and extraction is O(log n).
 *
 * @param {number[]} nums - The rotated sorted array of unique elements.
 * @return {number} - The minimum element in the array.
 */

export const findMin = (nums) => {
  // If there's only one element, it's the minimum
  if (nums.length === 1) return nums[0];

  // Initialize a MinHeap and heapify the input array
  const heap = new MinHeap153();
  heap.heapify(nums); // Heapify rearranges the elements to satisfy the heap property

  // Extract and return the minimum element from the heap
  return heap.extractMin();
};

/**
 * APPROACH: Binary Search
 *
 * Finds the minimum element in a rotated sorted array using binary search.
 * In a rotated sorted array, the minimum element is the pivot point.
 * By comparing the middle element to the rightmost element, we can determine
 * which half of the array to continue searching.
 *
 * Space Complexity: O(1) - Uses a fixed amount of extra space.
 * Time Complexity: O(log n) - Reduces the search space by half each iteration.
 *
 * @param {number[]} nums - Rotated sorted array of unique elements.
 * @return {number} - The minimum element in the array.
 */
export const findMinBS = (nums) => {
  // Edge case: if array has one element, it is the minimum
  if (nums.length === 1) return nums[0];

  let minElement = nums[0]; // Track the minimum element found
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // If current range is sorted, minimum is at the left boundary
    if (nums[left] < nums[right]) {
      minElement = Math.min(minElement, nums[left]);
      break;
    }

    const mid = left + Math.floor((right - left) / 2);
    minElement = Math.min(minElement, nums[mid]);

    // Determine which side to search based on the middle element
    if (nums[mid] >= nums[left]) {
      left = mid + 1; // Left side sorted, search right
    } else {
      right = mid - 1; // Right side sorted, search left
    }
  }

  return minElement;
};
