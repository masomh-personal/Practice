/**
 * Node class to represent each element in the linked list
 */
class SLLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * SinglyLinkedList class implementation
 */
export class SinglyLinkedList {
  constructor() {
    this.head = null; // First node of the list
    this.tail = null; // Last node of the list
    this.size = 0; // Keeps track of the number of nodes
  }

  /**
   * Add a new value at the end of the list
   * @param {*} value - The value to be added
   */
  append(value) {
    const newNode = new SLLNode(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  /**
   * Add a new value at the beginning of the list
   * @param {*} value - The value to be added
   */
  prepend(value) {
    const newNode = new SLLNode(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
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
   * Removes and returns the last element of the list.
   * @returns {*} - The value of the removed node (tail)
   * @throws {Error} - If the list is empty
   */
  pop() {
    if (this.size === 0) {
      throw new Error('List is empty, nothing to remove!');
    }

    let currentNode = this.head;
    let previousNode = null;

    // Traverse to the second-to-last node
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (previousNode) {
      previousNode.next = null;
      this.tail = previousNode;
    } else {
      // If there's only one node, reset head and tail to null
      this.head = null;
      this.tail = null;
    }

    this.size--;
    return currentNode.value;
  }

  /**
   * Removes and returns the first element of the list (head).
   * @returns {*} - The value of the removed node (head)
   * @throws {Error} - If the list is empty
   */
  shift() {
    if (this.size === 0) {
      throw new Error('List is empty, nothing to remove!');
    }

    const removedNode = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null; // If the list becomes empty after shift
    }

    this.size--;
    return removedNode.value;
  }

  /**
   * Remove the first occurrence of the value from the list
   * @param {*} targetVal - The value to be removed
   * @returns {boolean} - True if the value is removed, false if not found
   * @throws {Error} - If the list is empty
   */
  remove(targetVal) {
    if (this.size === 0) {
      throw new Error('Singly Linked List is empty, nothing to remove!');
    }

    let currentNode = this.head;
    let previousNode = null;

    // If the node to be removed is the head
    if (currentNode.value === targetVal) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null; // If the list is now empty
      }
      this.size--;
      return true;
    }

    while (currentNode) {
      if (currentNode.value === targetVal) {
        previousNode.next = currentNode.next;
        if (previousNode.next === null) {
          this.tail = previousNode; // Update tail if the last node is removed
        }
        this.size--;
        return true; // Value found and removed
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return false; // Value not found
  }

  /**
   * Find and return a node with a specific value
   * @param {*} targetVal - The value to find
   * @returns {SLLNode|null} - The found node or null if not found
   */
  find(targetVal) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === targetVal) {
        return currentNode; // Should return the node object
      }
      currentNode = currentNode.next;
    }

    return null; // Return null if the value is not found
  }

  /**
   * Get the size of the linked list
   * @returns {number} - The number of nodes in the list
   */
  getSize() {
    return this.size;
  }

  /**
   * Check if the list is empty
   * @returns {boolean} - True if empty, false otherwise
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Print the list (for debugging or visualization)
   * NOTE: prints the values of each node, and not the node class/object itself
   */
  printList() {
    if (this.size === 0) {
      console.log('Empty Singly Linked List!');
      return;
    }

    const values = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value); // Print node values instead of node objects
      currentNode = currentNode.next;
    }

    console.log(values.join(' -> '));
  }
}
