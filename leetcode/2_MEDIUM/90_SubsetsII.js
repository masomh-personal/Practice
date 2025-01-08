/**
 * Approach: Iterative with Set() (Maintains Order)
 * Time Complexity: O(2^n) - Each number is either included or excluded.
 * Space Complexity: O(2^n) - Storing all subsets.
 * @param {number[]} nums
 * @return {number[][]}
 */
export function subsetsWithDup(nums) {
  nums.sort((a, b) => a - b); // Sorting ensures lexicographical order
  const result = [[]]; // Start with the empty subset

  let prevNewSubsets = []; // Track subsets added in last iteration

  for (let i = 0; i < nums.length; i++) {
    const newSubsets = [];

    // If current number is a duplicate, only extend from previously added subsets
    const sourceSubsets = i > 0 && nums[i] === nums[i - 1] ? prevNewSubsets : result;

    prevNewSubsets = []; // Reset for this iteration

    for (const subset of sourceSubsets) {
      const newSubset = [...subset, nums[i]];
      newSubsets.push(newSubset);
      prevNewSubsets.push(newSubset); // Store for next iteration to maintain order
    }

    result.push(...newSubsets);
  }

  return result;
}

/**
 * Approach: Recursive Backtracking (Handles Duplicates)
 * Time Complexity: O(2^n) - Each element is either included or excluded, leading to 2^n subsets.
 * NOTE: Sorting takes O(n log n), but recursion dominates.
 * Space Complexity: O(2^n) - Storing all subsets (exponential growth), plus O(n) for the recursion call stack.
 * @param {number[]} nums
 * @return {number[][]}
 */
export function subsetsWithDupRecursive(nums) {
  // Edge case when nums length is 1 (can't be zero per constraints)
  if (nums.length === 1) {
    return [[], nums];
  }

  // Sorting ensures duplicates are adjacent, which allows us to skip them easily
  // We are mutating the original nums array, which is not best practice
  nums.sort((a, b) => a - b);

  const result = [];

  // Recursive helper to go down the "decision tree"
  const recursiveHelper = (startIdx, currArr = []) => {
    // Add a copy of current array to the result
    result.push([...currArr]);

    // Iterate through the nums array and decide to INCLUDE the current subset while skipping duplicates
    for (let i = startIdx; i < nums.length; i++) {
      // 🔥 Explicitly skip duplicates at the same depth to prevent redundant recursive calls
      // Without this check, the function may still work in most cases, but due to implicit recursion behavior
      // Sorting groups duplicates together, making them easy to detect and skip in the same level of recursion
      if (i > startIdx && nums[i] === nums[i - 1]) continue;

      // Include nums[i] in the current subset
      currArr.push(nums[i]);

      // Recursively generate subsets with the next element
      recursiveHelper(i + 1, currArr);

      // Backtrack by removing the last element to continue exploring possibilities
      currArr.pop();
    }
  };

  // Start recursive tracking
  recursiveHelper(0); // Starting at zero will pass in currArr as an empty array to build
  return result;
}
