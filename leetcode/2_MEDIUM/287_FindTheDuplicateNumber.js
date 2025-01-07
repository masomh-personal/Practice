/**
 * Approach: Floyd's Cycle Detection (Tortoise and Hare)
 * Leetcode: 7ms / 73.72%
 * Time Complexity: O(n) - Linear time traversal through the array
 * Space Complexity: O(1) - Constant extra space used (only two pointers)
 *
 * @param {number[]} nums
 * @return {number}
 */
export function findDuplicate(nums) {
  if (nums.length === 1) {
    return nums[0]; // Edge case: Only one number, which is technically "duplicated"
  }

  // Step 1: Detect Cycle
  let slow = nums[0]; // Tortoise moves 1 step at a time
  let fast = nums[0]; // Hare moves 2 steps at a time

  // Do/while loop so we can run at least once no matter what and then do while check
  do {
    slow = nums[slow]; // Move slow by 1 step
    fast = nums[nums[fast]]; // Move fast by 2 steps
  } while (slow !== fast); // Continue until they meet inside the cycle

  // Step 2: Find the Duplicate Number by stepping through the cycle
  slow = nums[0]; // Reset slow pointer to the start
  while (slow !== fast) {
    slow = nums[slow]; // Move slow by 1 step
    fast = nums[fast]; // Move fast by 1 step
  }

  return slow; // The meeting point is the duplicate number
}

/**
 * Approach: Using a Set to check for seen variables
 * Leetcode: 18ms / 44.40%
 * Time: O(n) - worst case we have to check all elements in nums
 * Space: O(n) - creating a set that can potentially house all elements in num
 *
 * @param {number[]} nums
 * @return {number}
 */
export function findDuplicateNaive(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  // Let's create a set for O(1) look up uniqueness
  const seen = new Set();

  // Iterate until we find a match
  for (const num of nums) {
    if (seen.has(num)) {
      return num;
    }

    seen.add(num);
  }

  // NOTE: per constraints, we will always have one integer that will appear at least two or more times
  // We won't get her technically
  return -1;
}

/**
 * Approach: Sort then linear search (naive!)
 * Leetcode: 121ms / 12.54%
 * Time: O(n log n) - due to sorting
 * Space: O(n) - not mutating nums and creating new sorted array
 *
 * @param {number[]} nums
 * @return {number}
 */
export function findDuplicateSort(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  // Let's not mutate the original array
  const sorted = nums.toSorted((a, b) => a - b);

  // We can now iterate through the array one at a time and check for duplicate
  for (let i = 1; i < sorted.length; i++) {
    const prevNum = sorted[i - 1];
    const currNum = sorted[i];

    if (prevNum === currNum) {
      return currNum;
    }
  }

  // NOTE: per constraints, we will always have one integer that will appear at least two or more times
  // We won't get her technically
  return -1;
}
