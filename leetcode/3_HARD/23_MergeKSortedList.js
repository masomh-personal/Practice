export class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinListNodeHeap23 {
  #heap = [];
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

/**
 * Approach: Optimized MinHeap (Priority Queue)
 *
 * Time: O(n log k)
 *  - `n` is the total number of nodes.
 *  - `log k` comes from inserting/extracting nodes in the heap (`O(log k)` per node).
 *
 * Space: O(k)
 *  - The heap only holds at most `k` nodes at any given time.
 *
 * @param {ListNode[]} lists - An array of k sorted linked lists.
 * @return {ListNode | null} - The head of the merged sorted linked list.
 */
export function mergeKLists(lists) {
  // Edge case: if lists is empty, return null (no lists to merge)
  if (lists.length === 0) return null;

  // Step 1: Initialize Min Heap
  // This heap will always store the smallest node from the k lists
  const heap = new MinListNodeHeap23();

  // Step 2: Insert the head node of each non-empty linked list into the heap
  for (const listHeadNode of lists) {
    if (listHeadNode) heap.insert(listHeadNode);
  }

  // Step 3: Create a dummy node to build the merged sorted list
  const dummy = new ListNode(-1); // Dummy node simplifies list construction
  let iterator = dummy;

  // Step 4: Process nodes in heap
  while (!heap.isEmpty()) {
    // Extract the smallest node from the heap (O(log k) operation)
    const smallestNode = heap.extractMin();

    // Append this node to the merged list
    iterator.next = smallestNode;
    iterator = iterator.next; // Move iterator forward

    // If the extracted node has a next node, insert it into the heap
    if (smallestNode.next) {
      heap.insert(smallestNode.next);
    }
  }

  // Step 5: Return the merged sorted list (dummy.next skips the initial placeholder)
  return dummy.next;
}

/**
 * **BAD! Naive Brute Force Approach**
 *
 * This approach merges k sorted linked lists by:
 * 1. Extracting all values into an array (`O(n)`)
 * 2. Sorting the array (`O(n log n)`)
 * 3. Reconstructing the sorted linked list (`O(n)`)
 *
 * **Why is this bad?**
 * - **Sorting dominates runtime**: Extracting nodes is `O(n)`, but sorting makes it `O(n log n)`.
 * - **Excessive space usage**: We store all values in an array (`O(n)`) instead of merging in-place.
 * - **Better alternative**: A **Min Heap (Priority Queue)** can merge `k` lists in **O(n log k)** time with `O(k)` space.
 *
 * @param {ListNode[]} lists - An array of k sorted linked lists
 * @return {ListNode | null} - The head of the merged sorted linked list
 */
export function mergeKListsNaive(lists) {
  // Edge case: if lists array is empty, return null (no lists to merge)
  if (lists.length === 0) return null;

  // Step 1: Extract all values from linked lists into an array
  const motherArr = lists.reduce((acc, listHead) => {
    let curr = listHead;
    while (curr) {
      acc.push(curr.val); // Store values into the array
      curr = curr.next;
    }
    return acc;
  }, []);

  // Step 2: Sort the collected values (O(n log n) time complexity)
  motherArr.sort((a, b) => a - b);

  // Step 3: Reconstruct a sorted linked list from sorted values
  const dummy = new ListNode(-1); // Dummy node to simplify list construction
  let iterator = dummy;

  for (const num of motherArr) {
    iterator.next = new ListNode(num); // Create new nodes with sorted values
    iterator = iterator.next;
  }

  return dummy.next; // Return merged sorted list
}
