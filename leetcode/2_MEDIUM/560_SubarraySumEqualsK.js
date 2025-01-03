/**
 * APPROACH: Prefix Sum + Hashmap
 *
 * Time Complexity: O(n) - We traverse the array once, and each lookup/insertion in the hashmap is O(1).
 * Space Complexity: O(n) - We store prefix sums in a hashmap.
 *
 * @param {number[]} nums - The input array of integers
 * @param {number} k - The target sum for subarrays
 * @return {number} - The total count of subarrays that sum to `k`
 */
export function subarraySum(nums, k) {
  let result = 0; // Stores the count of valid subarrays

  let runningSum = 0; // Prefix sum tracker
  const prefixMap = new Map([[0, 1]]); // Hashmap to track prefix sums, initialized with {0:1}

  for (const num of nums) {
    runningSum += num; // Update running sum

    // Check if there exists a prefix sum that, when removed, gives sum k
    const kController = runningSum - k;

    if (prefixMap.has(kController)) {
      result += prefixMap.get(kController); // Add count of previous occurrences of (runningSum - k)
    }

    // Store/update the current running sum in the map
    prefixMap.set(runningSum, (prefixMap.get(runningSum) ?? 0) + 1);
  }

  return result; // Return the total count of valid subarrays
}

/**
 * APPROACH: Brute Force (Naïve)
 *
 * Time Complexity: O(n^2) - Nested loops checking all subarrays
 * Space Complexity: O(1) - No extra data structures used
 *
 * @param {number[]} nums - The input array of integers
 * @param {number} k - The target sum for subarrays
 * @return {number} - The total count of subarrays that sum to `k`
 */
export function subarraySumNaive(nums, k) {
  let result = 0; // Stores the count of valid subarrays

  // Iterate through all possible starting points for subarrays
  for (let i = 0; i < nums.length; i++) {
    let currSum = 0; // Resets sum for the new starting index

    // Extend the subarray by adding one element at a time
    for (let j = i; j < nums.length; j++) {
      currSum += nums[j]; // Update current sum

      // If the sum equals `k`, we found a valid subarray
      if (currSum === k) {
        result++;
      }
    }
  }

  return result; // Return the total count of valid subarrays
}
