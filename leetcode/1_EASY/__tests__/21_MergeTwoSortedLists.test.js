import { mergeTwoListsNaive, mergeTwoLists } from '../21_MergeTwoSortedLists.js';

// Class definition for ListNode (used in tests)
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to convert array to linked list
function arrayToLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Common test cases for both implementations
const testCases = [
  {
    description: 'merge [1,2,4] and [1,3,4]',
    list1: [1, 2, 4],
    list2: [1, 3, 4],
    expected: [1, 1, 2, 3, 4, 4],
  },
  {
    description: 'both lists empty',
    list1: [],
    list2: [],
    expected: [],
  },
  {
    description: 'one empty list and one non-empty list',
    list1: [],
    list2: [0],
    expected: [0],
  },
  {
    description: 'one empty list and one non-empty list (INVERSE)',
    list1: [1],
    list2: [],
    expected: [1],
  },
  {
    description: 'lists with negative values',
    list1: [-10, -5, -3],
    list2: [-8, -4, -2],
    expected: [-10, -8, -5, -4, -3, -2],
  },
  {
    description: 'lists with duplicate values',
    list1: [1, 1, 1],
    list2: [1, 1, 1],
    expected: [1, 1, 1, 1, 1, 1],
  },
  {
    description: 'lists with different lengths',
    list1: [1, 2],
    list2: [1, 3, 4, 5],
    expected: [1, 1, 2, 3, 4, 5],
  },
  {
    description: 'lists with large ranges of values',
    list1: [-100, 0, 50],
    list2: [-50, 25, 100],
    expected: [-100, -50, 0, 25, 50, 100],
  },
];

// Test Suite for Naive Approach
describe('Merge Two Sorted Lists - Naive Approach', () => {
  testCases.forEach(({ description, list1, list2, expected }) => {
    it(`should ${description}`, () => {
      const head1 = arrayToLinkedList(list1);
      const head2 = arrayToLinkedList(list2);
      const result = mergeTwoListsNaive(head1, head2);
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});

// Test Suite for Optimized Approach
describe('Merge Two Sorted Lists - Optimized Approach', () => {
  testCases.forEach(({ description, list1, list2, expected }) => {
    it(`should ${description}`, () => {
      const head1 = arrayToLinkedList(list1);
      const head2 = arrayToLinkedList(list2);
      const result = mergeTwoLists(head1, head2);
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
