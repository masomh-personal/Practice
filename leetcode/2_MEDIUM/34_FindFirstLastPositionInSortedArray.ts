/**
 * Binary Search Approach: Finding target range in sorted array
 *
 * Time Complexity: O(log n) - Two binary searches
 * Space Complexity: O(1) - Constant extra space
 *
 * @param {number[]} nums - Sorted array of integers
 * @param {number} target - Target value to search for
 * @returns {number[]} - First and last position of target, or [-1, -1] if not found
 */
export function searchRange(nums: number[], target: number): number[] {
  // Handle empty array and single-element edge case
  if (nums.length <= 1) {
    return nums[0] === target ? [0, 0] : [-1, -1];
  }

  function findBoundary(direction: 'left' | 'right'): number {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      // **NOTE:  safer convention from low-level languages (like C/C++ or Java)
      // to avoid integer overflow when left + right might exceed the maximum value representable.
      const mid = Math.floor(left + (right - left) / 2);

      if (nums[mid] === target) {
        result = mid;
        if (direction === 'left') {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  const leftBound = findBoundary('left');
  if (leftBound === -1) return [-1, -1];
  const rightBound = findBoundary('right');

  return [leftBound, rightBound];
}

/**
 * (NAIVE) Linear Search Approach: Two-pointer technique
 *
 * Time Complexity: O(n)
 * - Worst case requires scanning the entire array
 *
 * Space Complexity: O(1)
 * - No additional data structures used
 *
 * @param {number[]} nums - Sorted array of integers
 * @param {number} target - Target value to search for
 * @returns {number[]} - The first and last position of the target in the array, or [-1, -1] if not found
 */
export function searchRangeNaive(nums: number[], target: number): number[] {
  const result = [-1, -1];

  // Handle edge cases
  if (nums.length === 0) return result;
  if (nums.length === 1) {
    return nums[0] === target ? [0, 0] : [-1, -1];
  }

  let left = 0;
  let right = nums.length - 1;
  let foundLeft = false;
  let foundRight = false;

  // Continue until pointers cross
  while (left <= right) {
    // Handle case when pointers meet and value matches target
    if (left === right && nums[left] === target) {
      return [left, right];
    }

    // Check and mark leftmost occurrence if found
    if (nums[left] === target && !foundLeft) {
      result[0] = left;
      foundLeft = true;
    }

    // Check and mark rightmost occurrence if found
    if (nums[right] === target && !foundRight) {
      result[1] = right;
      foundRight = true;
    }

    // Move pointers accordingly
    if (!foundLeft) left++;
    if (!foundRight) right--;

    // Early return if both positions found
    if (result[0] !== -1 && result[1] !== -1) {
      return result;
    }
  }

  // If target not found at all, return [-1, -1]
  if (result[0] === -1 && result[1] === -1) {
    return result;
  }

  // Handle case when only one occurrence found
  return result[0] === -1 ? [result[1], result[1]] : [result[0], result[0]];
}
