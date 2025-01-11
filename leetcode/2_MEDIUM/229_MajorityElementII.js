/**
 * Approach: Boyer-Moore Voting Algorithm (Optimized with Two Variables)
 * NOTE: At most two majority elements (appearing more than ⌊n/3⌋ times)
 * Time: O(n) - Single pass through nums to find candidates, another pass to verify counts.
 * Space: O(1) - Uses only a few variables.
 * @param {number[]} nums
 * @return {number[]}
 */
export function majorityElement(nums) {
  let candidate1 = null,
    candidate2 = null;
  let count1 = 0,
    count2 = 0;

  // Step 1: Find Two Potential Majority Candidates
  for (const num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  // Step 2: Validate Candidates by Recounting
  count1 = 0;
  count2 = 0;
  for (const num of nums) {
    if (num === candidate1) count1++;
    else if (num === candidate2) count2++;
  }

  // Step 3: Return the candidates that appear more than ⌊n/3⌋ times
  const result = [];
  const MAJORITY_THRESHOLD = Math.floor(nums.length / 3);
  if (count1 > MAJORITY_THRESHOLD) result.push(candidate1);
  if (count2 > MAJORITY_THRESHOLD) result.push(candidate2);

  return result;
}

/**
 * Approach: HASHMAP Counter (V1)
 * NOTE: result array / set can only have two numbers due to constraints
 * Time: O(2 * n) or O(n) - since we have to iterate through the entire nums array and freq map
 * Space: O(n) - creating a freq map
 * @param {number[]} nums
 * @return {number[]}
 */
export function majorityElementMap(nums) {
  let result = [];

  // Define the threshold for majority elements (must appear more than ⌊n/3⌋ times)
  const MAJORITY_THRESHOLD = nums.length / 3;

  // Create a frequency map to count occurrences of each number
  const freqMap = nums.reduce((acc, num) => {
    const currCount = acc.get(num) ?? 0; // Get current count or default to 0
    acc.set(num, currCount + 1); // Increment count
    return acc;
  }, new Map());

  // Iterate over frequency map to find elements exceeding the threshold
  for (const [num, count] of freqMap) {
    if (count > MAJORITY_THRESHOLD) {
      result.push(num); // Add qualifying elements to result
    }

    // Can only have two majority elements anyway, break out
    if (result.length > 2) break;
  }

  return result; // Return the majority elements
}
