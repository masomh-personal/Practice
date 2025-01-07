// ListNode defined on LeetCode
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Approach: Optimized O(1) space solution - reverses the second half and uses two pointers to find max twin sum
 * Leetcode Score: 5ms / 93%
 * Time Complexity: O(n) - We traverse the list to find the middle, reverse half, and check twin sums
 * Space Complexity: O(1) - We modify the linked list in place without extra arrays
 *
 * @param {ListNode} head
 * @return {number}
 */
export function pairSum(head) {
  // Find the middle using slow & fast pointers
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next; // One step
    fast = fast.next.next; // Two steps
  }

  // Reverse the second half of the list
  let prev = null;
  let curr = slow; // Start at the midpoint

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // prev is now the head of the reversed second half
  let leftIter = head;
  let rightIter = prev;
  let longest = -Infinity;

  // Only iterate for the first half of the list
  while (rightIter) {
    const currSum = (leftIter.val ?? 0) + (rightIter.val ?? 0);
    longest = Math.max(longest, currSum);

    leftIter = leftIter.next;
    rightIter = rightIter.next;
  }

  return longest;
}

/**
 * Approach: Naive but effective – converts the linked list into an array and uses two pointers to find max twin sum
 * Leetcode Score: 15ms / 40%
 * Time Complexity: O(n) - We traverse the list once to build the array, then again with two pointers
 * Space Complexity: O(n) - We store all values in an array, which isn't the best for large inputs
 *
 * @param {ListNode} head - The head of the linked list
 * @return {number} - The maximum twin sum
 */
export function pairSumNaive(head) {
  const valArr = []; // Stores values of linked list in an array
  let curr = head;

  // Convert linked list to array
  while (curr) {
    valArr.push(curr.val);
    curr = curr.next;
  }

  let largest = -Infinity;
  let left = 0;
  let right = valArr.length - 1;

  // Two-pointer approach to calculate twin sums
  while (left < right) {
    const currSum = valArr[left] + valArr[right];
    largest = Math.max(largest, currSum); // Keep track of the max twin sum

    left++;
    right--;
  }

  return largest;
}
