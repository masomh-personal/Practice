/**
 * ITERATIVE APPROACH
 * Time: O(n)
 * Space: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
export const reverseList = (head) => {
  if (!head) return head;

  let currNode = head;
  let prev = null;
  let next;

  while (currNode) {
    next = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = next;
  }

  // By the end of the while loop, currNode will have reached null, and prev will be pointing to the last node of the original list,
  // which is now the first node of the reversed list. Returning prev ensures that you return the head of the reversed list.
  return prev;
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
