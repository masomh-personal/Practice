/**
 * 1 pass using two pointer with swapping
 * Time: O(n)
 * Space: O(1) in place
 * @param {number[]} nums - The array of numbers to modify in-place.
 * @return {void} - Do not return anything, modify nums in-place instead.
 */
export const moveZeroes = (nums) => {
  // Helper function to swap two elements in the array
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let writer = 0; // Pointer for non-zero elements' destination
  let runner = 1; // Pointer to explore the array

  // Continue until runner has traversed the entire array
  while (runner < nums.length) {
    const leftNum = nums[writer]; // Value at the writer pointer
    const rightNum = nums[runner]; // Value at the runner pointer

    // If the left value is non-zero, we can move the writer ahead
    if (leftNum !== 0) {
      writer++;
    }
    // If the left value is zero and the right value is non-zero, swap them
    else if (rightNum !== 0) {
      swap(nums, writer, runner);
      writer++; // Move writer since we have filled it with a non-zero value
    }

    runner++; // Always move runner to the next position
  }
};

/**
 * Two passes, no swapping
 * Time: O(n)
 * Space: O(1) in place
 * @param {number[]} nums - The array of numbers to modify in-place.
 * @return {void} - Do not return anything, modify nums in-place instead.
 */
export const moveZeroesV2 = (nums) => {
  let writer = 0; // Points to where the next non-zero should go

  // First pass: move all non-zeroes to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[writer] = nums[i]; // Place the non-zero element at the writer position
      writer++; // Move the writer forward
    }
  }

  // Second pass: fill the remaining positions with zeroes
  for (let i = writer; i < nums.length; i++) {
    nums[i] = 0; // Set the remaining elements to zero
  }
};
