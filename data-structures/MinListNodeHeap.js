export class MinListNodeHeap {
  #heap = [];

  // Public Methods
  getHeapArr() {
    return this.#heap;
  }

  /**
   * Insert a new ListNode into the heap while maintaining the min-heap property.
   * @param {ListNode} node - The ListNode to be inserted.
   */
  insert(node) {
    if (!node) return; // Ignore null nodes
    this.#heap.push(node);
    this.#bubbleUp(this.#heap.length - 1);
  }

  /**
   * Extract (remove) the ListNode with the smallest value.
   * @returns {ListNode | null} - The extracted ListNode, or null if the heap is empty.
   */
  extractMin() {
    if (this.isEmpty()) return null;

    this.#swap(0, this.#heap.length - 1);
    const extracted = this.#heap.pop();
    this.#bubbleDown(0);
    return extracted; // Return the whole ListNode, not just its value
  }

  /**
   * Peek at the smallest ListNode without removing it.
   * @returns {ListNode | null} - The smallest ListNode, or null if the heap is empty.
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

  // Private Methods

  #swap(idx1, idx2) {
    [this.#heap[idx1], this.#heap[idx2]] = [this.#heap[idx2], this.#heap[idx1]];
  }

  #getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  #getChildrenIndices(idx) {
    return [2 * idx + 1, 2 * idx + 2];
  }

  /**
   * Bubble up to maintain the min-heap property.
   * @param {number} childIdx - Index of the newly inserted element.
   */
  #bubbleUp(childIdx) {
    while (childIdx > 0) {
      let parentIdx = this.#getParentIdx(childIdx);

      // Compare `ListNode.val`
      if (this.#heap[parentIdx].val <= this.#heap[childIdx].val) break;

      this.#swap(parentIdx, childIdx);
      childIdx = parentIdx;
    }
  }

  /**
   * Bubble down to maintain the min-heap property.
   * @param {number} parentIdx - Index of the root element after extraction.
   */
  #bubbleDown(parentIdx) {
    while (parentIdx < this.#heap.length) {
      let [leftChildIdx, rightChildIdx] = this.#getChildrenIndices(parentIdx);

      let leftChildNode = leftChildIdx < this.#heap.length ? this.#heap[leftChildIdx] : null;
      let rightChildNode = rightChildIdx < this.#heap.length ? this.#heap[rightChildIdx] : null;

      // Determine the smallest among parent and children
      let smallestIdx = parentIdx;

      if (leftChildNode && leftChildNode.val < this.#heap[smallestIdx].val) {
        smallestIdx = leftChildIdx;
      }
      if (rightChildNode && rightChildNode.val < this.#heap[smallestIdx].val) {
        smallestIdx = rightChildIdx;
      }

      // If parent is already the smallest, stop
      if (smallestIdx === parentIdx) break;

      this.#swap(parentIdx, smallestIdx);
      parentIdx = smallestIdx;
    }
  }
}
