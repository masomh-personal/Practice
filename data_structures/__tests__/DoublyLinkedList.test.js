import { DoublyLinkedList } from '../DoublyLinkedList.js';

describe('DoublyLinkedList', () => {
  let list;

  // Initialize a new list before each test
  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  describe('append', () => {
    it('should add a node to the tail of the list', () => {
      list.append(10);
      expect(list.tail.value).toBe(10);
      expect(list.head.value).toBe(10); // When there's one node, head and tail should be the same
      expect(list.getSize()).toBe(1);
    });

    it('should correctly chain nodes when appending multiple nodes', () => {
      list.append(10);
      list.append(20);
      expect(list.tail.value).toBe(20);
      expect(list.tail.prev.value).toBe(10);
      expect(list.head.value).toBe(10);
      expect(list.head.next.value).toBe(20);
      expect(list.getSize()).toBe(2);
    });
  });

  describe('prepend', () => {
    it('should add a node to the head of the list', () => {
      list.prepend(10);
      expect(list.head.value).toBe(10);
      expect(list.tail.value).toBe(10); // When there's one node, head and tail should be the same
      expect(list.getSize()).toBe(1);
    });

    it('should correctly chain nodes when prepending multiple nodes', () => {
      list.prepend(10);
      list.prepend(20);
      expect(list.head.value).toBe(20);
      expect(list.head.next.value).toBe(10);
      expect(list.tail.value).toBe(10);
      expect(list.tail.prev.value).toBe(20);
      expect(list.getSize()).toBe(2);
    });
  });

  describe('peekHead', () => {
    it('should return the value of the head node', () => {
      list.append(10);
      expect(list.peekHead()).toBe(10);
    });

    it('should throw an error if the list is empty', () => {
      expect(() => list.peekHead()).toThrowError('List is empty, nothing to peek!');
    });
  });

  describe('peekTail', () => {
    it('should return the value of the tail node', () => {
      list.append(10);
      expect(list.peekTail()).toBe(10);
    });

    it('should throw an error if the list is empty', () => {
      expect(() => list.peekTail()).toThrowError('List is empty, nothing to peek!');
    });
  });

  describe('removeTail', () => {
    it('should remove the tail node and return its value', () => {
      list.append(10);
      list.append(20);
      const removedValue = list.removeTail();
      expect(removedValue).toBe(20);
      expect(list.tail.value).toBe(10);
      expect(list.getSize()).toBe(1);
    });

    it('should throw an error when trying to remove from an empty list', () => {
      expect(() => list.removeTail()).toThrowError('List is empty, nothing to remove!');
    });

    it('should set head and tail to null when removing the last node', () => {
      list.append(10);
      list.removeTail();
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.getSize()).toBe(0);
    });
  });

  describe('removeHead', () => {
    it('should remove the head node and return its value', () => {
      list.append(10);
      list.append(20);
      const removedValue = list.removeHead();
      expect(removedValue).toBe(10);
      expect(list.head.value).toBe(20);
      expect(list.getSize()).toBe(1);
    });

    it('should throw an error when trying to remove from an empty list', () => {
      expect(() => list.removeHead()).toThrowError('List is empty, nothing to remove!');
    });

    it('should set head and tail to null when removing the last node', () => {
      list.append(10);
      list.removeHead();
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.getSize()).toBe(0);
    });
  });

  describe('removeByValue', () => {
    it('should remove the node with the given value', () => {
      list.append(10);
      list.append(20);
      list.append(30);
      const isRemoved = list.removeByValue(20);
      expect(isRemoved).toBe(true);
      expect(list.find(20)).toBe(null); // Node with value 20 should be removed
      expect(list.getSize()).toBe(2);
    });

    it('should return false if the value is not found', () => {
      list.append(10);
      list.append(20);
      const isRemoved = list.removeByValue(30); // Value 30 doesn't exist
      expect(isRemoved).toBe(false);
    });

    it('should handle removing the head or tail when it matches the value', () => {
      list.append(10);
      list.append(20);
      list.append(30);

      // Remove head
      expect(list.removeByValue(10)).toBe(true);
      expect(list.head.value).toBe(20);

      // Remove tail
      expect(list.removeByValue(30)).toBe(true);
      expect(list.tail.value).toBe(20);
    });
  });

  describe('find', () => {
    it('should return the node with the given value', () => {
      list.append(10);
      list.append(20);
      const foundNode = list.find(20);
      expect(foundNode.value).toBe(20);
    });

    it('should return null if the value is not found', () => {
      list.append(10);
      const foundNode = list.find(20); // Value 20 doesn't exist
      expect(foundNode).toBe(null);
    });
  });

  describe('isEmpty', () => {
    it('should return true for an empty list', () => {
      expect(list.isEmpty()).toBe(true);
    });

    it('should return false for a non-empty list', () => {
      list.append(10);
      expect(list.isEmpty()).toBe(false);
    });
  });

  describe('getSize', () => {
    it('should return the size of the list', () => {
      list.append(10);
      list.append(20);
      expect(list.getSize()).toBe(2);
    });

    it('should return 0 for an empty list', () => {
      expect(list.getSize()).toBe(0);
    });
  });

  describe('printList', () => {
    it('should print the values of the nodes in the list', () => {
      list.append(10);
      list.append(20);
      list.append(30);
      console.log = vi.fn(); // Mock console.log for testing output
      list.printList();
      expect(console.log).toHaveBeenCalledWith('10 <-> 20 <-> 30');
    });

    it('should print a message for an empty list', () => {
      console.log = vi.fn();
      list.printList();
      expect(console.log).toHaveBeenCalledWith('Empty Doubly Linked List!');
    });
  });
});
