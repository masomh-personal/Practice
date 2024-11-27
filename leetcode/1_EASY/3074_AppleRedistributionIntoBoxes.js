/**
 * Calculates the minimum number of boxes needed to redistribute apples.
 *
 * Time Complexity: O(n log n) — Sorting the capacity array dominates.
 * Space Complexity: O(1) — Uses variables without extra data structures.
 *
 * @param {number[]} apple - Array of apple counts in packs.
 * @param {number[]} capacity - Array of box capacities.
 * @return {number} Minimum number of boxes required.
 */
export const minimumBoxes = (apple, capacity) => {
  // Step 1: Calculate the total number of apples.
  // Hint: `reduce` is perfect for this summation task. Alternatively, you could
  // use the arithmetic formula if apples are consecutive integers, but here we stick to `reduce`.
  const totalApples = apple.reduce((sum, num) => sum + num, 0);

  // Step 2: Sort the capacity array in descending order. Why? Because we want to fill
  // the largest boxes first to minimize the total number of boxes required.
  // Note: `toSorted` is a shiny new ES2023 feature that avoids mutating the original array.
  const sortedCapacityArr = capacity.toSorted((a, b) => b - a);

  let minBoxes = 0; // Tracks the minimum number of boxes used.
  let totalPacked = 0; // Tracks the total apples packed so far.

  // Step 3: Iterate through the sorted capacities. We're greedily filling the largest boxes
  // until we have packed all the apples. The moment we reach or exceed the total, we break.
  for (const boxCapacity of sortedCapacityArr) {
    if (totalPacked >= totalApples) break; // No need for extra boxes once all apples are packed.

    totalPacked += boxCapacity; // Pack apples into the current box.
    minBoxes++; // Increment the box count because, hey, we just used another box.
  }

  // Return the total minimum boxes used. Simple yet effective!
  return minBoxes;
};

/**
 * Calculates the minimum number of boxes needed to redistribute apples.
 *
 * This implementation uses a bucket sort approach to optimize performance for the given constraints.
 * By leveraging the fact that box capacities are limited to the range [1, 50], we avoid
 * the overhead of general-purpose sorting, resulting in a more efficient solution.
 *
 * Time Complexity: O(n + m + k)
 *   - O(n): Summing up the apples in the `apple` array.
 *   - O(m): Building the bucket array from the `capacity` array.
 *   - O(k): Iterating through the fixed range [1, 50].
 *   - Total: Effectively O(m) for practical purposes, since k = 50 (constant).
 *
 * Space Complexity: O(k)
 *   - Uses an additional array of size 51 (for capacities 0 to 50).
 *   - Constant for the problem's constraints, so effectively O(1) in typical analyses.
 *
 * Why this approach? Instead of sorting the capacity array (O(m log m)), we count the frequency
 * of each capacity and process them in descending order using a bucket array. It's faster and
 * leverages the problem constraints perfectly. Plus, who doesn't love optimizing within boundaries?
 *
 * @param {number[]} apple - Array of apple counts in packs.
 * @param {number[]} capacity - Array of box capacities.
 * @return {number} Minimum number of boxes required.
 */
export const minimumBoxesBucketSort = (apple, capacity) => {
  // Step 1: Calculate the total number of apples.
  const totalApples = apple.reduce((sum, num) => sum + num, 0);

  // Step 2: Bucket sort the capacity array. We'll count the occurrences of each capacity.
  const maxCapacity = 50; // As per problem constraints.
  const bucket = Array(maxCapacity + 1).fill(0);
  for (const box of capacity) {
    bucket[box]++;
  }

  // Step 3: Use the largest boxes first until all apples are packed.
  let minBoxes = 0; // Number of boxes used.
  let totalPacked = 0; // Number of apples packed so far.

  for (let i = maxCapacity; i >= 1; i--) {
    while (bucket[i] > 0 && totalPacked < totalApples) {
      totalPacked += i; // Pack apples into the current box.
      bucket[i]--; // Use one box of this capacity.
      minBoxes++; // Increment the count of boxes used.
    }
    if (totalPacked >= totalApples) break; // Stop once all apples are packed.
  }

  return minBoxes; // Return the minimum number of boxes used.
};
