/**
 * TIME: O(n) - single pass using a map
 * SPACE: O(n) - using a map to store key/value pairs of num/idx
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(nums, target) {
  const numIdxMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // If we have seen the complement before, return its index and current index
    if (numIdxMap.has(complement)) {
      return [numIdxMap.get(complement), i];
    }

    // Store the number and its index for future lookups
    numIdxMap.set(nums[i], i);
  }
}
