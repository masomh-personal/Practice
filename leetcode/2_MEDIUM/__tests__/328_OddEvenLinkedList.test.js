import { oddEvenListNaive, oddEvenList } from '../328_OddEvenLinkedList.js';
import { SinglyLinkedList } from '../../../data-structures/SinglyLinkedList.js';

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  const list = new SinglyLinkedList();
  arr.forEach((value) => list.append(value));
  return list.head;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  return result;
}

describe('Leetcode 328 - Odd Even Linked List', () => {
  describe('oddEvenListNaive', () => {
    it('should return [1,3,5,2,4] for input [1,2,3,4,5]', () => {
      const head = createLinkedList([1, 2, 3, 4, 5]);
      const result = oddEvenListNaive(head);
      expect(linkedListToArray(result)).toEqual([1, 3, 5, 2, 4]);
    });

    it('should return [2,3,6,7,1,5,4] for input [2,1,3,5,6,4,7]', () => {
      const head = createLinkedList([2, 1, 3, 5, 6, 4, 7]);
      const result = oddEvenListNaive(head);
      expect(linkedListToArray(result)).toEqual([2, 3, 6, 7, 1, 5, 4]);
    });

    it('should return an empty array for an empty list', () => {
      const head = createLinkedList([]);
      const result = oddEvenListNaive(head);
      expect(linkedListToArray(result)).toEqual([]);
    });

    it('should return [1] for a single node list [1]', () => {
      const head = createLinkedList([1]);
      const result = oddEvenListNaive(head);
      expect(linkedListToArray(result)).toEqual([1]);
    });

    it('should return [1,2] for a two-node list [1, 2]', () => {
      const head = createLinkedList([1, 2]);
      const result = oddEvenListNaive(head);
      expect(linkedListToArray(result)).toEqual([1, 2]);
    });
  });

  describe('oddEvenList', () => {
    it('should return [1,3,5,2,4] for input [1,2,3,4,5]', () => {
      const head = createLinkedList([1, 2, 3, 4, 5]);
      const result = oddEvenList(head);
      expect(linkedListToArray(result)).toEqual([1, 3, 5, 2, 4]);
    });

    it('should return [2,3,6,7,1,5,4] for input [2,1,3,5,6,4,7]', () => {
      const head = createLinkedList([2, 1, 3, 5, 6, 4, 7]);
      const result = oddEvenList(head);
      expect(linkedListToArray(result)).toEqual([2, 3, 6, 7, 1, 5, 4]);
    });

    it('should return an empty array for an empty list', () => {
      const head = createLinkedList([]);
      const result = oddEvenList(head);
      expect(linkedListToArray(result)).toEqual([]);
    });

    it('should return [1] for a single node list [1]', () => {
      const head = createLinkedList([1]);
      const result = oddEvenList(head);
      expect(linkedListToArray(result)).toEqual([1]);
    });

    it('should return [1,2] for a two-node list [1, 2]', () => {
      const head = createLinkedList([1, 2]);
      const result = oddEvenList(head);
      expect(linkedListToArray(result)).toEqual([1, 2]);
    });

    it('should handle larger lists efficiently', () => {
      const largeInput = Array.from({ length: 10000 }, (_, i) => i + 1);
      const head = createLinkedList(largeInput);
      const result = oddEvenList(head);
      // Custom checks for the larger input, for example, the first and last elements
      const outputArray = linkedListToArray(result);
      expect(outputArray[0]).toBe(1);
      expect(outputArray[outputArray.length - 1]).toBe(10000);
    });
  });
});
