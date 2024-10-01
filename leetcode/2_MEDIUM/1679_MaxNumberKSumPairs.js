/**
 * TWO pointer approach (with sorting)
 * Time: O(n log n)
 * Space: O(1) (excluding the input array)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const maxOperations = (nums, k) => {
  if (nums.length < 2) return 0; // Handles arrays with 0 or 1 elements.

  // Sort the original nums array in-place
  nums.sort((a, b) => a - b);

  // Set up two-pointer approach
  let left = 0;
  let right = nums.length - 1;
  let result = 0;

  // Iterate through the array until the two pointers meet
  while (left < right) {
    const sum = nums[left] + nums[right]; // Calculate the sum of the two pointer elements

    if (sum === k) {
      result++; // Valid pair found
      left++; // Move both pointers inward
      right--;
    } else if (sum > k) {
      right--; // Sum is too large, move right pointer left
    } else {
      left++; // Sum is too small, move left pointer right
    }
  }

  return result;
};

/**
 * HASHMAP Approach with index checking
 * Time: O(n)
 * Space: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const maxOperationsMap = (nums, k) => {
  // Create a map to store the indices for each number.
  const indexMap = new Map();

  let result = 0;

  // Iterate over each number in the array.
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = k - num; // Find the complement that adds up to k.

    // Check if the complement exists in the map and has unpaired indices.
    if (indexMap.has(complement) && indexMap.get(complement).length > 0) {
      // We've found a valid pair, so increment the result counter.
      result++;

      // Remove the used complement index from the map (it's now paired).
      const complementIndices = indexMap.get(complement);
      complementIndices.pop();

      // If the complement's indices array is empty, remove the entry from the map.
      if (complementIndices.length === 0) {
        indexMap.delete(complement);
      }
    } else {
      // Otherwise, store the current number's index for future pairing.
      if (!indexMap.has(num)) {
        indexMap.set(num, []);
      }
      indexMap.get(num).push(i);
    }
  }

  // Finally, return the number of valid operations (pairs).
  return result;
};

/**
 * HASHMAP Approach Naive
 *
 * Time Complexity: O(n) - We traverse the array once to build the frequency map
 * and once more to find pairs. Both operations are linear with respect to the input size.
 *
 * Space Complexity: O(n) - The space used by the frequency map grows in proportion
 * to the size of the input array `nums`.
 *
 * @param {number[]} nums - The input array of integers.
 * @param {number} k - The target sum we want to find pairs for.
 * @return {number} - The maximum number of valid k-sum pairs.
 */
export const maxOperationsMapNaive = (nums, k) => {
  // If the array only has one element, no pairs can be formed, return 0 immediately.
  if (nums.length === 1) return 0;

  // Create a frequency map (a hashmap) that stores how many times each number appears in the array.
  const freqMap = nums.reduce((acc, num) => {
    // For each number, either increment its count if it exists, or initialize it to 1.
    acc.set(num, (acc.get(num) ?? 0) + 1);
    return acc;
  }, new Map());

  // Initialize a counter to keep track of the total number of valid pairs found.
  let result = 0;

  // Iterate over each number in the array.
  for (const num of nums) {
    const complement = k - num; // Find the complement, which is the value needed to make num + complement = k.

    // Get the counts of both the current number and its complement from the frequency map.
    const numCount = freqMap.get(num) ?? 0; // Default to 0 if the number isn't in the map.
    const complementCount = freqMap.get(complement) ?? 0; // Default to 0 if the complement isn't in the map.

    // If the complement is available (count > 0) and there are valid pairs to be made:
    if (complementCount > 0) {
      if (num === complement) {
        // Special case: If num is exactly half of k (i.e., complement and num are the same),
        // we can only pair the number with itself, so we count how many pairs can be formed
        // by dividing the count of this number by 2.
        const pairs = Math.floor(numCount / 2);

        // Add the number of pairs to the result.
        result += pairs;

        // Decrease the count in the frequency map to reflect the used pairs (each pair uses 2 occurrences).
        freqMap.set(num, numCount - 2 * pairs);
      } else {
        // General case: The complement is different from the current number.
        // We can form pairs by taking the minimum number of occurrences between num and its complement.
        const pairs = Math.min(numCount, complementCount);

        // Add the number of pairs to the result.
        result += pairs;

        // Update the frequency map for both num and complement by decreasing their counts
        // based on how many pairs were formed.
        freqMap.set(num, numCount - pairs);
        freqMap.set(complement, complementCount - pairs);
      }
    }
  }

  // After processing all numbers, return the total number of pairs found.
  return result;
};
