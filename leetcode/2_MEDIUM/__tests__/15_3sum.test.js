import { threeSum, threeSumNaive } from '../15_3sum.js';

describe('Leetcode #15: 3Sum', () => {
  const implementations = [
    { name: 'Optimized Implementation', fn: threeSum },
    { name: 'Naive Implementation', fn: threeSumNaive },
  ];

  implementations.forEach(({ name, fn }) => {
    describe(`${name}`, () => {
      describe('Valid three-sum cases', () => {
        it('should return unique triplets that sum to zero', () => {
          const nums = [-1, 0, 1, 2, -1, -4];
          const result = fn(nums);
          const expected = [
            [-1, -1, 2],
            [-1, 0, 1],
          ];
          expect(result).toEqual(expect.arrayContaining(expected));
        });

        it('should return unique triplets when multiple solutions exist', () => {
          const nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
          const result = fn(nums);
          const expected = [
            [-4, -2, 6],
            [-4, 0, 4],
            [-4, 1, 3],
            [-4, 2, 2],
            [-2, -2, 4],
            [-2, 0, 2],
          ];
          expect(result).toEqual(expect.arrayContaining(expected));
        });
      });

      describe('Edge cases', () => {
        it('should return an empty array when no valid triplet exists and nums.length === 3', () => {
          const nums = [1, 2, 3];
          const result = fn(nums);
          expect(result).toEqual([]);
        });

        it('should return a valid triplet when nums.length === 3 and all zeroes', () => {
          const nums = [0, 0, 0];
          const result = fn(nums);
          expect(result).toEqual([[0, 0, 0]]);
        });

        it('should return a valid triplet when nums.length === 3 and sum is zero', () => {
          const nums = [-2, 3, -1];
          const result = fn(nums);
          expect(result.map((triplet) => [...triplet].sort((a, b) => a - b))).toEqual(
            expect.arrayContaining([[-2, -1, 3]])
          );
        });

        it('should return an empty array when no valid triplets exist', () => {
          const nums = [1, 2, 3, 4, 5];
          const result = fn(nums);
          expect(result).toEqual([]);
        });

        it('should return an empty array when all numbers are positive', () => {
          const nums = [1, 2, 3, 4, 5, 6];
          const result = fn(nums);
          expect(result).toEqual([]);
        });

        it('should return an empty array when all numbers are negative', () => {
          const nums = [-1, -2, -3, -4, -5, -6];
          const result = fn(nums);
          expect(result).toEqual([]);
        });
      });

      describe('Special cases', () => {
        it('should handle cases where the only solution consists of zeroes', () => {
          const nums = [0, 0, 0, 0];
          const result = fn(nums);
          expect(result).toEqual([[0, 0, 0]]);
        });

        it('should return correct results when duplicates exist', () => {
          const nums = [-2, 0, 0, 2, 2];
          const result = fn(nums);
          const expected = [[-2, 0, 2]];
          expect(result).toEqual(expect.arrayContaining(expected));
        });
      });
    });
  });

  // SKIPPING this because how crazy a difference this can be
  // For an array of size 30k (console output below)
  // ----- Performance Test -----
  // Naive threeSum Execution Time: 104.40s
  // Optimized threeSum Execution Time: 49.48ms
  // Optimized approach is 2109.86x faster.
  describe.skip('Performance Testing', () => {
    it('should run efficiently on a very large array', () => {
      console.log('----- Performance Test -----');

      const ARRAY_SIZE = 30_000;
      const largeArray = Array.from(
        { length: ARRAY_SIZE },
        () => Math.floor(Math.random() * 2001) - 1000
      );

      // Utility function to format execution time
      const formatTime = (timeMs) =>
        timeMs >= 1000 ? `${(timeMs / 1000).toFixed(2)}s` : `${timeMs.toFixed(2)}ms`;

      // Measure naive execution time
      const startNaive = performance.now();
      const naiveResult = threeSumNaive(largeArray);
      const naiveTime = performance.now() - startNaive;

      // Measure optimized execution time
      const startOptimized = performance.now();
      const optimizedResult = threeSum(largeArray);
      const optimizedTime = performance.now() - startOptimized;

      // Convert triplets into a Set of sorted string representations
      const normalizeToSet = (arr) =>
        new Set(
          arr.map((triplet) =>
            triplet
              .slice()
              .sort((a, b) => a - b)
              .join(',')
          )
        );

      const naiveSet = normalizeToSet(naiveResult);
      const optimizedSet = normalizeToSet(optimizedResult);

      // Log performance results with proper formatting
      console.log(`Naive threeSum Execution Time: ${formatTime(naiveTime)}`);
      console.log(`Optimized threeSum Execution Time: ${formatTime(optimizedTime)}`);
      console.log(`Optimized approach is ${(naiveTime / optimizedTime).toFixed(2)}x faster.`);

      // Log mismatch details if necessary
      if (naiveSet.size !== optimizedSet.size) {
        console.log('Mismatch in triplet counts');
        console.log('Naive result count:', naiveSet.size);
        console.log('Optimized result count:', optimizedSet.size);
      }

      expect(naiveSet).toEqual(optimizedSet);
    });
  });
});
