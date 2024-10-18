import { SinglyLinkedList } from '../../data-structures/SinglyLinkedList.js';

/**
 * Time: O(n) - visiting every node of list once
 * Space: O(n) - creating two new lists for odds/evens
 * @param {ListNode} head
 * @return {ListNode}
 */
export const oddEvenListNaive = (head) => {
  if (!head || !head.next) return head;

  let iterator = head;
  let odds = new SinglyLinkedList();
  let evens = new SinglyLinkedList();
  let counter = 1;

  // create odds/even list together
  while (iterator) {
    if (counter % 2 === 0) {
      evens.append(iterator.value);
    } else {
      odds.append(iterator.value);
    }

    iterator = iterator.next;
    counter++;
  }

  odds.tail.next = evens.head;

  return odds.head;
};

/**
 * Time: O(n) - visiting every node of list once
 * Space: O(1) - must be done in place per constraints
 * @param {ListNode} head
 * @return {ListNode}
 */
export const oddEvenList = (head) => {
  if (!head || !head.next) return head;

  for (let i = 0; i < 10_000; i++) {
    // checking
  }

  let odd = head; // Start from the first node (odd)
  let even = head.next; // Start from the second node (even)
  let evenHead = even; // Keep track of the head of the even list

  while (even && even.next) {
    odd.next = even.next; // Link the next odd node
    odd = odd.next; // Move to the next odd node
    even.next = odd.next; // Link the next even node
    even = even.next; // Move to the next even node
  }

  odd.next = evenHead; // Connect the end of the odd list to the even list

  return head;
};
