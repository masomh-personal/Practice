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
});
