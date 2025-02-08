import { mergeTwoLists, mergeTwoListsNaive, ListNode } from '../21_MergeTwoSortedLists.js';

// Helper function to convert an array to a linked list
function arrayToLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Generalized function to run tests for both implementations
function runTestImplementation(implementationFn, name) {
  describe(`${name}`, () => {
    it('should merge [1,2,4] and [1,3,4] correctly', () => {
      const list1 = arrayToLinkedList([1, 2, 4]);
      const list2 = arrayToLinkedList([1, 3, 4]);
      const result = implementationFn(list1, list2);
      expect(linkedListToArray(result)).toEqual([1, 1, 2, 3, 4, 4]);
    });

    it('should return an empty list when both lists are empty', () => {
      const result = implementationFn(null, null);
      expect(linkedListToArray(result)).toEqual([]);
    });

    it('should return the non-empty list when merging an empty list with a non-empty list', () => {
      const list1 = arrayToLinkedList([]);
      const list2 = arrayToLinkedList([0]);
      const result = implementationFn(list1, list2);
      expect(linkedListToArray(result)).toEqual([0]);
    });

    it('should merge lists with negative values correctly', () => {
      const list1 = arrayToLinkedList([-10, -5, -3]);
      const list2 = arrayToLinkedList([-8, -4, -2]);
      const result = implementationFn(list1, list2);
      expect(linkedListToArray(result)).toEqual([-10, -8, -5, -4, -3, -2]);
    });

    it('should merge lists with duplicate values correctly', () => {
      const list1 = arrayToLinkedList([1, 1, 1]);
      const list2 = arrayToLinkedList([1, 1, 1]);
      const result = implementationFn(list1, list2);
      expect(linkedListToArray(result)).toEqual([1, 1, 1, 1, 1, 1]);
    });

    it('should merge lists with different lengths correctly', () => {
      const list1 = arrayToLinkedList([1, 2]);
      const list2 = arrayToLinkedList([1, 3, 4, 5]);
      const result = implementationFn(list1, list2);
      expect(linkedListToArray(result)).toEqual([1, 1, 2, 3, 4, 5]);
    });

    it('should merge lists with large ranges of values correctly', () => {
      const list1 = arrayToLinkedList([-100, 0, 50]);
      const list2 = arrayToLinkedList([-50, 25, 100]);
      const result = implementationFn(list1, list2);
      expect(linkedListToArray(result)).toEqual([-100, -50, 0, 25, 50, 100]);
    });

    it('should merge two very long sorted lists (50 nodes each)', () => {
      const list1 = arrayToLinkedList(Array.from({ length: 50 }, (_, i) => i * 2)); // Even numbers
      const list2 = arrayToLinkedList(Array.from({ length: 50 }, (_, i) => i * 2 + 1)); // Odd numbers
      const result = implementationFn(list1, list2);
      const expected = Array.from({ length: 100 }, (_, i) => i); // Merged sorted list [0,1,2,3,...,99]
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
}

// Run tests for both implementations
describe('Leetcode #21: Merge Two Sorted Lists', () => {
  runTestImplementation(mergeTwoLists, 'Optimized Approach');
  runTestImplementation(mergeTwoListsNaive, 'Naive Approach');
});
