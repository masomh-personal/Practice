export default class StringBuilder {
  // Private array to store string parts
  #strings;

  // Constructor to initialize the StringBuilder with an optional initial value
  constructor(initialValue = '') {
    // If initialValue is provided, initialize with it; otherwise, start with an empty array
    this.#strings = initialValue ? [initialValue] : [];
  }

  // Append a new value to the end of the string
  append(value) {
    this.#strings.push(value); // Add the value to the array
    return this; // Return 'this' to enable method chaining
  }

  // Prepend a new value to the beginning of the string
  prepend(value) {
    this.#strings.unshift(value); // Insert the value at the start of the array
    return this; // Return 'this' to enable method chaining
  }

  // Convert the accumulated string parts to a single string
  printString(delimeter = '') {
    return this.#strings.join(delimeter); // Join the array elements into a single string
  }

  // Clear the string builder by resetting the internal array
  clear() {
    this.#strings = []; // Empty the array
    return this; // Return 'this' for chaining
  }

  // Get the total length of the accumulated string
  length() {
    return this.printString().length; // Convert to string and return its length
  }
}
