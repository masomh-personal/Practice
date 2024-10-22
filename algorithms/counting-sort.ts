/**
 * COUNTING SORT (positive integers only)
 * Time Complexity: O(n + k)
 * Space Complexity: O(n + k) - where k is the range (max - 0)
 * @param numArr - The array of numbers to be sorted.
 * @returns The sorted array.
 */
export const countingSort = (numArr: number[]): number[] => {
  // Guards
  if (numArr.some((num) => num < 0)) {
    throw new Error('Counting Sort only supports non-negative integers.');
  }

  if (numArr.length <= 1) return numArr;

  // Find the max value of the array (we assume min is 0 for non-negative integers)
  let max = 0;
  numArr.forEach((num) => {
    if (num > max) max = num;
  });

  // Create the counter array with a size based on max
  const counter: number[] = new Array(max + 1).fill(0);

  // Populate the counter array with the frequencies of each number
  numArr.forEach((num) => {
    counter[num]++;
  });

  // Build the sorted array based on the counts
  const sorted: number[] = [];
  counter.forEach((count, idx) => {
    for (let i = 0; i < count; i++) {
      sorted.push(idx);
    }
  });

  return sorted;
};
