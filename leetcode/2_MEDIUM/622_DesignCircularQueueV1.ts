/**
 * Implementation of a Circular Queue using JavaScript Array methods
 *
 * This implementation uses standard JavaScript array operations (push/shift)
 * for simplicity and readability, but is not optimal for a circular queue.
 *
 * Time Complexity:
 * - enQueue: O(1) - Array push is amortized O(1)
 * - deQueue: O(n) - Array shift requires re-indexing all remaining elements
 * - Front: O(1) - Direct access to first element using at(0)
 * - Rear: O(1) - Direct access to last element using at(-1)
 * - isEmpty: O(1) - Direct length check
 * - isFull: O(1) - Direct length comparison
 *
 * Space Complexity:
 * - O(n) where n is the capacity of the queue
 *
 * Limitations:
 * - The shift() operation is inefficient (O(n)) as it requires moving all elements
 *   one position to the left every time an element is dequeued
 * - Does not truly implement the "circular" nature of a circular queue, as it
 *   doesn't reuse space at the beginning of the array after elements are dequeued
 * - The array can grow and shrink, which is not typical behavior for a true
 *   circular queue with fixed capacity
 */
export class MyCircularQueue {
  private queue: number[];
  private readonly maxCapacity: number;

  constructor(size: number) {
    // Let's gracefully handle incorrect size variable
    if (size <= 0) {
      throw new Error(`Provided size is invalid. Size must be greater than 0!`);
    }

    // NOTE: each element of the queue will be a positive number
    this.queue = [];
    this.maxCapacity = size;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    // if not at max capacity, push/append to end
    this.queue.push(value);
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    this.queue.shift();
    return true;
  }

  Front(): number {
    return this.queue.at(0) ?? -1;
  }

  Rear(): number {
    return this.queue.at(-1) ?? -1;
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  isFull(): boolean {
    return this.queue.length === this.maxCapacity;
  }
}
