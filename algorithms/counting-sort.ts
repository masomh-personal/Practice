/**
 * COUNTING SORT (positive integers only)
 * Time Complexity: O(n + k)
 * Space Complexity: O(n + k) - where k is the range (max - 0)
 * @param numArr - The array of numbers to be sorted.
 * @returns The sorted array.
 */
export const countingSort = (numArr: number[]): number[] => {
  // Edge Case: Empty array or array with one element
  if (numArr.length <= 1) return numArr;

  // Find the max value + also checking for negative numbers in one go
  let max = 0;
  for (let num of numArr) {
    if (num < 0) {
      throw new Error('Counting Sort only supports non-negative integers.');
    }
    max = Math.max(max, num);
  }

  // Create the count array with a size of max + 1
  const countArray: number[] = new Array(max + 1).fill(0);

  // Populate the count array with frequencies
  for (let num of numArr) {
    countArray[num]++;
  }

  // Build the sorted array based on the frequencies
  const sorted: number[] = [];
  for (let index = 0; index < countArray.length; index++) {
    let count = countArray[index];
    while (count > 0) {
      sorted.push(index);
      count--;
    }
  }

  return sorted;
};
