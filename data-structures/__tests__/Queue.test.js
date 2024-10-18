import { Queue } from '../Queue.js';

describe('Queue Class', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('enqueue()', () => {
    it('should add an element to the queue', () => {
      queue.enqueue(10);
      expect(queue.getSize()).toBe(1);
      expect(queue.peek()).toBe(10); // The only element should be at the front
    });

    it('should add multiple elements to the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.getSize()).toBe(3);
      expect(queue.peek()).toBe(1); // The first element should still be at the front
    });
  });

  describe('dequeue()', () => {
    it('should remove and return the first element from the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      const dequeuedValue = queue.dequeue();
      expect(dequeuedValue).toBe(1);
      expect(queue.getSize()).toBe(1);
      expect(queue.peek()).toBe(2); // The new front should be the second element
    });

    it('should remove all elements from the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue(); // Removes 1
      queue.dequeue(); // Removes 2
      queue.dequeue(); // Removes 3
      expect(queue.isEmpty()).toBe(true);
      expect(queue.getSize()).toBe(0);
    });

    it('should throw an error when dequeuing from an empty queue', () => {
      expect(() => queue.dequeue()).toThrow('Queue is empty, nothing to dequeue!');
    });
  });

  describe('peek()', () => {
    it('should return the first element without removing it', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      const front = queue.peek();
      expect(front).toBe(1); // The first element should be at the front
      expect(queue.getSize()).toBe(2); // Size should remain the same
    });

    it('should throw an error when peeking into an empty queue', () => {
      expect(() => queue.peek()).toThrow('Queue is empty, nothing to peek!');
    });
  });

  describe('isEmpty()', () => {
    it('should return true for an empty queue', () => {
      expect(queue.isEmpty()).toBe(true);
    });

    it('should return false for a non-empty queue', () => {
      queue.enqueue(1);
      expect(queue.isEmpty()).toBe(false);
    });

    it('should return true after removing all elements', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.dequeue(); // Removes 1
      queue.dequeue(); // Removes 2
      expect(queue.isEmpty()).toBe(true);
    });
  });

  describe('getSize()', () => {
    it('should return 0 for an empty queue', () => {
      expect(queue.getSize()).toBe(0);
    });

    it('should return the correct size for a non-empty queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.getSize()).toBe(2);
    });

    it('should return the correct size after dequeuing elements', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.dequeue(); // Removes 1
      expect(queue.getSize()).toBe(1); // Only 2 should remain
    });
  });

  describe('printQueue()', () => {
    it('should print the correct queue contents', () => {
      console.log = vi.fn(); // Mock the console.log function
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.printQueue();
      expect(console.log).toHaveBeenCalledWith('FRONT:');
      // Assuming SinglyLinkedList prints '1 -> 2 -> 3'
      expect(console.log).toHaveBeenCalledWith('1 -> 2 -> 3');
      expect(console.log).toHaveBeenCalledWith(':BACK');
    });

    it('should print an empty message for an empty queue', () => {
      console.log = vi.fn(); // Mock the console.log function
      queue.printQueue();
      expect(console.log).toHaveBeenCalledWith('Empty Queue: nothing to print!');
    });
  });
});
