import { MinHeap } from '../MinHeap.js';

describe('MinHeap', () => {
  // Used for all tests
  let heap;

  beforeEach(() => {
    // Initialize a new heap before each test
    heap = new MinHeap();
  });

  describe('insert', () => {
    it('should insert elements into the heap and maintain min-heap property', () => {
      heap.insert(10);
      heap.insert(20);
      heap.insert(5);
      heap.insert(30);

      // Expect the min element to be at the root
      expect(heap.peekMin()).toBe(5);
    });

    it('should maintain the correct size of the heap', () => {
      heap.insert(1);
      heap.insert(3);
      heap.insert(5);

      // Expect size to be 3
      expect(heap.getSize()).toBe(3);
    });
  });

  describe('extractMin', () => {
    it('should extract the minimum element from the heap', () => {
      heap.insert(10);
      heap.insert(50);
      heap.insert(20);

      // Expect 10 to be extracted first
      expect(heap.extractMin()).toBe(10);
      // Then 20, since it's now the min
      expect(heap.extractMin()).toBe(20);
    });

    it('should return null when extracting from an empty heap', () => {
      expect(heap.extractMin()).toBeNull();
    });

    it('should maintain heap property after multiple extractions', () => {
      heap.insert(10);
      heap.insert(40);
      heap.insert(20);
      heap.insert(30);
      heap.insert(5);

      // Extract min element, expect 5 first
      expect(heap.extractMin()).toBe(5);

      // After extracting, the new min should be 10
      expect(heap.peekMin()).toBe(10);

      // Further extraction
      expect(heap.extractMin()).toBe(10);
      expect(heap.peekMin()).toBe(20);
    });
  });

  describe('peekMin', () => {
    it('should return the minimum element without removing it', () => {
      heap.insert(15);
      heap.insert(25);
      heap.insert(10);

      // Min is 10, but it should not be removed
      expect(heap.peekMin()).toBe(10);
      expect(heap.getSize()).toBe(3);
    });

    it('should return null when peeking into an empty heap', () => {
      expect(heap.peekMin()).toBeNull();
    });
  });

  describe('getSize', () => {
    it('should return the correct size of the heap', () => {
      expect(heap.getSize()).toBe(0); // Initially empty

      heap.insert(1);
      heap.insert(2);
      expect(heap.getSize()).toBe(2); // Size after insertion
    });

    it('should decrease size after extracting elements', () => {
      heap.insert(100);
      heap.insert(200);

      expect(heap.getSize()).toBe(2); // Size before extraction

      heap.extractMin();
      expect(heap.getSize()).toBe(1); // Size after one extraction

      heap.extractMin();
      expect(heap.getSize()).toBe(0); // Size after all elements are extracted
    });
  });

  describe('isEmpty', () => {
    it('should return true when the heap is empty', () => {
      expect(heap.isEmpty()).toBe(true);
    });

    it('should return false when the heap is not empty', () => {
      heap.insert(50);
      expect(heap.isEmpty()).toBe(false);
    });
  });

  describe('heapify', () => {
    it('should convert an array into a valid min-heap', () => {
      const arr = [10, 5, 20, 15, 30];
      heap.heapify(arr);

      // Expect the min element to be at the root after heapify
      expect(heap.peekMin()).toBe(5);
    });

    it('should maintain heap property after extracting elements from a heapified array', () => {
      const arr = [25, 20, 30, 10, 5, 40, 15];
      heap.heapify(arr);

      // After heapify, the min value should be 5
      expect(heap.peekMin()).toBe(5);

      // Extract min elements one by one and ensure they are in ascending order
      const extracted = [];
      while (!heap.isEmpty()) {
        extracted.push(heap.extractMin());
      }

      // The extracted array should be sorted in ascending order
      expect(extracted).toEqual([5, 10, 15, 20, 25, 30, 40]);
    });
  });

  describe('heap property validation', () => {
    it('should maintain min-heap property after multiple insertions', () => {
      const values = [30, 10, 50, 20, 5, 40, 60];
      values.forEach((v) => heap.insert(v));

      // After all insertions, the min value should be at the root
      expect(heap.peekMin()).toBe(5);

      // Extract elements and ensure they are in ascending order
      const extracted = [];
      while (!heap.isEmpty()) {
        extracted.push(heap.extractMin());
      }

      expect(extracted).toEqual([5, 10, 20, 30, 40, 50, 60]);
    });

    it('should maintain min-heap property after multiple insertions and extractions', () => {
      heap.insert(60);
      heap.insert(40);
      heap.insert(80);
      heap.insert(30);
      heap.insert(90);

      expect(heap.extractMin()).toBe(30); // Extract the min element (30)
      expect(heap.peekMin()).toBe(40); // Next min element should be 40

      heap.insert(20);
      expect(heap.peekMin()).toBe(20); // Inserting 20 should make it the min

      expect(heap.extractMin()).toBe(20); // Extract the new min (20)
    });
  });
});
