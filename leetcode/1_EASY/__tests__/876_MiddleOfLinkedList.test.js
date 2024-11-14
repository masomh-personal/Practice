import { middleNode, middleNodeNaive } from '../876_MiddleOfLinkedList.js';

// Definition for singly-linked list (via Leetcode)
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let head = null;
  let current = null;
  arr.forEach((val) => {
    const newNode = new ListNode(val, null);
    if (!head) {
      head = newNode;
      current = head;
    } else {
      current.next = newNode;
      current = current.next;
    }
  });
  return head;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe('Middle of Linked List', () => {
  const testCases = [
    {
      input: [1, 2, 3, 4, 5],
      expected: [3, 4, 5],
      description: 'should return the middle node for an odd-length list',
    },
    {
      input: [1, 2, 3, 4, 5, 6],
      expected: [4, 5, 6],
      description: 'should return the second middle node for an even-length list',
    },
    {
      input: [1],
      expected: [1],
      description: 'should return the single node for a list with one node',
    },
    {
      input: [1, 2],
      expected: [2],
      description: 'should return the second node for a two-node list',
    },
    {
      input: [1, 2, 3],
      expected: [2, 3],
      description: 'should return the last two nodes for a three-node list',
    },
  ];

  describe('middleNode (optimized approach)', () => {
    testCases.forEach(({ input, expected, description }) => {
      it(description, () => {
        const head = createLinkedList(input);
        const result = middleNode(head);
        expect(linkedListToArray(result)).toEqual(expected);
      });
    });
  });

  describe('middleNodeNaive (array-based approach)', () => {
    testCases.forEach(({ input, expected, description }) => {
      it(description, () => {
        const head = createLinkedList(input);
        const result = middleNodeNaive(head);
        expect(linkedListToArray(result)).toEqual(expected);
      });
    });
  });
});
