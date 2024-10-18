/**
 * Stack implementation using a dynamic array in JavaScript
 * Provides basic stack operations like push, pop, peek, size, empty check,
 * and includes utility methods for clearing and checking for a value.
 */
export class Stack {
  // Private field to store stack elements
  #values = [];

  /**
   * Pushes a single value onto the stack
   * @param {*} value - The value to be added to the top of the stack
   */
  push(value) {
    this.#values.push(value);
  }

  /**
   * Removes and returns the top element of the stack
   * Throws an error if the stack is empty
   * @returns {*} - The value popped from the top of the stack
   */
  pop() {
    if (this.isEmpty()) {
      throw Error('Stack is empty, nothing to pop!');
    }
    return this.#values.pop();
  }

  /**
   * Returns the top element of the stack without removing it
   * Throws an error if the stack is empty
   * @returns {*} - The top value of the stack
   */
  peek() {
    if (this.isEmpty()) {
      throw Error('Stack is empty, nothing to peek!');
    }
    return this.#values.at(-1);
  }

  /**
   * Returns the number of elements currently in the stack
   * @returns {number} - The size of the stack
   */
  getSize() {
    return this.#values.length;
  }

  /**
   * Checks if the stack is empty
   * @returns {boolean} - True if the stack is empty, false otherwise
   */
  isEmpty() {
    return this.#values.length === 0;
  }

  /**
   * Removes all elements from the stack
   */
  clear() {
    this.#values = [];
  }

  /**
   * Checks if the stack contains a specific value
   * @param {*} value - The value to search for in the stack
   * @returns {boolean} - True if the value exists, false otherwise
   */
  contains(value) {
    return this.#values.includes(value);
  }
}
