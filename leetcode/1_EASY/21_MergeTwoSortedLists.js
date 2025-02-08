// NOTE: Leetcode already has this available, but wanted to create the class definition here for my use
export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Merge Two Sorted Lists (Optimized Approach)
 *
 * Time Complexity: O(n)
 * - Where n is the total number of nodes in both lists.
 *
 * Space Complexity: O(1)
 * - No additional memory is allocated, apart from a few pointers.
 *
 * @param {ListNode} list1 - Head of the first sorted linked list
 * @param {ListNode} list2 - Head of the second sorted linked list
 * @return {ListNode} - Head of the merged sorted linked list
 */
export function mergeTwoLists(list1, list2) {
  // Edge Case: If either list is null, return the non-null list
  if (!list1) return list2;
  if (!list2) return list1;

  // Create a dummy node to simplify pointer operations
  let dummy = new ListNode(-1);
  let curr = dummy;

  // Merge both lists in sorted order
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1; // Attach the smaller node
      list1 = list1.next; // Move to the next node in list1
    } else {
      curr.next = list2; // Attach the smaller node
      list2 = list2.next; // Move to the next node in list2
    }
    curr = curr.next; // Move the iterator forward
  }

  // Attach any remaining nodes from either list
  curr.next = list1 ?? list2;

  // Return the merged list, skipping the dummy node
  return dummy.next;
}

/**
 * Naive Approach to Merge Two Sorted Lists (Non-Mutating)
 *
 * Time Complexity: O(n log n)
 * - Iterating through all nodes takes O(n).
 * - Sorting the values takes O(n log n).
 *
 * Space Complexity: O(n)
 * - The `nodeValues` array stores all node values.
 * - A new linked list is created, using O(n) additional memory.
 *
 * @param {ListNode} list1 - Head of the first sorted linked list
 * @param {ListNode} list2 - Head of the second sorted linked list
 * @return {ListNode} - Head of the merged sorted linked list
 */
export function mergeTwoListsNaive(list1, list2) {
  // Handle edge cases where one or both lists are empty
  if (!list1 && !list2) return null; // Both lists are empty
  if (!list1) return list2; // Return second list as-is
  if (!list2) return list1; // Return first list as-is

  class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }

  // Initialize an array to store all node values
  const nodeValues = [];

  // Traverse the first list and add its values to the array
  let currNode = list1;
  while (currNode) {
    nodeValues.push(currNode.val);
    currNode = currNode.next;
  }

  // Traverse the second list and add its values to the array
  currNode = list2;
  while (currNode) {
    nodeValues.push(currNode.val);
    currNode = currNode.next;
  }

  // Sort the array of values in non-decreasing order
  nodeValues.sort((a, b) => a - b);

  // Create a new sorted linked list from the sorted values
  const dummy = new ListNode(); // Dummy node to simplify list construction
  let current = dummy;
  for (const val of nodeValues) {
    current.next = new ListNode(val); // Create a new node for each value
    current = current.next;
  }

  // Return the head of the new sorted linked list
  return dummy.next;
}
