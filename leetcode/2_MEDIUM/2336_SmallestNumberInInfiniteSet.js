export class SmallestInfiniteSet {
  // Initialize a private heap-like array to hold numbers in the set
  #heap;
  #heapSet;
  #SIZE = 1e3; // Constraint: Max size is 1000 numbers (1 to 1000)

  constructor() {
    this.#heap = Array.from({ length: this.#SIZE }, (_, i) => i + 1);
    this.#heapSet = new Set(this.#heap);
  }

  // PRIVATE METHODS ======================================================
  /**
   * Bubbles up a value to maintain the min-heap property after an insertion.
   * @param {number} childIdx - Index of the newly inserted element.
   */
  #bubbleUp(childIdx) {
    while (childIdx > 0) {
      const parentIdx = this.#getParentIdx(childIdx);

      const parentNum = this.#heap[parentIdx];
      const childNum = this.#heap[childIdx];

      // Min-heap rule: Parent should always be smaller
      if (parentNum <= childNum) break;

      // If the parent is bigger, swap and keep bubbling up
      this.#swap(parentIdx, childIdx);

      // Move to the parent index for the next iteration
      childIdx = parentIdx;
    }
  }

  /**
   * Gets the index of the parent node for a given child.
   * @param {number} idx - Index of the child node.
   * @returns {number} - Index of the parent node.
   */
  #getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  /**
   * Swaps two elements in the heap.
   * @param {number} idx1 - Index of the first element.
   * @param {number} idx2 - Index of the second element.
   */
  #swap(idx1, idx2) {
    [this.#heap[idx1], this.#heap[idx2]] = [this.#heap[idx2], this.#heap[idx1]];
  }

  /**
   * Bubbles down a value to maintain the min-heap property after extraction.
   * @param {number} parentIdx - Index of the root element after removal.
   */
  #bubbleDown(parentIdx) {
    while (parentIdx < this.#heap.length) {
      const [leftChildIdx, rightChildIdx] = this.#getChildrenIndices(parentIdx);

      const parentNum = this.#heap[parentIdx];
      const leftChildNum = leftChildIdx < this.#heap.length ? this.#heap[leftChildIdx] : Infinity;
      const rightChildNum =
        rightChildIdx < this.#heap.length ? this.#heap[rightChildIdx] : Infinity;

      // If the parent is smaller than both children, we're done
      if (parentNum <= leftChildNum && parentNum <= rightChildNum) break;

      // Swap with the smaller child and keep going
      const smallerChildIdx = leftChildNum < rightChildNum ? leftChildIdx : rightChildIdx;
      this.#swap(parentIdx, smallerChildIdx);

      parentIdx = smallerChildIdx; // Update index to continue bubbling down
    }
  }

  /**
   * Gets the indices of the left and right children of a node.
   * @param {number} idx - Index of the current node.
   * @returns {number[]} - Array with indices of left and right children.
   */
  #getChildrenIndices(idx) {
    return [2 * idx + 1, 2 * idx + 2];
  }

  // PUBLIC METHODS ======================================================

  /**
   * Adds a number back into the infinite set if it's not already present.
   * @param {number} value - The number to add back.
   */
  addBack(value) {
    if (value < 1 || value > 1000) {
      throw new Error('Value out of bounds. Must be between 1 and 1000.');
    }

    if (this.#heapSet.has(value)) {
      // Already in the set—no need to add it again!
      return;
    }

    // Add to the heap and update the set
    this.#heap.push(value);
    this.#heapSet.add(value);

    // Restore min-heap property after insertion
    const n = this.#heap.length;
    if (n > 1) {
      this.#bubbleUp(n - 1);
    }
  }

  /**
   * Removes and returns the smallest number from the infinite set.
   * @returns {number|null} - The smallest number or null if the set is empty.
   */
  popSmallest() {
    if (this.isEmpty()) {
      return null; // Graceful handling of an empty set
    }

    // Swap root with the last element and pop it
    this.#swap(0, this.#heap.length - 1);
    const extracted = this.#heap.pop();
    this.#bubbleDown(0); // Restore min-heap property

    this.#heapSet.delete(extracted); // Remove from the set
    return extracted;
  }

  /**
   * Checks if the heap is empty.
   * @returns {boolean} - True if the heap is empty, false otherwise.
   */
  isEmpty() {
    return this.#heap.length === 0;
  }
}
