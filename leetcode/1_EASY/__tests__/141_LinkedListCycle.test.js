import { hasCycle, hasCycleNaive } from '../141_LinkedListCycle.js';

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Helper function to create a linked list with an optional cycle
function createLinkedList(values, pos) {
  if (values.length === 0) return null;

  const nodes = values.map((val) => new ListNode(val));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  if (pos >= 0) {
    nodes[nodes.length - 1].next = nodes[pos];
  }

  return nodes[0];
}

describe('Linked List Cycle Detection', () => {
  const implementations = [
    { name: 'Floyd’s Cycle Detection (O(1) Space)', func: hasCycle },
    { name: 'Visited Set Approach (O(n) Space)', func: hasCycleNaive },
  ];

  implementations.forEach(({ name, func }) => {
    describe(name, () => {
      it('should return true for a list with a cycle at pos 1', () => {
        const head = createLinkedList([3, 2, 0, -4], 1);
        const result = func(head);
        const expected = true;
        expect(result).toBe(expected);
      });

      it('should return true for a list with a cycle at pos 0', () => {
        const head = createLinkedList([1, 2], 0);
        const result = func(head);
        const expected = true;
        expect(result).toBe(expected);
      });

      it('should return false for a list with no cycle', () => {
        const head = createLinkedList([1], -1);
        const result = func(head);
        const expected = false;
        expect(result).toBe(expected);
      });

      it('should return false for an empty list', () => {
        const head = createLinkedList([], -1);
        const result = func(head);
        const expected = false;
        expect(result).toBe(expected);
      });

      it('should return false for a single node with no cycle', () => {
        const head = createLinkedList([1], -1);
        const result = func(head);
        const expected = false;
        expect(result).toBe(expected);
      });

      it('should return true for a single node that points to itself', () => {
        const head = createLinkedList([1], 0);
        const result = func(head);
        const expected = true;
        expect(result).toBe(expected);
      });

      it('should return false for a complex list with no cycle', () => {
        const head = createLinkedList(
          [
            -21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20, 14, 14, 2, 13,
            -24, 21, 23, -21, 5,
          ],
          -1
        );
        const result = func(head);
        const expected = false;
        expect(result).toBe(expected);
      });
    });
  });
});
