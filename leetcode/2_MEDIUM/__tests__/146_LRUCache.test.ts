import { LRUCache as LRUCacheV1 } from '../146_LRUCache'; // Linked List + Map
import { LRUCache as LRUCacheV2 } from '../146_LRUCacheV2'; // Map-only

const cacheVariants = [
  { name: 'V1.0 (Linked List + Map)', CacheClass: LRUCacheV1 },
  { name: 'V2.0 (Map-only)', CacheClass: LRUCacheV2 },
];

describe('Leetcode #146: LRU Cache - All Versions', () => {
  cacheVariants.forEach(({ name, CacheClass }) => {
    describe(`${name}`, () => {
      describe('Basic Functionality', () => {
        it('should return -1 for a get operation on an empty cache', () => {
          const lru = new CacheClass(2);
          expect(lru.get(1)).toBe(-1);
        });

        it('should set and get values correctly', () => {
          const lru = new CacheClass(2);
          lru.put(1, 1);
          lru.put(2, 2);
          expect(lru.get(1)).toBe(1);
        });

        it('should evict least recently used item when capacity is exceeded', () => {
          const lru = new CacheClass(2);
          lru.put(1, 1);
          lru.put(2, 2);
          lru.put(3, 3); // evicts key 1
          expect(lru.get(1)).toBe(-1);
        });
      });

      describe('Order of Operations', () => {
        it('should update recency on get and maintain correct eviction order', () => {
          const lru = new CacheClass(2);
          lru.put(1, 1);
          lru.put(2, 2);
          lru.get(1); // key 1 becomes MRU
          lru.put(3, 3); // evicts key 2
          expect(lru.get(2)).toBe(-1);
        });

        it('should update value and recency when put is called with existing key', () => {
          const lru = new CacheClass(2);
          lru.put(1, 1);
          lru.put(2, 2);
          lru.put(2, 20); // update value
          expect(lru.get(2)).toBe(20);
        });

        it('should evict correct key after multiple accesses and puts', () => {
          const lru = new CacheClass(2);
          lru.put(2, 1);
          lru.put(1, 1);
          lru.put(2, 3); // update value of key 2
          lru.put(4, 1); // evicts key 1
          expect(lru.get(1)).toBe(-1);
          expect(lru.get(2)).toBe(3);
        });
      });

      describe('Edge Cases', () => {
        it('should handle single-element cache correctly', () => {
          const lru = new CacheClass(1);
          lru.put(1, 10);
          lru.put(2, 20); // evicts key 1
          expect(lru.get(1)).toBe(-1);
          expect(lru.get(2)).toBe(20);
        });

        it('should handle repeated puts and gets without errors', () => {
          const lru = new CacheClass(3);
          lru.put(1, 1);
          lru.put(2, 2);
          lru.put(3, 3);
          lru.get(1);
          lru.put(4, 4); // evicts key 2
          expect(lru.get(2)).toBe(-1);
        });
      });

      describe('Comprehensive Usage and Performance', () => {
        it('should maintain correct state under usage and perform efficiently', () => {
          const lru = new CacheClass(1_000);

          // Fill cache to capacity
          for (let i = 0; i < 1_000; i++) {
            lru.put(i, i * 2);
          }

          // Trigger eviction with 500 more puts
          for (let i = 1_000; i < 1_500; i++) {
            lru.put(i, i * 2);
          }

          const results = {
            key0: lru.get(0), // Expected -1 (evicted)
            key500: lru.get(500), // Expected 1_000 (still in cache)
            key999: lru.get(999), // Expected 1_998 (still in cache)
            key1_000: lru.get(1_000), // Expected 2_000 (inserted after eviction)
            key1_499: lru.get(1_499), // Expected 2_998 (most recent)
          };

          const expected = {
            key0: -1,
            key500: 1_000,
            key999: 1_998,
            key1_000: 2_000,
            key1_499: 2_998,
          };

          expect(results).toEqual(expected);
        });

        it('should perform efficiently under heavy load', () => {
          const lru = new CacheClass(10_000);
          const start = performance.now();

          for (let i = 0; i < 10_000; i++) {
            lru.put(i, i);
            lru.get(i);
          }

          const end = performance.now();
          const duration = end - start;
          console.log(`[${name}] LRU Cache Stress Test Duration: ${duration.toFixed(2)} ms`);
          expect(duration).toBeLessThan(1_000); // Fail if slower than 1s
        });
      });
    });
  });
});
