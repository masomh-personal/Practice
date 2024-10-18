export default class StringBuilder {
  // Private array to store string parts
  #stringArr;

  // Constructor to initialize the StringBuilder with an optional initial value
  constructor(initialValue = '') {
    // If initialValue is provided, initialize with it; otherwise, start with an empty array
    this.#stringArr = initialValue ? [initialValue] : [];
  }

  // Append a new value to the end of the string
  append(value) {
    this.#stringArr.push(value); // Add the value to the array
    return this; // Return 'this' to enable method chaining
  }

  // Prepend a new value to the beginning of the string
  prepend(value) {
    // NOTE: if we have a scenario where we have LOTS of calls to the prepend method, we'd use a queue (SLL)
    this.#stringArr.unshift(value); // Insert the value at the start of the array
    return this; // Return 'this' to enable method chaining
  }

  // Convert the accumulated string parts to a single string
  printString(separator = '') {
    return this.#stringArr.join(separator); // Join the array elements into a single string
  }

  // Clear the string builder by resetting the internal array
  clear() {
    this.#stringArr = []; // Empty the array
    return this; // Return 'this' for chaining
  }

  // Get the total length of the accumulated string
  length() {
    return this.printString().length; // Convert to string and return its length
  }
}
