import { mergeKLists, mergeKListsNaive, ListNode } from '../23_MergeKSortedList.js';

/**
 * Helper function to create a linked list from an array.
 * @param {number[]} values - Array of values to convert into a linked list.
 * @returns {ListNode | null} - Head of the created linked list.
 */
function createLinkedList(values) {
  if (!values.length) return null;
  const dummy = new ListNode(-1);
  let current = dummy;
  for (const val of values) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

/**
 * Helper function to convert a linked list into an array for easier comparison.
 * @param {ListNode} head - Head of the linked list.
 * @returns {number[]} - Array representation of the linked list.
 */
function linkedListToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe('Leetcode #23: Merge k Sorted Lists', () => {
  const testCases = [
    {
      description: 'should merge multiple sorted linked lists into one sorted list',
      lists: [createLinkedList([1, 4, 5]), createLinkedList([1, 3, 4]), createLinkedList([2, 6])],
      expected: [1, 1, 2, 3, 4, 4, 5, 6],
    },
    {
      description: 'should return an empty list when given an empty array',
      lists: [],
      expected: [],
    },
    {
      description: 'should return an empty list when all lists are empty',
      lists: [null, null, null],
      expected: [],
    },
    {
      description: 'should handle a single non-empty list',
      lists: [createLinkedList([5])],
      expected: [5],
    },
    {
      description: 'should handle two lists with one being empty',
      lists: [createLinkedList([1, 2, 3]), null],
      expected: [1, 2, 3],
    },
    {
      description: 'should handle lists of varying lengths',
      lists: [createLinkedList([1]), createLinkedList([1, 3, 4]), createLinkedList([2, 6, 9, 12])],
      expected: [1, 1, 2, 3, 4, 6, 9, 12],
    },
    {
      description: 'should efficiently merge large lists with high node count',
      lists: [
        createLinkedList(Array.from({ length: 1_000 }, (_, i) => i * 2)), // Even numbers: 0, 2, 4, ..., 1998
        createLinkedList(Array.from({ length: 1_000 }, (_, i) => i * 2 + 1)), // Odd numbers: 1, 3, 5, ..., 1999
        createLinkedList(Array.from({ length: 500 }, (_, i) => i + 2000)), // Additional range: 2000-2499
      ],
      expected: Array.from({ length: 2500 }, (_, i) => i), // Merged: 0-2499 in order
    },
    {
      description: 'should efficiently merge very large lists with high node count',
      lists: [
        createLinkedList(Array.from({ length: 5_000 }, (_, i) => i * 2)), // Even numbers: 0, 2, 4, ..., 9998
        createLinkedList(Array.from({ length: 5_000 }, (_, i) => i * 2 + 1)), // Odd numbers: 1, 3, 5, ..., 9999
        createLinkedList(Array.from({ length: 10_000 }, (_, i) => 10_000 + i)), // Additional range: 10000-19999
      ],
      expected: Array.from(
        { length: 20_000 },
        (_, i) => i // Ensures correct ordering for last reversed range
      ),
    },
  ];

  describe('mergeKListsNaive', () => {
    testCases.forEach(({ description, lists, expected }) => {
      it(description, () => {
        const result = mergeKListsNaive(lists);
        expect(linkedListToArray(result)).toEqual(expected);
      });
    });
  });

  describe('mergeKLists (Optimized)', () => {
    testCases.forEach(({ description, lists, expected }) => {
      it(description, () => {
        const result = mergeKLists(lists);
        expect(linkedListToArray(result)).toEqual(expected);
      });
    });
  });

  // =================================================================================
  // SKIP: Extreme performance testing
  // LATEST TEST RESULTS (for 1.5m total nodes)
  // Naive: 127.656ms
  // Optimized: 12.295ms
  describe.skip('Extreme Performance Test for mergeKListsNaive & mergeKLists', () => {
    const LIST_SIZE = 5e5;
    const THIRD_START_POINT = LIST_SIZE * 2;
    const TOTAL_SIZE = LIST_SIZE * 3;

    it(`should efficiently merge enormous lists ${TOTAL_SIZE.toLocaleString()} total nodes and log performance`, () => {
      const lists = [
        createLinkedList(Array.from({ length: LIST_SIZE }, (_, i) => i * 2)),
        createLinkedList(Array.from({ length: LIST_SIZE }, (_, i) => i * 2 + 1)),
        createLinkedList(Array.from({ length: LIST_SIZE }, (_, i) => THIRD_START_POINT + i)),
      ];
      const expected = Array.from({ length: TOTAL_SIZE }, (_, i) => i);

      console.log('\n--- Extreme Performance Test ---');

      // Measure performance for naive approach
      console.time('Naive mergeKListsNaive');
      const naiveResult = mergeKListsNaive([...lists]); // Clone lists to avoid modification side effects
      console.timeEnd('Naive mergeKListsNaive');

      expect(linkedListToArray(naiveResult)).toEqual(expected);

      // Measure performance for optimized approach
      console.time('Optimized mergeKLists');
      const optimizedResult = mergeKLists([...lists]); // Clone lists to avoid modification side effects
      console.timeEnd('Optimized mergeKLists');

      expect(linkedListToArray(optimizedResult)).toEqual(expected);
    });
  });
});
