/**
 * Finds the pivot index in the array where the sum of the elements
 * on the left is equal to the sum of the elements on the right.
 *
 * Time Complexity: O(n) - We iterate through the array once.
 * Space Complexity: O(1) - We use only a few variables (constant space).
 *
 * @param {number[]} nums - The input array of integers.
 * @return {number} - The pivot index, or -1 if no such index exists.
 */
export const pivotIndex = (nums) => {
  // Calculate the total sum of the entire array.
  let totalSum = nums.reduce((acc, num) => acc + num, 0);

  // Initialize leftSum to 0 since there's nothing to the left of index 0 initially.
  let leftSum = 0;

  // Iterate over each element in the array (finding right sum and comparing each iteration)
  for (let i = 0; i < nums.length; i++) {
    // The rightSum for index i is the total sum minus the leftSum and the current element.
    const rightSum = totalSum - leftSum - nums[i];

    // If the leftSum equals the rightSum, we have found the pivot index.
    if (leftSum === rightSum) {
      return i; // Return the pivot index.
    }

    // Update leftSum by adding the current element for the next iteration.
    leftSum += nums[i];
  }

  // If no pivot index is found, return -1.
  return -1;
};
