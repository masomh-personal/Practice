/**
 * TIME:
 *
 *
 * @param {number[]} nums
 * @return {number}
 */
export function removeDuplicates(nums) {
  // Edge Case: if nums has only one variable, then we know there are no duplicates
  if (nums.length === 1) {
    return 1;
  }

  // Helper function to swap to end
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // MAX num of occurrences
  const MAX_ALLOWED_OCCURRENCE = 2;

  // TWO pointer approach
  let writerIdx = 0; // position where we will write the next valid element
  let i = 0; // iterator to go through the array

  let count = 0; // keep track of occurrences of the current number

  for (let i = 0; i < nums.length - 1; i++) {
    // TODO logic
  }
}
