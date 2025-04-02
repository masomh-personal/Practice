/**
 * Jump Game II
 *
 * Given an array of non-negative integers nums, where each element represents the maximum
 * jump length at that position, return the minimum number of jumps required to reach the last index.
 *
 * @param {number[]} nums - An array of non-negative integers representing max jump lengths
 * @returns {number} The minimum number of jumps to reach the last index
 *
 * @approach Greedy (level-based traversal)
 * @timecomplexity O(n) - single pass through the array
 * @spacecomplexity O(1) - uses constant space for tracking boundaries
 */

export function jump(nums: number[]): number {
  // Special case: no jumps needed if array has only one element
  if (nums.length === 1) return 0;

  let minJumps = 0; // Total number of 'greedy' jumps made
  let currentWindowEnd = 0; // End of the current jump window
  let farthestReachableIdx = 0; // Farthest index reachable in the next jump

  // We stop at nums.length - 2 since we don't need to jump from the last index
  for (let i = 0; i < nums.length - 1; i++) {
    // Track the furthest we can reach in the current jump window
    farthestReachableIdx = Math.max(farthestReachableIdx, i + nums[i]);

    // If we've reached the end of the current jump range (starting at 0 of course)
    if (i === currentWindowEnd) {
      // it's time to increment jump and expand to the next range
      minJumps++;
      currentWindowEnd = farthestReachableIdx;
    }
  }

  return minJumps;
}
