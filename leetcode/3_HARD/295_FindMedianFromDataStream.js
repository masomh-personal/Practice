// ==================================================================================================
class MaxHeap295 {
  #heap = [];

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

// ==================================================================================================
class MinHeap295 {
  #heap = [];

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
 * NAIVE APPROACH: using a HEAP with Heap Sort
 * Time: O(n log n) - because we are sorting at each call to findMedian()
 * Space: O(n*2) - cloning at each sort!
 */
export class MedianFinderNaive {
  #numArr = [];

  addNum(num) {
    this.#numArr.push(num);
  }

  findMedian() {
    const sorted = this.#heapSort(this.#numArr);
    const sortedLength = sorted.length;
    const middleFloorIdx = Math.floor(sortedLength / 2);

    // if it's an even length, need to get average of middle two indie values
    if (sortedLength % 2 === 0) {
      return (sorted.at(middleFloorIdx) + sorted.at(middleFloorIdx - 1)) / 2;
    }

    // odd length and can just take the middle value
    return sorted.at(middleFloorIdx);
  }

  #heapSort(numArr) {
    if (numArr.length <= 1) return numArr;
    const heap = new MinHeap295();

    // We will need to create a clone to not mess with original array
    const clonedNumArr = [...numArr];

    // Build the heap from the array using the heapify method
    heap.heapify(clonedNumArr);

    const sorted = [];
    // Extract elements from the heap to build the sorted array
    while (!heap.isEmpty()) {
      const extractedValue = heap.extractMin();
      sorted.push(extractedValue);
    }

    return sorted;
  }
}

/**
 * OPTIMIZED APPROACH: Using Two Heaps (Max-Heap for lower half, Min-Heap for upper half)
 * Time Complexity:
 *   - addNum(): O(log n) - Insertion into a heap
 *   - findMedian(): O(1) - Constant time retrieval from heap roots
 * Space Complexity: O(n) - Storing all elements in the heaps
 */
export class MedianFinder {
  constructor() {
    this.lowerHalf = new MaxHeap295(); // Max-heap for the smaller half
    this.upperHalf = new MinHeap295(); // Min-heap for the larger half
  }

  /**
   * Add a number to the data structure.
   * @param {number} num
   */
  addNum(num) {
    if (this.lowerHalf.isEmpty() || num <= this.lowerHalf.peekMax()) {
      this.lowerHalf.insert(num); // Add to max-heap
    } else {
      this.upperHalf.insert(num); // Add to min-heap
    }

    // Balance the heaps to ensure their sizes differ by at most 1
    if (this.lowerHalf.getSize() > this.upperHalf.getSize() + 1) {
      this.upperHalf.insert(this.lowerHalf.extractMax());
    } else if (this.upperHalf.getSize() > this.lowerHalf.getSize()) {
      this.lowerHalf.insert(this.upperHalf.extractMin());
    }
  }

  /**
   * Find the median of the current numbers.
   * @returns {number}
   */
  findMedian() {
    if (this.lowerHalf.getSize() > this.upperHalf.getSize()) {
      return this.lowerHalf.peekMax(); // Odd number of elements
    } else {
      return (this.lowerHalf.peekMax() + this.upperHalf.peekMin()) / 2; // Even number of elements
    }
  }
}
