/**
 * Optimal implementation of a Circular Queue using fixed-size array with pointers
 *
 * NOTE: This modulo operation is what allows us to reuse the space at the beginning of the
 * array after we've dequeued elements, creating the "circular" behavior without having to
 * shift elements
 *
 * This implementation uses a fixed-size array with head and tail pointers
 * to achieve O(1) time complexity for all operations.
 *
 * Time Complexity:
 * - enQueue: O(1) - Direct access with index
 * - deQueue: O(1) - Just move the head pointer
 * - Front: O(1) - Direct access with head index
 * - Rear: O(1) - Direct access with tail index
 * - isEmpty: O(1) - Simple comparison
 * - isFull: O(1) - Simple size check
 *
 * Space Complexity:
 * - O(n) where n is the capacity of the queue
 */
export class MyCircularQueueV2 {
  private readonly data: (number | null)[];
  private head: number;
  private tail: number;
  private size: number;
  private readonly maxCapacity: number;

  /**
   * Initialize your data structure here. Set the size of the queue to be k.
   * @param {number} size - The capacity of the circular queue
   */
  constructor(size: number) {
    if (size <= 0) {
      throw new Error('Max capacity "size" must be positive');
    }

    this.data = new Array(size).fill(null);
    this.head = -1; // Head pointer (index of first element)
    this.tail = -1; // Tail pointer (index of last element)
    this.size = 0; // Current number of elements
    this.maxCapacity = size;
  }

  /**
   * Insert an element into the circular queue.
   * @param {number} value - The value to insert
   * @return {boolean} - Returns true if the operation is successful
   */
  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    // If empty, set head to 0
    if (this.isEmpty()) {
      this.head = 0;
    }

    // Move tail pointer and add the element
    this.tail = (this.tail + 1) % this.maxCapacity;
    this.data[this.tail] = value;
    this.size++;

    return true;
  }

  /**
   * Delete an element from the circular queue.
   * @return {boolean} - Returns true if the operation is successful
   */
  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    // Remove the element by setting it to null
    this.data[this.head] = null;
    this.size--;

    if (this.isEmpty()) {
      // Reset pointers if queue becomes empty
      this.head = -1;
      this.tail = -1;
    } else {
      // Move head pointer to next element
      this.head = (this.head + 1) % this.maxCapacity;
    }

    return true;
  }

  /**
   * Get the front item from the queue.
   * @return {number} - The front item, -1 if the queue is empty
   */
  Front(): number {
    if (this.isEmpty()) {
      return -1;
    }

    return this.data[this.head] as number;
  }

  /**
   * Get the last item from the queue.
   * @return {number} - The last item, -1 if the queue is empty
   */
  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }

    return this.data[this.tail] as number;
  }

  /**
   * Checks whether the circular queue is empty.
   * @return {boolean} - Returns true if the queue is empty
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Checks whether the circular queue is full.
   * @return {boolean} - Returns true if the queue is full
   */
  isFull(): boolean {
    return this.size === this.maxCapacity;
  }
}
