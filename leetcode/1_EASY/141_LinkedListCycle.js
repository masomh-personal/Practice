/**
 * APPROACH: Floyd's Cycle Detection (slow/fast pointers)
 * Time Complexity: O(n)
 * - We iterate through the linked list once, visiting each node at most once.
 *
 * Space Complexity: O(1)
 * - Keeping track of two variables only: slow and fast
 *
 * @param {ListNode} head - The head node of the linked list.
 * @return {boolean} - Returns true if a cycle is detected, otherwise false.
 */
export const hasCycle = (head) => {
  // Edge case: empty list or single-node list without a cycle
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next; // Slow pointer moves one step
    fast = fast.next.next; // Fast pointer moves two steps

    // If slow and fast pointers meet, a cycle is detected
    if (fast === slow) return true;
  }

  // We iterated through entire loop and reached a null value, no cycle
  return false;
};

/**
 * APPROACH: visited check
 * Time Complexity: O(n)
 * - We iterate through the linked list once, visiting each node at most once.
 *
 * Space Complexity: O(n)
 * - We use a Set to store the references of nodes we have visited.
 *
 * @param {ListNode} head - The head node of the linked list.
 * @return {boolean} - Returns true if a cycle is detected, otherwise false.
 */
export const hasCycleNaive = (head) => {
  // Edge case: empty list or single-node list without a cycle
  if (!head || !head.next) return false;

  // Create a Set to track visited nodes (by reference)
  const visited = new Set();

  // Start iterating from the head node
  let curr = head;
  while (curr) {
    // If the current node is already in the Set, a cycle is detected
    if (visited.has(curr)) return true;

    // Add the current node to the Set
    visited.add(curr);

    // Move to the next node in the list
    curr = curr.next;
  }

  // If we reach the end of the list (null), there's no cycle
  return false;
};
