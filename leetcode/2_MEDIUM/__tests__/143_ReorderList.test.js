import { reorderList } from '../143_ReorderList.js';

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  const dummy = new ListNode();
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe('reorderList', () => {
  it('should reorder [1,2,3,4] to [1,4,2,3]', () => {
    const head = createLinkedList([1, 2, 3, 4]);
    reorderList(head);
    const result = linkedListToArray(head);
    const expected = [1, 4, 2, 3];
    expect(result).toEqual(expected);
  });

  it('should reorder [1,2,3,4,5] to [1,5,2,4,3]', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    reorderList(head);
    const result = linkedListToArray(head);
    const expected = [1, 5, 2, 4, 3];
    expect(result).toEqual(expected);
  });

  it('should handle a single node list [1]', () => {
    const head = createLinkedList([1]);
    reorderList(head);
    const result = linkedListToArray(head);
    const expected = [1];
    expect(result).toEqual(expected);
  });

  it('should handle a two-node list [1,2] to [1,2]', () => {
    const head = createLinkedList([1, 2]);
    reorderList(head);
    const result = linkedListToArray(head);
    const expected = [1, 2];
    expect(result).toEqual(expected);
  });

  it('should handle an empty list', () => {
    const head = createLinkedList([]);
    reorderList(head);
    const result = linkedListToArray(head);
    const expected = [];
    expect(result).toEqual(expected);
  });

  it('should handle a larger list [1,2,3,4,5,6] to [1,6,2,5,3,4]', () => {
    const head = createLinkedList([1, 2, 3, 4, 5, 6]);
    reorderList(head);
    const result = linkedListToArray(head);
    const expected = [1, 6, 2, 5, 3, 4];
    expect(result).toEqual(expected);
  });

  it('should handle a list with duplicate values [1,2,2,1] to [1,1,2,2]', () => {
    const head = createLinkedList([1, 2, 2, 1]);
    reorderList(head);
    const result = linkedListToArray(head);
    const expected = [1, 1, 2, 2];
    expect(result).toEqual(expected);
  });
});
