/**
 * Time: O(n log n) - because we are sorting
 * Space: O(n) - due to result array
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
export function threeSum(nums) {
  const result = [];
  if (nums.length < 3) return result;

  // Sort the array before anything
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates (need to check i > 0 first to not go out of bounds)
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // Since nums is already sorted, we can use a simple two pointer approach to retract from each side
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        // Found a triplet (in sorted order)
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates and close the window so we don't check unnecessary and duplicate numbers
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      }
    }
  }

  return result;
}
