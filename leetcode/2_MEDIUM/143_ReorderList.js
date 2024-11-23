/**
 * APPROACH: Find mid-point, reverse second half, and merge
 * NOTE: Must be done in place with O(1) space
 *
 * Time: O(n) - Single traversal for each phase (find mid, reverse, merge)
 * Space: O(1) - No extra data structures used
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
export const reorderList = (head) => {
  if (!head || !head.next) return; // Edge case: empty list or single node, nothing to reorder

  // Step 1: Use two-pointer technique to find the midpoint of the list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next; // Move slow pointer by 1
    fast = fast.next.next; // Move fast pointer by 2
  }

  // After the loop, `slow` points to the midpoint of the list
  let mid = slow;

  // Step 2: Reverse the second half of the list starting from `mid.next`
  let reversedNewHead = null; // Eventually become the new head of the reversed half
  let curr = mid.next; // Start from the node after mid
  mid.next = null; // Disconnect the first half from the second half

  while (curr) {
    const next = curr.next; // Save the next node
    curr.next = reversedNewHead; // Reverse the pointer
    reversedNewHead = curr; // Move `prev` one step forward
    curr = next; // Move `curr` to the next node
  }

  // NOTE: At this point, `prev` is the head of the reversed second half
  // Step 3: Merge the two halves together
  let firstHalfStartingNode = head; // Pointer for the first half
  let secondHalfStartingNode = reversedNewHead; // Pointer for the reversed second half

  while (secondHalfStartingNode) {
    const temp1 = firstHalfStartingNode.next; // Save next node of the first half
    const temp2 = secondHalfStartingNode.next; // Save next node of the second half

    firstHalfStartingNode.next = secondHalfStartingNode; // Point current first node to current second node
    secondHalfStartingNode.next = temp1; // Point current second node to the next first node

    firstHalfStartingNode = temp1; // Move first half pointer forward
    secondHalfStartingNode = temp2; // Move second half pointer forward
  }
};
