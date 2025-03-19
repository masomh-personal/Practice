/**
 * NOTE: This is a custom approach using DLL + Hashmap()
 * We would use this in languages that do not have built in collections
 * Example: Java (LinkedHashmap) / Python (OrderedDict) / JS (Map)
 */

/**
 * Node representing an entry in the Doubly Linked List.
 * Each node holds a key-value pair for cache tracking.
 */
class DoublyLinkedListNode_146 {
  key: number;
  value: number;
  prev: DoublyLinkedListNode_146 | null = null;
  next: DoublyLinkedListNode_146 | null = null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}

/**
 * Doubly Linked List tailored for LRU Cache recency tracking.
 * Head = Most Recently Used (MRU), Tail = Least Recently Used (LRU)
 */
class DoublyLinkedList_146 {
  head: DoublyLinkedListNode_146 | null = null;
  tail: DoublyLinkedListNode_146 | null = null;

  /**
   * Adds a node to the front (head) of the list.
   * @param node - Node to add
   */
  prepend(node: DoublyLinkedListNode_146): void {
    node.next = this.head;
    node.prev = null;

    if (this.head) {
      this.head.prev = node;
    } else {
      // List was empty; tail also becomes node
      this.tail = node;
    }

    this.head = node;
  }

  /**
   * Removes a node from its current position in the list.
   * @param node - Node to remove
   */
  remove(node: DoublyLinkedListNode_146): void {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      // Node is head
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      // Node is tail
      this.tail = node.prev;
    }

    node.prev = null;
    node.next = null;
  }

  /**
   * Moves an existing node to the front (head) of the list.
   * @param node - Node to move
   */
  moveToFront(node: DoublyLinkedListNode_146): void {
    this.remove(node);
    this.prepend(node);
  }

  /**
   * Removes and returns the tail node (least recently used).
   * @returns The removed tail node or null if list is empty
   */
  removeTail(): DoublyLinkedListNode_146 | null {
    if (!this.tail) return null;
    const oldTail = this.tail;
    this.remove(oldTail);
    return oldTail;
  }
}

/**
 * Implements an LRU (Least Recently Used) Cache using a combination
 * of a Map for O(1) key access and a Doubly Linked List for O(1) recency tracking.
 */
export class LRUCache {
  private cache: Map<number, DoublyLinkedListNode_146>;
  private list: DoublyLinkedList_146;

  /**
   * @param capacity - Maximum number of items the cache can hold
   */
  constructor(private capacity: number) {
    this.cache = new Map();
    this.list = new DoublyLinkedList_146();
  }

  /**
   * Retrieves the value associated with the given key, if present,
   * and updates its usage recency.
   *
   * @param key - The key to retrieve
   * @returns The value if key exists, otherwise -1
   */
  public get(key: number): number {
    const node = this.cache.get(key);
    if (!node) return -1;

    this.list.moveToFront(node);
    return node.value;
  }

  /**
   * Inserts or updates the key-value pair in the cache.
   * If the key exists, its value is updated and marked as recently used.
   * If the cache exceeds capacity, the least recently used item is evicted.
   *
   * @param key - The key to insert or update
   * @param value - The value associated with the key
   */
  public put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.value = value;
      this.list.moveToFront(node);
    } else {
      if (this.cache.size >= this.capacity) {
        const lruNode = this.list.removeTail();
        if (lruNode) {
          this.cache.delete(lruNode.key);
        }
      }

      const newNode = new DoublyLinkedListNode_146(key, value);
      this.cache.set(key, newNode);
      this.list.prepend(newNode);
    }
  }
}
