/**
 * Returns the k closest points to the origin (0,0) from a list of 2D points.
 *
 * Approach: Sort-Based Selection (Optimized Distance)
 * - Calculates squared Euclidean distance (no need for square root since we only compare distances).
 * - Sorts all points by distance and selects the first k.
 *
 * Time: O(n log n) - dominated by sorting step
 * Space: O(n) - additional space used for mapped distance objects.
 *
 * Optimization Note:
 * - Using a **Max Heap (size k)** can reduce time complexity to O(n log k),
 *   which is beneficial when n is large and k is small.
 *
 * @param {number[][]} points - An array of 2D points [x, y]
 * @param {number} k - The number of closest points to return
 * @returns {number[][]} - The k closest points to the origin
 */
export function kClosest(points: number[][], k: number): number[][] {
  // Helper to compute squared Euclidean distance from origin (avoids unnecessary sqrt)
  function getPointDistance([x, y]: number[]): number {
    return x * x + y * y;
  }

  return points
    .map((point) => ({
      coordinates: point,
      distanceFromOrigin: getPointDistance(point),
    }))
    .sort((a, b) => a.distanceFromOrigin - b.distanceFromOrigin)
    .slice(0, k)
    .map((pointInfo) => pointInfo.coordinates);
}
