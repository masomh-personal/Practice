import { pairSum, pairSumNaive } from '../2130_MaximumTwinSumOfLinkedList.js';

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Helper function to create a linked list from an array
 * Returns the head of the linked list
 */
const createLinkedList = (arr) => {
  let dummy = new ListNode();
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
};

// Test cases
const testCases = [
  [[5, 4, 2, 1], 6],
  [[4, 2, 2, 3], 7],
  [[1, 100000], 100001],
  [[1, 2, 3, 4, 5, 6, 7, 8], 9],
  [[10, 20, 30, 40, 50, 60, 70, 80], 90],
];

describe('Leetcode #2130: Maximum Twin Sum of a Linked List', () => {
  describe('Optimized Implementation', () => {
    it.each(testCases)('pairSum(%j) should return %i', (arr, expected) => {
      const head = createLinkedList(arr);
      const result = pairSum(head);
      expect(result).toBe(expected);
    });
  });

  describe('Brute Force Implementation', () => {
    it.each(testCases)('pairSumNaive(%j) should return %i', (arr, expected) => {
      const head = createLinkedList(arr);
      const result = pairSumNaive(head);
      expect(result).toBe(expected);
    });
  });
});
