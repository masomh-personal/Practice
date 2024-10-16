/**
 * Node class to represent each element in the Doubly Linked List
 */
class DoublyLinkedNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

/**
 * DoublyLinkedList class implementation
 */
export class DoublyLinkedList {
  constructor() {
    this.head = null; // First node of the list
    this.tail = null; // Last node of the list
    this.size = 0; // Keeps track of the number of nodes
  }

  /**
   * Add a new value at the end of the list (tail)
   * @param {*} value - The value to be added
   */
  append(value) {
    const newNode = new DoublyLinkedNode(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
  }

  /**
   * Add a new value at the beginning of the list (head)
   * @param {*} value - The value to be added
   */
  prepend(value) {
    const newNode = new DoublyLinkedNode(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  /**
   * Returns the value of the first element (head) without removing it.
   * @returns {*} - The value of the first node (head)
   * @throws {Error} - If the list is empty
   */
  peekHead() {
    if (this.isEmpty()) {
      throw new Error('List is empty, nothing to peek!');
    }
    return this.head.value;
  }

  /**
   * Returns the value of the last element (tail) without removing it.
   * @returns {*} - The value of the last node (tail)
   * @throws {Error} - If the list is empty
   */
  peekTail() {
    if (this.isEmpty()) {
      throw new Error('List is empty, nothing to peek!');
    }
    return this.tail.value;
  }

  /**
   * Removes and returns the last element (tail) of the list.
   * @returns {*} - The value of the removed node (tail)
   * @throws {Error} - If the list is empty
   */
  removeTail() {
    if (this.isEmpty()) {
      throw new Error('List is empty, nothing to remove!');
    }

    const removedNode = this.tail;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return removedNode.value;
  }

  /**
   * Removes and returns the first element (head) of the list.
   * @returns {*} - The value of the removed node (head)
   * @throws {Error} - If the list is empty
   */
  removeHead() {
    if (this.isEmpty()) {
      throw new Error('List is empty, nothing to remove!');
    }

    const removedNode = this.head;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size--;
    return removedNode.value;
  }

  /**
   * Removes the first occurrence of the target value from the list.
   * @param {*} targetVal - The value to be removed
   * @returns {boolean} - True if the value is removed, false if not found
   * @throws {Error} - If the list is empty
   */
  removeByValue(targetVal) {
    if (this.isEmpty()) {
      throw new Error('Doubly Linked List is empty, nothing to remove!');
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === targetVal) {
        // Check if it's the head or tail and handle accordingly
        if (currentNode === this.head) {
          this.removeHead();
        } else if (currentNode === this.tail) {
          this.removeTail();
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
          this.size--;
        }
        return true;
      }
      currentNode = currentNode.next;
    }

    return false; // Value not found
  }

  /**
   * Finds and returns the first node with the target value.
   * @param {*} targetVal - The value to find
   * @returns {DoublyLinkedNode|null} - The found node or null if not found
   */
  find(targetVal) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === targetVal) {
        return currentNode; // Return the node object
      }
      currentNode = currentNode.next;
    }

    return null; // Value not found
  }

  /**
   * Returns the size of the linked list.
   * @returns {number} - The number of nodes in the list
   */
  getSize() {
    return this.size;
  }

  /**
   * Checks if the list is empty.
   * @returns {boolean} - True if the list is empty, false otherwise
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Prints the values in the list (for debugging or visualization).
   */
  printList() {
    if (this.isEmpty()) {
      console.log('Empty Doubly Linked List!');
      return;
    }

    const values = [];
    let currentNode = this.head;

    while (currentNode) {
      values.push(currentNode.value); // Add node value to the array
      currentNode = currentNode.next;
    }

    console.log(values.join(' <-> '));
  }
}
