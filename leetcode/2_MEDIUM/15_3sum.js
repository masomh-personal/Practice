/**
 * Optimized Two-Pointer Approach
 *
 * - Sort the array first (`O(n log n)`)
 * - Iterate through `nums`, using two pointers to find valid triplets (`O(n^2)`)
 * - Skip duplicate numbers efficiently
 * - Avoids extra hashmaps or sets, making it significantly faster than the naive approach
 *
 * Time: O(n^2) - Sorting takes O(n log n), and two-pointer search takes O(n^2)
 * Space: O(1) - No extra space beyond output storage
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
export function threeSum(nums) {
  // This check prevents sorting when `nums.length === 3`
  // if (nums.length === 3) {
  //   return nums[0] + nums[1] + nums[2] === 0 ? [nums] : [];
  // }
  //
  // NOTE: Why is this check unnecessary?
  // - Sorting 3 elements is `O(1)`, which is negligible.
  // - JavaScript’s `.sort()` is optimized for small arrays.
  // - The additional condition only applies in a tiny fraction of cases.
  // - Keeping the check makes the code slightly more complex for minimal gain.

  nums.sort((a, b) => a - b); // Sort input array
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for the first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicate values for left and right pointers
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum > 0) {
        right--; // Move right pointer left to decrease sum
      } else {
        left++; // Move left pointer right to increase sum
      }
    }
  }

  return result;
}

/**
 * Optimized Naive Approach: Frequency Map + Two-Sum with Deduplication
 *
 * - Uses a HashMap (`freqMap`) to store occurrences of numbers.
 * - Iterates through `nums` twice (`O(n^2)`) while ensuring unique triplets.
 * - Uses a Set (`seen`) to store triplets uniquely.
 *
 * Time Complexity: O(n^2) - Still O(n²) but eliminates redundant computations.
 * Space Complexity: O(n) - Uses HashMap for counts and Set for unique triplets.
 *
 * @param {number[]} nums - The input array of numbers.
 * @return {number[][]} - A list of unique triplets that sum to zero.
 */
export function threeSumNaive(nums) {
  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2] === 0 ? [nums] : [];
  }

  let allNegative = true;
  let allPositive = true;
  let allZeroes = true;

  // Build frequency map to count occurrences
  const freqMap = nums.reduce((map, num) => {
    if (num < 0) allPositive = false;
    else allNegative = false;

    if (num !== 0) allZeroes = false;

    map.set(num, (map.get(num) ?? 0) + 1);
    return map;
  }, new Map());

  // Early exit for edge cases
  if (allZeroes) return [[0, 0, 0]];
  if (allPositive || allNegative) return [];

  const result = [];
  const seen = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for `i` (safe even in unsorted arrays)
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const outerNum = nums[i];

    for (let j = i + 1; j < nums.length - 1; j++) {
      const innerNum = nums[j];
      const complement = -1 * (outerNum + innerNum);

      // Ensure the complement exists and is valid
      let requiredCount = 1;
      if (complement === outerNum) requiredCount++;
      if (complement === innerNum) requiredCount++;

      if (freqMap.get(complement) >= requiredCount) {
        // Normalize triplet before storing (ensures uniqueness)
        const triplet = [outerNum, innerNum, complement].sort((a, b) => a - b);
        const tripletKey = triplet.join('::');

        if (!seen.has(tripletKey)) {
          result.push(triplet);
          seen.add(tripletKey);
        }
      }
    }
  }

  return result;
}
