/**
 * Generates all possible subsets (the power set) of a given array of unique integers.
 *
 * Time: O(2^n * n)
 *    - We generate 2^n subsets and for each subset, it can take up to O(n) time to copy.
 *
 * Space: O(2^n * n)
 *    - We store 2^n subsets, each of size up to n.
 *
 * @param {number[]} nums - Array of unique integers.
 * @return {number[][]} - Array containing all possible subsets of nums.
 */
export const subsets = (nums) => {
  const result = [[]]; // Start with the empty subset

  // Iterate over every number in the input array
  for (const num of nums) {
    const newSubsets = [];

    // For each subset in the result, add the current number to it
    for (const subset of result) {
      newSubsets.push([...subset, num]); // Create a new subset by adding the current number
    }

    // Add all the new subsets generated to the result
    result.push(...newSubsets);
  }

  return result;
};

/**
 * Generates all possible subsets (the power set) of a given array of unique integers.
 *
 * Time: O(2^n * n)
 *    - There are 2^n possible subsets for an array of length n, and copying each subset takes O(n) time.
 *
 * Space: O(2^n * n)
 *    - We store 2^n subsets, and each subset can have up to n elements.
 *
 * @param {number[]} nums - Array of unique integers.
 * @return {number[][]} - Array containing all possible subsets of nums.
 */
export const subsetsRecursive = (nums) => {
  const result = [];

  // Recursive backtracking function to generate subsets
  const backTrack = (startIdx, currentArr = []) => {
    // Add a copy of the current array to the result
    result.push([...currentArr]);

    // Explore further subsets starting from the current index
    for (let i = startIdx; i < nums.length; i++) {
      // Include nums[i] in the current subset
      currentArr.push(nums[i]);

      // Recursively generate subsets with the next element
      backTrack(i + 1, currentArr);

      // Backtrack by removing the last element to explore other possibilities
      currentArr.pop();
    }
  };

  // Start backtracking from index 0
  backTrack(0);

  return result;
};
