/**
 * Performs merge sort on an array of INTEGERS.
 * NOTE: performed in ascending order
 * @param nums - The array of numbers to be sorted.
 * @returns The sorted array.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
export const mergeSort = (nums: number[]): number[] => {
  // Base case: If the array has 1 or 0 elements, it's already sorted
  if (nums.length <= 1) return nums;

  // Find the middle index of the array
  const midIdx: number = Math.floor(nums.length / 2);

  // Split the array into two halves: left and right
  const left: number[] = nums.slice(0, midIdx);
  const right: number[] = nums.slice(midIdx);

  // Recursively call mergeSort on the left and right half, in that order
  // NOTE: breaking up left and right side into single length arrays to merge back together
  const sortedLeft: number[] = mergeSort(left);
  const sortedRight: number[] = mergeSort(right);

  // Merge the two sorted halves
  return merge(sortedLeft, sortedRight);
};

// Helper function to merge two sorted arrays
const merge = (left: number[], right: number[]): number[] => {
  // Initialize an empty array to hold the merged result
  const mergedArray: number[] = [];

  // Use two pointers to traverse the left and right arrays
  let leftIdx: number = 0;
  let rightIdx: number = 0;

  // While there are elements in both arrays, compare and push the smaller element to the merged array
  while (leftIdx < left.length && rightIdx < right.length) {
    const leftNum: number = left[leftIdx];
    const rightNum: number = right[rightIdx];

    if (leftNum < rightNum) {
      mergedArray.push(leftNum);
      leftIdx++;
    } else {
      mergedArray.push(rightNum);
      rightIdx++;
    }
  }

  // Push the remaining elements from the left array, if any
  // NOTE: we do not want to slice here because it creates a new array and additional overhead
  while (leftIdx < left.length) {
    mergedArray.push(left[leftIdx]);
    leftIdx++;
  }

  // Push the remaining elements from the right array, if any
  while (rightIdx < right.length) {
    mergedArray.push(right[rightIdx]);
    rightIdx++;
  }

  // Return the merged array
  return mergedArray;
};
