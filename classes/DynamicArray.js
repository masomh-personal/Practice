export default class DynamicArray {
  #size;

  /**
   * Initialize an empty array with a given capacity.
   * @param {number} capacity
   */
  constructor(capacity) {
    if (capacity <= 0) throw Error('Capacity must be greater than 0!');
    this.dynamicArray = Array(capacity).fill(null); // Pre-allocate space with null values
    this.#size = 0; // Tracks the number of elements in the array
  }

  /**
   * Return the element at index i. Throws error if index is out of bounds.
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    if (i < 0 || i >= this.#size) throw Error('Index out of bounds');
    return this.dynamicArray.at(i);
  }

  /**
   * Set the element at index i to n. Throws error if index is out of bounds.
   * @param {number} i
   * @param {number} n
   */
  set(i, n) {
    if (i < 0 || i >= this.#size) throw Error('Index i out of bounds');
    this.dynamicArray[i] = n;
  }

  /**
   * Pushes the element n to the end of the array. Resizes if capacity is exceeded.
   * @param {number} n
   */
  pushback(n) {
    if (this.#size === this.getCapacity()) {
      this.resize(); // Double capacity if current size equals capacity
    }
    this.dynamicArray[this.#size] = n;
    this.#size++;
  }

  /**
   * Pops and returns the element from the end of the array. Throws error if array is empty.
   * @returns {number}
   */
  popback() {
    if (this.#size === 0) throw Error('Cannot pop from an empty array');
    const lastElement = this.dynamicArray[this.#size - 1];
    this.dynamicArray[this.#size - 1] = null; // Set to null for clarity
    this.#size--;
    return lastElement;
  }

  /**
   * Doubles the capacity of the array.
   */
  resize() {
    const oldArray = [...this.dynamicArray];
    this.dynamicArray = Array(oldArray.length * 2).fill(null); // New array with doubled capacity

    // Copy elements from old array
    for (let i = 0; i < this.#size; i++) {
      this.dynamicArray[i] = oldArray[i];
    }
  }

  /**
   * @returns {number} - The current size of the array (number of elements).
   */
  getSize() {
    return this.#size;
  }

  /**
   * @returns {number} - The current capacity of the array.
   */
  getCapacity() {
    return this.dynamicArray.length;
  }
}
