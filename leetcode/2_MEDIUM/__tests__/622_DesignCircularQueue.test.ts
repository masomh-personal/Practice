// Import both implementations
import { MyCircularQueue as SimpleCircularQueue } from '../622_DesignCircularQueueV1';
import { MyCircularQueueV2 as OptimizedCircularQueue } from '../622_DesignCircularQueueV2';

// Function to run all tests for a given implementation
function runCircularQueueTests(
  QueueImplementation: typeof SimpleCircularQueue | typeof OptimizedCircularQueue,
  implementationName: string
) {
  describe(`${implementationName}`, () => {
    let queue: InstanceType<typeof QueueImplementation>;

    describe('Initialization', () => {
      beforeEach(() => {
        queue = new QueueImplementation(3);
      });

      it('should create a queue with the specified capacity', () => {
        expect(queue).toBeDefined();
        expect(queue.isEmpty()).toBe(true);
        expect(queue.isFull()).toBe(false);
      });

      it('should handle zero or negative capacity gracefully', () => {
        expect(() => new QueueImplementation(0)).toThrow();
        expect(() => new QueueImplementation(-1)).toThrow();
      });
    });

    describe('Basic Operations', () => {
      beforeEach(() => {
        queue = new QueueImplementation(3);
      });

      it('should enqueue elements correctly', () => {
        expect(queue.enQueue(1)).toBe(true);
        expect(queue.isEmpty()).toBe(false);
        expect(queue.Front()).toBe(1);
        expect(queue.Rear()).toBe(1);

        expect(queue.enQueue(2)).toBe(true);
        expect(queue.Rear()).toBe(2);

        expect(queue.enQueue(3)).toBe(true);
        expect(queue.Rear()).toBe(3);
        expect(queue.isFull()).toBe(true);
      });

      it('should dequeue elements correctly', () => {
        queue.enQueue(1);
        queue.enQueue(2);
        queue.enQueue(3);

        expect(queue.deQueue()).toBe(true);
        expect(queue.Front()).toBe(2);
        expect(queue.isFull()).toBe(false);

        expect(queue.deQueue()).toBe(true);
        expect(queue.Front()).toBe(3);
        expect(queue.Rear()).toBe(3);

        expect(queue.deQueue()).toBe(true);
        expect(queue.isEmpty()).toBe(true);
      });

      it('should report front and rear values correctly', () => {
        // Empty queue should return -1 for Front and Rear
        expect(queue.Front()).toBe(-1);
        expect(queue.Rear()).toBe(-1);

        queue.enQueue(5);
        expect(queue.Front()).toBe(5);
        expect(queue.Rear()).toBe(5);

        queue.enQueue(10);
        expect(queue.Front()).toBe(5);
        expect(queue.Rear()).toBe(10);
      });
    });

    describe('Edge Cases', () => {
      it('should handle enqueue on a full queue', () => {
        queue = new QueueImplementation(2);

        queue.enQueue(1);
        queue.enQueue(2);
        expect(queue.isFull()).toBe(true);

        // Attempting to enqueue should return false
        expect(queue.enQueue(3)).toBe(false);

        // Queue state should remain unchanged
        expect(queue.Front()).toBe(1);
        expect(queue.Rear()).toBe(2);
      });

      it('should handle dequeue on an empty queue', () => {
        queue = new QueueImplementation(2);

        expect(queue.isEmpty()).toBe(true);
        expect(queue.deQueue()).toBe(false);

        // After failed dequeue, queue should still be empty
        expect(queue.isEmpty()).toBe(true);
      });

      it('should maintain the circular nature of the queue', () => {
        queue = new QueueImplementation(3);

        // Fill the queue
        queue.enQueue(1);
        queue.enQueue(2);
        queue.enQueue(3);

        // Remove two elements
        queue.deQueue();
        queue.deQueue();

        // Add two more elements (should wrap around)
        queue.enQueue(4);
        queue.enQueue(5);

        // Now the queue should be [3,4,5]
        expect(queue.Front()).toBe(3);
        expect(queue.Rear()).toBe(5);
      });
    });

    describe('Complex Operations', () => {
      it('should handle a sequence of operations correctly', () => {
        queue = new QueueImplementation(3);

        expect(queue.enQueue(1)).toBe(true);
        expect(queue.enQueue(2)).toBe(true);
        expect(queue.enQueue(3)).toBe(true);
        expect(queue.enQueue(4)).toBe(false);

        expect(queue.Rear()).toBe(3);
        expect(queue.isFull()).toBe(true);

        expect(queue.deQueue()).toBe(true);
        expect(queue.enQueue(4)).toBe(true);
        expect(queue.Rear()).toBe(4);

        expect(queue.deQueue()).toBe(true);
        expect(queue.deQueue()).toBe(true);
        expect(queue.deQueue()).toBe(true);
        expect(queue.deQueue()).toBe(false);

        expect(queue.isEmpty()).toBe(true);
      });

      it('should handle the LeetCode example case', () => {
        queue = new QueueImplementation(3);

        expect(queue.enQueue(1)).toBe(true);
        expect(queue.enQueue(2)).toBe(true);
        expect(queue.enQueue(3)).toBe(true);
        expect(queue.enQueue(4)).toBe(false);

        expect(queue.Rear()).toBe(3);
        expect(queue.isFull()).toBe(true);

        expect(queue.deQueue()).toBe(true);
        expect(queue.enQueue(4)).toBe(true);
        expect(queue.Rear()).toBe(4);
      });
    });

    describe('Stress Testing', () => {
      it('should handle repeated enqueue/dequeue operations', () => {
        queue = new QueueImplementation(5);

        // Perform many enqueue/dequeue cycles
        for (let i = 0; i < 100; i++) {
          // Fill the queue
          for (let j = 0; j < 5; j++) {
            expect(queue.enQueue(j)).toBe(true);
          }
          expect(queue.isFull()).toBe(true);

          // Empty the queue
          for (let j = 0; j < 5; j++) {
            expect(queue.deQueue()).toBe(true);
          }
          expect(queue.isEmpty()).toBe(true);
        }
      });

      it('should handle capacity=1 queue correctly', () => {
        queue = new QueueImplementation(1);

        expect(queue.isEmpty()).toBe(true);
        expect(queue.isFull()).toBe(false);

        expect(queue.enQueue(42)).toBe(true);
        expect(queue.isEmpty()).toBe(false);
        expect(queue.isFull()).toBe(true);
        expect(queue.Front()).toBe(42);
        expect(queue.Rear()).toBe(42);

        expect(queue.deQueue()).toBe(true);
        expect(queue.isEmpty()).toBe(true);
        expect(queue.isFull()).toBe(false);
      });
    });
  });
}

// Main test suite
describe('LeetCode #622: Design Circular Queue', () => {
  // Run the same tests for both implementations
  runCircularQueueTests(SimpleCircularQueue, 'Simple Array Implementation');
  runCircularQueueTests(OptimizedCircularQueue, 'Optimized Circular Implementation');
});
