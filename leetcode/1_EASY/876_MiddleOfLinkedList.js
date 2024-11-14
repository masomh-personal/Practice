/**
 * Finds the middle node of a singly linked list.
 * If the list has an even number of nodes, it returns the second middle node.
 *
 * Time Complexity: O(n/2), which simplifies to O(n), since we traverse half the list.
 * Space Complexity: O(1), as we only use two pointers.
 *
 * @param {ListNode} head - The head of the linked list.
 * @return {ListNode} - The middle node of the linked list.
 */
export const middleNode = (head) => {
  // If there's only one node, it is the middle by default.
  if (!head.next) return head;

  // Initialize two pointers:
  // 'slow' will move one step at a time, 'fast' will move two steps.
  let tortoise = head; // 'slow'
  let hare = head; // 'fast'

  // Loop continues as long as 'fast' and 'fast.next' are not null.
  // This ensures that we stop when 'fast' reaches the end of the list.
  while (hare && hare.next) {
    // Move 'slow' one step ahead.
    tortoise = tortoise.next;

    // Move 'fast' two steps ahead.
    hare = hare.next.next;
  }

  // When the fast pointer reaches the end, 'slow' will be at the middle node.
  return tortoise;
};

/**
 * Finds the middle node of a singly linked list using an array to store nodes.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {ListNode} head - The head of the linked list.
 * @returns {ListNode} - The middle node of the linked list.
 */
export const middleNodeNaive = (head) => {
  // If there's only one node, it is the middle by default.
  if (!head.next) return head;

  // Array to store the nodes.
  const nodeArr = [];
  let curr = head;

  // Populate array with all nodes.
  while (curr) {
    nodeArr.push(curr);
    curr = curr.next;
  }

  // Calculate the middle index.
  const midIdx = Math.floor(nodeArr.length / 2);
  return nodeArr[midIdx];
};
