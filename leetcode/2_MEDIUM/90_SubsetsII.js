/**
 * Approach: Iterative Backtracking with Ordered Subset Extension
 *
 * This approach builds subsets iteratively while ensuring that duplicate numbers
 * do not create duplicate subsets. It does this by extending only the newly added
 * subsets when processing duplicate numbers.
 *
 * Time Complexity: O(2^n) - Each number is either included or excluded, generating 2^n subsets.
 * Sorting takes O(n log n), but subset generation dominates.
 *
 * Space Complexity: O(2^n) - Storing all subsets.
 *
 * @param {number[]} nums - The input array that may contain duplicates.
 * @return {number[][]} - A list of all unique subsets.
 */
export function subsetsWithDup(nums) {
  // Step 1: Sort the array to ensure that duplicates are adjacent
  nums.sort((a, b) => a - b);

  const result = [[]]; // Start with an empty subset: the power set always includes this.

  let prevNewSubsets = []; // Keeps track of subsets added in the last iteration.

  // Step 2: Iterate through each number in the sorted array
  for (let i = 0; i < nums.length; i++) {
    const newSubsets = []; // Temporary storage for new subsets in this iteration.

    /**
     * Step 3: Decide where to extend from:
     * - If nums[i] is a duplicate (nums[i] === nums[i - 1]), we ONLY extend subsets
     *   that were generated in the previous iteration (prevNewSubsets). This ensures
     *   that duplicates are only added in the same "level" where they first appeared.
     * - Otherwise, extend from all subsets in `result` (including previous numbers).
     */
    const sourceSubsets = i > 0 && nums[i] === nums[i - 1] ? prevNewSubsets : result;

    prevNewSubsets = []; // Reset to store new subsets created in this iteration.

    // Step 4: Create new subsets by adding nums[i] to each subset in sourceSubsets.
    for (const subset of sourceSubsets) {
      const newSubset = [...subset, nums[i]]; // Append current number to the subset.
      newSubsets.push(newSubset); // Store the new subset.
      prevNewSubsets.push(newSubset); // Track newly created subsets for duplicate handling.
    }

    // Step 5: Append all newly created subsets to the result.
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
