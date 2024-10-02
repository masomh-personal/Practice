import { SinglyLinkedList } from '../SinglyLinkedList.js';

describe('SinglyLinkedList Class', () => {
  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  describe('Initialization', () => {
    it('should start with an empty list', () => {
      expect(list.isEmpty()).toBe(true);
      expect(list.getSize()).toBe(0);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });
  });

  describe('append()', () => {
    it('should append a single element to the list', () => {
      list.append(10);
      expect(list.isEmpty()).toBe(false);
      expect(list.getSize()).toBe(1);
      expect(list.head.value).toBe(10);
      expect(list.tail.value).toBe(10);
    });

    it('should append multiple elements to the list', () => {
      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.getSize()).toBe(3);
      expect(list.head.value).toBe(1);
      expect(list.tail.value).toBe(3);
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);
      expect(list.tail.next).toBe(null);
    });
  });

  describe('prepend()', () => {
    it('should prepend a single element to an empty list', () => {
      list.prepend(5);
      expect(list.getSize()).toBe(1);
      expect(list.head.value).toBe(5);
      expect(list.tail.value).toBe(5);
    });

    it('should prepend multiple elements to the list', () => {
      list.append(1);
      list.prepend(0);
      list.prepend(-1);

      expect(list.getSize()).toBe(3);
      expect(list.head.value).toBe(-1);
      expect(list.head.next.value).toBe(0);
      expect(list.tail.value).toBe(1);
    });
  });

  describe('peekHead()', () => {
    it('should return the head element', () => {
      list.append(1);
      list.append(2);
      const peekedValue = list.peekHead();
      expect(peekedValue).toBe(1);
    });

    it('should throw an error when peeking into an empty list', () => {
      expect(() => list.peekHead()).toThrow('List is empty, nothing to peek!');
    });
  });

  describe('peekTail()', () => {
    it('should return the tail element', () => {
      list.append(1);
      list.append(2);
      const peekedValue = list.peekTail();
      expect(peekedValue).toBe(2);
    });

    it('should throw an error when peeking into an empty list', () => {
      expect(() => list.peekTail()).toThrow('List is empty, nothing to peek!');
    });
  });

  describe('shift()', () => {
    it('should remove the head element', () => {
      list.append(1);
      list.append(2);
      const removedValue = list.shift();
      expect(removedValue).toBe(1);
      expect(list.head.value).toBe(2);
      expect(list.getSize()).toBe(1);
    });

    it('should remove the only element and set head and tail to null', () => {
      list.append(1);
      const removedValue = list.shift();
      expect(removedValue).toBe(1);
      expect(list.isEmpty()).toBe(true);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });
  });

  describe('pop()', () => {
    it('should remove the last element', () => {
      list.append(1);
      list.append(2);
      const removedValue = list.pop();
      expect(removedValue).toBe(2);
      expect(list.tail.value).toBe(1);
      expect(list.getSize()).toBe(1);
    });

    it('should remove the only element and set head and tail to null', () => {
      list.append(1);
      const removedValue = list.pop();
      expect(removedValue).toBe(1);
      expect(list.isEmpty()).toBe(true);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });
  });

  describe('remove()', () => {
    it('should remove the head element', () => {
      list.append(1);
      list.append(2);
      const removed = list.remove(1);
      expect(removed).toBe(true);
      expect(list.head.value).toBe(2);
      expect(list.getSize()).toBe(1);
    });

    it('should remove a middle element', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      const removed = list.remove(2);
      expect(removed).toBe(true);
      expect(list.head.next.value).toBe(3);
      expect(list.getSize()).toBe(2);
    });

    it('should remove the tail element', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      const removed = list.remove(3);
      expect(removed).toBe(true);
      expect(list.tail.value).toBe(2);
      expect(list.getSize()).toBe(2);
    });

    it('should return false when trying to remove a non-existing element', () => {
      list.append(1);
      list.append(2);
      const removed = list.remove(5);
      expect(removed).toBe(false);
      expect(list.getSize()).toBe(2);
    });
  });

  describe('find()', () => {
    it('should return a node when the value exists in the list', () => {
      list.append(1);
      list.append(2);
      const node = list.find(2);
      expect(node).not.toBe(null);
      expect(node.value).toBe(2);

      // If node is the last one, its 'next' should be null
      if (node.next !== null) {
        expect(node.next).not.toBe(null);
      } else {
        expect(node.next).toBe(null); // Last node should have a null next
      }
    });

    it('should return null when the value does not exist in the list', () => {
      list.append(1);
      const node = list.find(5);
      expect(node).toBe(null);
    });
  });

  describe('getSize()', () => {
    it('should return the correct size of the list', () => {
      list.append(10);
      list.append(20);
      expect(list.getSize()).toBe(2);
      list.remove(10);
      expect(list.getSize()).toBe(1);
    });
  });

  describe('isEmpty()', () => {
    it('should return true for isEmpty on an empty list', () => {
      expect(list.isEmpty()).toBe(true);
    });

    it('should return false for isEmpty on a non-empty list', () => {
      list.append(1);
      expect(list.isEmpty()).toBe(false);
    });
  });

  describe('printList()', () => {
    it('should print the list elements as a string', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      console.log = vi.fn(); // Mock the console.log
      list.printList();
      expect(console.log).toHaveBeenCalledWith('1 -> 2 -> 3');
    });

    it('should print an empty message for an empty list', () => {
      console.log = vi.fn(); // Mock the console.log
      list.printList();
      expect(console.log).toHaveBeenCalledWith('Empty Singly Linked List!');
    });
  });
});
