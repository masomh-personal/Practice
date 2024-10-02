import { SinglyLinkedList } from './SinglyLinkedList.js';

/**
 * Queue class using SinglyLinkedList as the underlying data structure
 */
export class Queue {
  #items = new SinglyLinkedList();

  /**
   * Add a new element to the end of the queue (enqueue operation)
   * @param {*} value - The value to be added to the queue
   */
  enqueue(value) {
    this.#items.append(value);
  }

  /**
   * Remove and return the first element from the queue (dequeue operation)
   * @returns {*} - The value of the removed element
   * @throws {Error} - If the queue is empty
   */
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty, nothing to dequeue!');
    }

    return this.#items.shift();
  }

  /**
   * Return the FIRST element without removing it (peek operation)
   * @returns {*} - The value of the front element
   * @throws {Error} - If the queue is empty
   */
  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty, nothing to peek!');
    }
    return this.#items.peekHead(); // Directly access the first element
  }

  /**
   * Check if the queue is empty
   * @returns {boolean} - True if the queue is empty, false otherwise
   */
  isEmpty() {
    return this.#items.getSize() === 0;
  }

  /**
   * Return the number of elements in the queue
   * @returns {number} - The size of the queue
   */
  getSize() {
    return this.#items.getSize(); // Access the linked list size via its method
  }

  /**
   * Print the queue for visualization/debugging
   */
  printQueue() {
    if (this.isEmpty()) {
      console.log('Empty Queue: nothing to print!');
    } else {
      console.log('FRONT:');
      this.#items.printList(); // Assuming SinglyLinkedList has a printList() method
      console.log(':BACK');
    }
  }
}
