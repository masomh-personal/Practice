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

export class MaxHeap {
  #heap = [];

  // Public Methods

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
   * Heapify down to maintain the max heap property after extraction.
   * @param {number} parentIdx - Index of the root element after extraction.
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
