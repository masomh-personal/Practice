import { MinListNodeHeap } from '../MinListNodeHeap.js';

/**
 * Helper function to create a ListNode.
 * @param {number} val - Value of the node.
 * @param {ListNode | null} next - Pointer to the next node.
 * @returns {ListNode}
 */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

describe('MinListNodeHeap', () => {
  let heap;

  beforeEach(() => {
    heap = new MinListNodeHeap();
  });

  describe('Basic Functionality', () => {
    it('should correctly insert and extract nodes in sorted order', () => {
      const nodes = [new ListNode(3), new ListNode(1), new ListNode(5), new ListNode(2)];
      nodes.forEach((node) => heap.insert(node));

      expect(heap.extractMin().val).toBe(1);
      expect(heap.extractMin().val).toBe(2);
      expect(heap.extractMin().val).toBe(3);
      expect(heap.extractMin().val).toBe(5);
      expect(heap.extractMin()).toBeNull();
    });

    it('should return the correct min value without removing it (peekMin)', () => {
      heap.insert(new ListNode(4));
      heap.insert(new ListNode(1));
      heap.insert(new ListNode(3));

      expect(heap.peekMin().val).toBe(1); // The smallest value remains at the root
      expect(heap.getSize()).toBe(3); // Heap size should remain unchanged
    });

    it('should handle extracting from an empty heap', () => {
      expect(heap.extractMin()).toBeNull();
    });

    it('should correctly update size after inserts and extracts', () => {
      heap.insert(new ListNode(10));
      heap.insert(new ListNode(20));
      heap.insert(new ListNode(5));

      expect(heap.getSize()).toBe(3);

      heap.extractMin(); // Removes 5
      expect(heap.getSize()).toBe(2);

      heap.extractMin(); // Removes 10
      heap.extractMin(); // Removes 20
      expect(heap.isEmpty()).toBe(true);
      expect(heap.getSize()).toBe(0);
    });

    it('should handle inserting duplicate values correctly', () => {
      heap.insert(new ListNode(2));
      heap.insert(new ListNode(2));
      heap.insert(new ListNode(2));

      expect(heap.extractMin().val).toBe(2);
      expect(heap.extractMin().val).toBe(2);
      expect(heap.extractMin().val).toBe(2);
      expect(heap.extractMin()).toBeNull();
    });

    it('should handle inserting a single node and extracting it', () => {
      heap.insert(new ListNode(42));
      expect(heap.extractMin().val).toBe(42);
      expect(heap.isEmpty()).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    it('should return null when peeking an empty heap', () => {
      expect(heap.peekMin()).toBeNull();
    });

    it('should maintain correct order when inserting nodes in descending order', () => {
      const nodes = [
        new ListNode(5),
        new ListNode(4),
        new ListNode(3),
        new ListNode(2),
        new ListNode(1),
      ];
      nodes.forEach((node) => heap.insert(node));

      expect(heap.extractMin().val).toBe(1);
      expect(heap.extractMin().val).toBe(2);
      expect(heap.extractMin().val).toBe(3);
      expect(heap.extractMin().val).toBe(4);
      expect(heap.extractMin().val).toBe(5);
    });

    it('should handle inserting a large number of nodes efficiently', () => {
      const numNodes = 10000;
      for (let i = numNodes; i > 0; i--) {
        heap.insert(new ListNode(i));
      }

      expect(heap.getSize()).toBe(numNodes);
      expect(heap.peekMin().val).toBe(1); // Smallest element should be at the top

      // Extract 100 elements and verify they are sorted
      let prevValue = heap.extractMin().val;
      for (let i = 1; i < 100; i++) {
        let currentValue = heap.extractMin().val;
        expect(currentValue).toBeGreaterThanOrEqual(prevValue);
        prevValue = currentValue;
      }
    });
  });
});
