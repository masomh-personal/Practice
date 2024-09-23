/**
 * Time: O(n) - We iterate through the array once.
 * Space: O(1) - We use only a constant amount of extra space.
 * @param {number[]} nums - The input array of integers
 * @return {boolean} - Returns true if an increasing triplet subsequence exists, false otherwise.
 */
export const increasingTriplet = (nums) => {
  // If the length of the array is less than 3, we can't have a triplet
  if (nums.length < 3) return false;

  // Variables to track the first and second-smallest numbers found so far.
  // Start by initializing them to a very large value (Infinity).
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of nums) {
    if (num <= firstSmallest) {
      // If the current number is less than or equal to the firstSmallest, update firstSmallest.
      // This ensures that firstSmallest holds the smallest number seen so far.
      firstSmallest = num;
    } else if (num <= secondSmallest) {
      // If the current number is greater than firstSmallest but less than or equal to secondSmallest,
      // update secondSmallest. This means we've found a number larger than firstSmallest.
      secondSmallest = num;
    } else {
      // If the current number is greater than both firstSmallest and secondSmallest,
      // we have found an increasing triplet subsequence.
      return true;
    }
  }

  // If no triplet is found, return false.
  return false;
};
