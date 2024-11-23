/**
 * ITERATIVE APPROACH
 * Reverse a singly linked list in place.
 *
 * Time: O(n) - Traverse each node exactly once
 * Space: O(1) - No extra data structures used
 * @param {ListNode} head - Head of the singly linked list
 * @return {ListNode} - New head of the reversed linked list
 */
export const reverseList = (head) => {
  if (!head) return head; // Edge case: empty list, return null immediately

  let currNode = head; // Start with the head of the list
  let prev = null; // `prev` initially points to null, as the reversed list starts empty
  let next; // Temporary variable to store the next node during iteration

  // Traverse the entire list
  while (currNode) {
    next = currNode.next; // Save the next node for the next iteration
    currNode.next = prev; // Reverse the current node's pointer to point to the previous node
    prev = currNode; // Move `prev` to the current node
    currNode = next; // Move `currNode` to the next node in the original list
  }

  // By the end of the while loop:
  // - `currNode` is null (end of the original list)
  // - `prev` is the last node of the original list, which is now the head of the reversed list

  return prev; // Return the new head of the reversed list
};

/**
 * RECURSIVE APPROACH
 * Time: O(n)
 * Space: O(n) due to recursive call stack
 * @param {ListNode} node
 * @return {ListNode}
 */
export const reverseListRecursive = (node) => {
  // Base case: if the list is empty or only one node, return it
  if (!node || node.next === null) return node;

  // Recursively reverse the rest of the list
  const reversed = reverseListRecursive(node.next);

  // Reverse the current node and its next node
  node.next.next = node;
  node.next = null; // Set the next of the current node to null to break the old link

  // Return the new head of the reversed list
  return reversed;
};
