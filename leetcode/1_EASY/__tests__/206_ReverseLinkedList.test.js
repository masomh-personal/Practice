import { reverseList, reverseListRecursive } from '../206_ReverseLinkedList.js';

// Leetcode implementation
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Utility function to create a linked list from an array
const createLinkedList = (arr) => {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
};

// Utility function to compare two linked lists
const isEqualLinkedList = (list1, list2) => {
  while (list1 !== null && list2 !== null) {
    if (list1.val !== list2.val) return false;
    list1 = list1.next;
    list2 = list2.next;
  }
  return list1 === null && list2 === null;
};

describe('reverseList Iterative', () => {
  it('should return the reversed list when the input list is [1, 2, 3, 4, 5]', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const expected = createLinkedList([5, 4, 3, 2, 1]);
    expect(isEqualLinkedList(reverseList(head), expected)).toBe(true);
  });

  it('should return the reversed list when the input list is [2, 1]', () => {
    const head = createLinkedList([2, 1]);
    const expected = createLinkedList([1, 2]);
    expect(isEqualLinkedList(reverseList(head), expected)).toBe(true);
  });

  it('should return an empty list when the input list is []', () => {
    const head = createLinkedList([]);
    const expected = createLinkedList([]);
    expect(isEqualLinkedList(reverseList(head), expected)).toBe(true);
  });
});

describe('reverseListRecursive', () => {
  it('should return the reversed list when the input list is [1, 2, 3, 4, 5]', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const expected = createLinkedList([5, 4, 3, 2, 1]);
    expect(isEqualLinkedList(reverseListRecursive(head), expected)).toBe(true);
  });

  it('should return the reversed list when the input list is [2, 1]', () => {
    const head = createLinkedList([2, 1]);
    const expected = createLinkedList([1, 2]);
    expect(isEqualLinkedList(reverseListRecursive(head), expected)).toBe(true);
  });

  it('should return an empty list when the input list is []', () => {
    const head = createLinkedList([]);
    const expected = createLinkedList([]);
    expect(isEqualLinkedList(reverseListRecursive(head), expected)).toBe(true);
  });
});
