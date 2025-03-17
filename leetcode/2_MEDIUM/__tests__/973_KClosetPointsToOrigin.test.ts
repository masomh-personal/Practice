import { kClosest } from '../973_KClosetPointsToOrigin';

describe('Leetcode #973: K Closest Points to Origin', () => {
  describe('kClosest', () => {
    it('should return the k points closest to the origin for a general case with multiple points', () => {
      const points = [
        [1, 3],
        [-2, 2],
        [5, 8],
        [0, 1],
      ];
      const k = 2;
      const result = kClosest(points, k);
      const expected = [
        [-2, 2],
        [0, 1],
      ];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result).toHaveLength(2);
    });

    it('should return the only point when k is 1 and input has one point', () => {
      const points = [[2, -4]];
      const k = 1;
      const result = kClosest(points, k);
      const expected = [[2, -4]];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result).toHaveLength(1);
    });

    it('should handle when all points are equidistant from the origin', () => {
      const points = [
        [1, 1],
        [-1, -1],
        [1, -1],
        [-1, 1],
      ];
      const k = 2;
      const result = kClosest(points, k);
      const expectedDistances = result.map(([x, y]) => x * x + y * y);
      expect(new Set(expectedDistances)).toEqual(new Set([2]));
      expect(result).toHaveLength(2);
    });

    it('should return all points when k equals the number of input points', () => {
      const points = [
        [3, 3],
        [5, -1],
        [-2, 4],
      ];
      const k = 3;
      const result = kClosest(points, k);
      const expected = [
        [3, 3],
        [5, -1],
        [-2, 4],
      ];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result).toHaveLength(3);
    });

    it('should correctly handle points with negative coordinates', () => {
      const points = [
        [-5, -4],
        [-6, -3],
        [-2, -1],
      ];
      const k = 2;
      const result = kClosest(points, k);
      const expected = [
        [-2, -1],
        [-5, -4],
      ];
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result).toHaveLength(2);
    });

    it('should return an empty array when input points array is empty', () => {
      const points: number[][] = [];
      const k = 0;
      const result = kClosest(points, k);
      const expected: number[][] = [];
      expect(result).toEqual(expected);
    });

    it('should efficiently handle a large input of 10,000 points', () => {
      const points: number[][] = Array.from({ length: 10_000 }, () => [
        Math.floor(Math.random() * 20_001) - 10_000, // x in [-10_000, 10_000]
        Math.floor(Math.random() * 20_001) - 10_000, // y in [-10_000, 10_000]
      ]);
      const k = 10;

      const result = kClosest(points, k);

      // Validate output length
      expect(result).toHaveLength(k);

      // Validate that all returned points exist in the original input
      result.forEach((point) => {
        expect(points).toContainEqual(point);
      });
    });
  });
});
