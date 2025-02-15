/**
 * APPROACH: Bitwise XOR to find the unique number
 * TIME: O(n) - Iterate through the entire array once
 * SPACE: O(1) - Uses only a single variable for tracking the result
 *
 * @param {number[]} nums - Input array where every element appears twice except for one
 * @return {number} - The unique number that appears only once
 */
export function singleNumber(nums) {
  if (nums.length === 1) return nums[0]; // Edge case: Single element, return it immediately

  // Initialize result to 0 since XOR with 0 returns the number itself
  let uniqueNum = 0;

  for (const num of nums) {
    // XOR each number; duplicates cancel out, leaving only the unique number
    uniqueNum ^= num;
  }

  // The result is the single number that appeared only once (and never cancelled itself out)
  return uniqueNum;
}

/**
 * APPROACH: HashMap frequency counter
 * TIME: O(n) - Iterate over all numbers in nums to build frequency map, then another pass to find the unique number
 * SPACE: O(n) - Store counts for all numbers in the input array
 * @param {number[]} nums
 * @return {number}
 */
export function singleNumberV2(nums) {
  if (nums.length === 1) return nums[0]; // Edge case: Single element, return it immediately

  // Step #1: Build a frequency map of numbers
  const freqMap = nums.reduce((acc, num) => acc.set(num, (acc.get(num) ?? 0) + 1), new Map());

  // Step #2: Find the number that appears exactly once
  for (const [num, count] of freqMap) {
    if (count === 1) return num; // Return the unique number
  }

  return -1; // This should never happen given problem constraints
}
