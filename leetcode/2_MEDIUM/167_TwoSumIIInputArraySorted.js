/**
 * Two-pointer approach to find indices of two numbers that add up to the target
 * Note: A hashmap approach can also solve this problem in O(n) time by storing seen numbers
 * and their indices for quick complement lookup. However, it uses O(n) space, which doesn't
 * meet the problem's constant-space requirement, making the two-pointer approach better here.
 *
 * Time: O(n) - iterate through the array once
 * Space: O(1) - only two pointers and the result array are used
 *
 * @param {number[]} nums - sorted array of integers
 * @param {number} target - the target sum
 * @return {number[]} - 1-indexed positions of the two numbers
 */
export function twoSum(nums, target) {
  // Edge case: if there are only two numbers, return their indices as they are guaranteed to be the answer
  if (nums.length === 2) {
    return [1, 2]; // the two numbers must sum up to the target
  }

  let left = 0; // start pointer at the beginning of the array
  let right = nums.length - 1; // end pointer at the last element of the array

  // Keep iterating until the pointers overlap
  while (left < right) {
    const leftNum = nums[left]; // current number at the left pointer
    const rightNum = nums[right]; // current number at the right pointer
    const currSum = leftNum + rightNum; // calculate their sum

    if (currSum > target) {
      right--; // decrease the right pointer to reduce the sum
    } else if (currSum < target) {
      left++; // increase the left pointer to increase the sum
    } else {
      // we found the answer, return the 1-indexed positions
      return [left + 1, right + 1];
    }
  }
}
