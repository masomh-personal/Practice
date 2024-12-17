/**
 * TIME: O(n) - We iterate through the array once
 * SPACE: O(1) - Done in place without extra memory
 *
 * @param {number[]} nums - The input sorted array
 * @return {number} - The length of the array after removing extra duplicates
 */
export function removeDuplicates(nums) {
  // Edge Case: If the array has fewer than 3 elements, no duplicates can exceed the limit
  if (nums.length < 3) {
    return nums.length;
  }

  const MAX_NUM_DUPLICATES = 2; // Allow up to two occurrences of each number
  let writerIdx = 2; // Start writing at the third position (index 2)

  // Two-pointer approach:
  // 'i' traverses the array, 'writerIdx' writes valid elements in place
  for (let i = 2; i < nums.length; i++) {
    const currNum = nums[i]; // Current number being evaluated
    const writerNum = nums[writerIdx - MAX_NUM_DUPLICATES]; // Compare two indices back

    // If the current number is different from the one two spots back, it's valid
    if (currNum !== writerNum) {
      nums[writerIdx] = currNum; // Overwrite at writerIdx
      writerIdx++; // Move the writer pointer forward
    }
  }

  // Return the new length of the array (all valid numbers up to writerIdx)
  return writerIdx;
}
