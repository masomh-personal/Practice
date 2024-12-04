/**
 * APPROACH: Binary Search with Rotation Handling
 *
 * Time Complexity: O(log n)
 * - Standard binary search approach, halving the search space.
 *
 * Space Complexity: O(1)
 * - Only uses a few variables for pointers and comparisons.
 *
 * @param {number[]} nums - The rotated sorted array.
 * @param {number} target - The value to search for.
 * @return {number} - Index of the target if found, otherwise -1.
 */
export const search = (nums, target) => {
  // Edge case: Single-element array
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const midValue = nums[mid];

    // early exit
    if (midValue === target) {
      return mid; // Found the target
    }

    // Determine which side of the array is sorted
    // Have two different paths, we can differentiate which side is sorted
    if (nums[left] <= midValue) {
      // Left side is sorted
      if (nums[left] <= target && target < midValue) {
        right = mid - 1; // Target is on the sorted left side
      } else {
        left = mid + 1; // Target is on the right
      }
    } else {
      // Right side is sorted
      if (midValue < target && target <= nums[right]) {
        left = mid + 1; // Target is on the sorted right side
      } else {
        right = mid - 1; // Target is on the left
      }
    }
  }

  return -1; // Target not found
};

/**
 * ATTEMPT 1: Naive linear search using indexOf, simple and inefficient.
 *
 * Time Complexity: O(n)
 * - Linear search to find the index of the target.
 *
 * Space Complexity: O(1)
 * - No additional space used.
 *
 * @param {number[]} nums - The rotated sorted array to search in.
 * @param {number} target - The target value to search for.
 * @return {number} - Index of the target if found, otherwise -1.
 */
export const searchNaive = (nums, target) => {
  // Use indexOf to find the target in the array.
  return nums.indexOf(target);
};

/**
 * ATTEMPT 2: Naive "Fun" Closing in Approach
 *
 * Time Complexity: O(n/2) => O(n)
 * - Linear search from both ends toward the center, processing two elements per iteration.
 *
 * Space Complexity: O(1)
 * - Only uses pointers for left and right indices.
 *
 * @param {number[]} nums - The rotated sorted array to search in.
 * @param {number} target - The target value to search for.
 * @return {number} - Index of the target if found, otherwise -1.
 */
export const searchNaive2 = (nums, target) => {
  // Edge case: Single-element array
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let left = 0; // Start at the beginning
  let right = nums.length - 1; // Start at the end

  while (left <= right) {
    // Check the left pointer
    if (nums[left] === target) {
      return left;
    }

    // Check the right pointer
    if (nums[right] === target) {
      return right;
    }

    // Move pointers toward the center
    right--;
    left++;
  }

  // Target not found
  return -1;
};
