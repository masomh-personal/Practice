/**
 * APPROACH: Floyd's Cycle Detection (slow/fast pointers)
 * Time Complexity: O(n)
 * - We iterate through the linked list once, visiting each node at most once.
 *
 * Space Complexity: O(1)
 * - Keeping track of two pointers only: slow and fast
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
export const detectCycle = (head) => {
  // Edge case: empty list or single-node list without a cycle
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  // Detect if a cycle exists
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // Cycle detected: find the cycle's starting node
      let entry = head;

      while (entry !== slow) {
        entry = entry.next;
        slow = slow.next;
      }

      return entry; // The start of the cycle
    }
  }

  return null; // No cycle
};

/**
 * APPROACH: HashSet to Track Visited Nodes
 * Time Complexity: O(n)
 * - We iterate through the linked list once, visiting each node at most once.
 *
 * Space Complexity: O(n)
 * - We use a Set to store references of visited nodes, which grows linearly with the size of the list in the worst case.
 *
 * @param {ListNode} head - The head of the linked list
 * @return {ListNode|null} - Returns the node where the cycle begins, or null if there is no cycle
 */
export const detectCycleNaive = (head) => {
  // Edge case: if the list is empty or has only one node with no cycle, return null
  if (!head || !head.next) return null;

  // Create a Set to track visited nodes
  const visited = new Set();

  let curr = head;

  // Traverse the linked list
  while (curr) {
    // If the current node is already in the Set, we found the start of the cycle
    if (visited.has(curr)) {
      return curr; // Return the node where the cycle begins
    }

    // Otherwise, add the current node to the Set
    visited.add(curr);

    // Move to the next node
    curr = curr.next;
  }

  // If we reach the end of the list (null), there's no cycle
  return null;
};
