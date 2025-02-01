import { RandomizedSet } from '../380_InsertDeleteGetRandom.js';

describe('Leetcode #380: Insert Delete GetRandom O(1) - RandomizedSet', () => {
  let randomSet;

  beforeEach(() => {
    randomSet = new RandomizedSet();
  });

  describe('insert()', () => {
    it('inserts a new element and returns true', () => {
      expect(randomSet.insert(1)).toBe(true);
    });

    it('returns false when inserting a duplicate element', () => {
      expect(randomSet.insert(1)).toBe(true);
      expect(randomSet.insert(1)).toBe(false);
    });
  });

  describe('remove()', () => {
    it('removes an existing element and returns true', () => {
      randomSet.insert(1);
      expect(randomSet.remove(1)).toBe(true);
    });

    it('returns false when removing a non-existent element', () => {
      expect(randomSet.remove(42)).toBe(false);
    });

    it('updates internal state correctly after removal', () => {
      randomSet.insert(1);
      randomSet.insert(2);
      randomSet.insert(3);
      expect(randomSet.remove(2)).toBe(true);
      expect(randomSet.insert(2)).toBe(true);
    });
  });

  describe('getRandom()', () => {
    it('returns one of the inserted elements', () => {
      randomSet.insert(10);
      randomSet.insert(20);
      randomSet.insert(30);
      expect(randomSet.arr).toContain(randomSet.getRandom());
    });

    it('returns the only element in a single-element set', () => {
      randomSet.insert(99);
      expect(randomSet.getRandom()).toBe(99);
    });

    it('provides a roughly uniform distribution over many calls', () => {
      const elements = [1, 2, 3, 4, 5];
      elements.forEach((el) => randomSet.insert(el));

      // Use a Map for frequency counting since keys are numbers.
      const freqMap = new Map();
      elements.forEach((el) => freqMap.set(el, 0));
      const iterations = 10_000;

      for (let i = 0; i < iterations; i++) {
        const randomVal = randomSet.getRandom();
        freqMap.set(randomVal, freqMap.get(randomVal) + 1);
      }

      elements.forEach((el) => {
        const count = freqMap.get(el);
        expect(count).toBeGreaterThan((iterations / 5) * 0.85);
        expect(count).toBeLessThan((iterations / 5) * 1.15);
      });
    });
  });

  describe('Performance', () => {
    it('handles a large number of insertions and removals efficiently', () => {
      randomSet = new RandomizedSet();
      const numOps = 100_000;
      const startTime = performance.now();

      // Perform a large number of insertions.
      for (let i = 0; i < numOps; i++) {
        randomSet.insert(i);
      }

      // Remove every even number.
      for (let i = 0; i < numOps; i += 2) {
        randomSet.remove(i);
      }

      const endTime = performance.now();
      console.log(
        `Performed ${numOps.toLocaleString()} insertions and ${(numOps / 2).toLocaleString()} removals in ${(endTime - startTime).toFixed(2)} ms`
      );

      // Verify that only odd numbers remain.
      expect(randomSet.arr.length).toBe(numOps / 2);
      randomSet.arr.forEach((val) => {
        expect(val % 2).toBe(1);
      });
    });
  });
});
