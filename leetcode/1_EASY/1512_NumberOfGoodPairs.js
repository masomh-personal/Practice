/**
 * APPROACH: HashMap to achieve O(n) time complexity
 *
 * The function uses a HashMap (or Map) to track the frequency of elements in the array.
 * For each element, it calculates the number of good pairs based on the current frequency.
 *
 * Time Complexity: O(n) - Single pass to build the frequency map and another to calculate the result.
 * Space Complexity: O(n) - Space required for the HashMap.
 *
 * @param {number[]} nums - Array of integers to analyze.
 * @return {number} - The total number of good pairs.
 */
export const numIdenticalPairs = (nums) => {
  // Edge case: Arrays with 0 or 1 element have no pairs.
  if (nums.length <= 1) return 0;

  // Step 1: Build a frequency map using reduce.
  const freqMap = nums.reduce((acc, num) => acc.set(num, (acc.get(num) ?? 0) + 1), new Map());

  let result = 0;

  // Step 2: Iterate through the frequency map to calculate good pairs.
  // For each frequency > 1, add combinations (nC2 = n * (n - 1) / 2)
  // NOTE: could also use the nC2 mathematical formula for the number of ways to choose 2 items from a set of n items
  for (const num of nums) {
    const currNumCount = freqMap.get(num) ?? 0;

    // If no occurrences are left, skip further operations.
    if (!currNumCount) continue;

    // Otherwise, decrement the count and add to the result.
    freqMap.set(num, currNumCount - 1);
    result += currNumCount - 1;
  }

  return result;
};

/**
 * APPROACH: Brute Force (nested loop)
 *
 * This approach iterates through all possible pairs in the array using a nested loop.
 * If two elements are equal, and their indices satisfy i < j, it increments the result counter.
 *
 * Time Complexity: O(n^2) - For every element, we check the rest of the elements.
 * Space Complexity: O(1) - No extra space used.
 *
 * @param {number[]} nums - Array of integers to analyze.
 * @return {number} - The count of good pairs (nums[i] == nums[j] && i < j).
 */
export const numIdenticalPairsNaive = (nums) => {
  // Edge case: Arrays with 0 or 1 element have no pairs.
  if (nums.length <= 1) return 0;

  let result = 0; // Counter for good pairs

  // Outer loop: Iterate through each element as the first pair candidate.
  for (let i = 0; i < nums.length; i++) {
    // Inner loop: Compare the current element with every subsequent element.
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the pair satisfies the good pair condition.
      if (nums[i] === nums[j]) {
        result++; // Increment the counter for each good pair found
      }
    }
  }

  return result; // Return the total count of good pairs
};
