/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const deleteMiddle = (head) => {
  // Edge case: If the list has only one node, return null
  if (!head.next) return null;

  let turtle = head;
  let prev = null;
  let hare = head;

  // Traverse the list with fast (hare) and slow (turtle) pointers
  while (hare && hare.next) {
    hare = hare.next.next;
    prev = turtle;
    turtle = turtle.next;
  }

  // Remove the middle node by skipping it
  prev.next = turtle.next;

  return head;
};
