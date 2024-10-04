import { MaxHeap } from '../MaxHeap'; // Adjust the path as needed

describe('MaxHeap', () => {
  describe('insert', () => {
    it('should insert elements into the heap and maintain max-heap property', () => {
      const heap = new MaxHeap();
      heap.insert(10);
      heap.insert(20);
      heap.insert(5);
      heap.insert(30);

      // Expect the max element to be at the root
      expect(heap.peekMax()).toBe(30);
    });

    it('should maintain the correct size of the heap', () => {
      const heap = new MaxHeap();
      heap.insert(1);
      heap.insert(3);
      heap.insert(5);

      // Expect size to be 3
      expect(heap.getSize()).toBe(3);
    });
  });

  describe('extractMax', () => {
    it('should extract the maximum element from the heap', () => {
      const heap = new MaxHeap();
      heap.insert(10);
      heap.insert(50);
      heap.insert(20);

      // Expect 50 to be extracted first
      expect(heap.extractMax()).toBe(50);
      // Then 20, since it's now the max
      expect(heap.extractMax()).toBe(20);
    });

    it('should return null when extracting from an empty heap', () => {
      const heap = new MaxHeap();
      expect(heap.extractMax()).toBeNull();
    });

    it('should maintain heap property after multiple extractions', () => {
      const heap = new MaxHeap();
      heap.insert(10);
      heap.insert(40);
      heap.insert(20);
      heap.insert(30);
      heap.insert(5);

      // Extract max element, expect 40 first
      expect(heap.extractMax()).toBe(40);

      // After extracting, the new max should be 30
      expect(heap.peekMax()).toBe(30);

      // Further extraction
      expect(heap.extractMax()).toBe(30);
      expect(heap.peekMax()).toBe(20);
    });
  });

  describe('peekMax', () => {
    it('should return the maximum element without removing it', () => {
      const heap = new MaxHeap();
      heap.insert(15);
      heap.insert(25);
      heap.insert(10);

      // Max is 25, but it should not be removed
      expect(heap.peekMax()).toBe(25);
      expect(heap.getSize()).toBe(3);
    });

    it('should return null when peeking into an empty heap', () => {
      const heap = new MaxHeap();
      expect(heap.peekMax()).toBeNull();
    });
  });

  describe('getSize', () => {
    it('should return the correct size of the heap', () => {
      const heap = new MaxHeap();
      expect(heap.getSize()).toBe(0); // Initially empty

      heap.insert(1);
      heap.insert(2);
      expect(heap.getSize()).toBe(2); // Size after insertion
    });

    it('should decrease size after extracting elements', () => {
      const heap = new MaxHeap();
      heap.insert(100);
      heap.insert(200);

      expect(heap.getSize()).toBe(2); // Size before extraction

      heap.extractMax();
      expect(heap.getSize()).toBe(1); // Size after one extraction

      heap.extractMax();
      expect(heap.getSize()).toBe(0); // Size after all elements are extracted
    });
  });

  describe('isEmpty', () => {
    it('should return true when the heap is empty', () => {
      const heap = new MaxHeap();
      expect(heap.isEmpty()).toBe(true);
    });

    it('should return false when the heap is not empty', () => {
      const heap = new MaxHeap();
      heap.insert(50);
      expect(heap.isEmpty()).toBe(false);
    });
  });

  describe('heap property validation', () => {
    it('should maintain max-heap property after multiple insertions', () => {
      const heap = new MaxHeap();
      const values = [3, 10, 1, 100, 50, 30, 20];
      values.forEach((v) => heap.insert(v));

      // After all insertions, the max value should be at the root
      expect(heap.peekMax()).toBe(100);

      // Extract elements and ensure they are in descending order
      const extracted = [];
      while (!heap.isEmpty()) {
        extracted.push(heap.extractMax());
      }

      expect(extracted).toEqual([100, 50, 30, 20, 10, 3, 1]);
    });

    it('should maintain max-heap property after multiple insertions and extractions', () => {
      const heap = new MaxHeap();
      heap.insert(60);
      heap.insert(40);
      heap.insert(80);
      heap.insert(30);
      heap.insert(90);

      expect(heap.extractMax()).toBe(90); // Extract the max element (90)
      expect(heap.peekMax()).toBe(80); // Next max element should be 80

      heap.insert(100);
      expect(heap.peekMax()).toBe(100); // Inserting 100 should make it the max

      expect(heap.extractMax()).toBe(100); // Extract the new max (100)
    });
  });
});
