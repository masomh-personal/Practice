import { deleteMiddle } from '../2095_DeleteMiddleNodeOfLinkedList.js'; // Adjust the path based on your file structure

// Leetcode definition of ListNode
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  if (!arr.length) return null;
  const head = new ListNode(arr[0]);
  let currentNode = head;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;
  }
  return head;
}

// Helper function to convert a linked list to an array for easier comparison in tests
function linkedListToArray(head) {
  const result = [];
  let currentNode = head;
  while (currentNode) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return result;
}

describe('deleteMiddle', () => {
  it('should delete the middle node in a list with an odd number of nodes', () => {
    const head = createLinkedList([1, 3, 4, 7, 1, 2, 6]);
    const result = deleteMiddle(head);
    expect(linkedListToArray(result)).toEqual([1, 3, 4, 1, 2, 6]);
  });

  it('should delete the middle node in a list with an even number of nodes', () => {
    const head = createLinkedList([1, 2, 3, 4]);
    const result = deleteMiddle(head);
    expect(linkedListToArray(result)).toEqual([1, 2, 4]);
  });

  it('should handle a list with two nodes and remove the second node', () => {
    const head = createLinkedList([2, 1]);
    const result = deleteMiddle(head);
    expect(linkedListToArray(result)).toEqual([2]);
  });

  it('should return null when the list has only one node', () => {
    const head = createLinkedList([1]);
    const result = deleteMiddle(head);
    expect(result).toBeNull(); // List should be empty after removing the only node
  });

  it('should handle a list with 105 nodes and remove the middle node', () => {
    const head = createLinkedList([...Array(105).keys()].map((i) => i + 1)); // List from 1 to 105

    const result = deleteMiddle(head);

    // Expected list is 1 to 105, but without the middle node (53)
    const expected = [...Array(105).keys()].map((i) => i + 1); // Create the list from 1 to 105
    expected.splice(52, 1); // Remove the 53rd element (middle node)

    expect(linkedListToArray(result)).toEqual(expected); // Remaining list should have 104 nodes
  });
});
