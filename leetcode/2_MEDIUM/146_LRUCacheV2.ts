/**
 * LRU Cache implementation using JavaScript's Map to maintain insertion order.
 * This approach avoids using a Doubly Linked List while preserving O(1) time complexity.
 */
export class LRUCache {
  private cache: Map<number, number>;

  /**
   * @param capacity - Maximum number of items the cache can hold
   */
  constructor(private capacity: number) {
    this.cache = new Map();
  }

  /**
   * Retrieves the value associated with the key and updates its usage order.
   * @param key - Key to retrieve
   * @returns Value if key exists, otherwise -1
   */
  public get(key: number): number {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key)!;
    // Update usage by reinserting key to move it to the end (most recently used)
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  /**
   * Inserts or updates the key-value pair. Evicts least recently used item if needed.
   * @param key - Key to insert or update
   * @param value - Value associated with the key
   */
  public put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key); // Remove to update order
    } else if (this.cache.size >= this.capacity) {
      // Evict least recently used (first key inserted)
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey!);
    }

    // Insert as most recently used
    this.cache.set(key, value);
  }
}
