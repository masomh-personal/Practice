export const find = (sortedArr, target) => {
  const notFound = new Error('Value not in array'); // Custom error for values not in the array

  // Edge case: If array is empty, throw a 'not found' error immediately
  if (!sortedArr.length) {
    throw notFound;
  }

  let left = 0;
  let right = sortedArr.length - 1;

  // Main binary search loop: continues until the search range is exhausted
  while (left <= right) {
    // Calculate the midpoint (avoiding potential overflow by using `left + (right - left) / 2`)
    const midIdx = left + Math.floor((right - left) / 2);
    const currMidValue = sortedArr[midIdx]; // Value at the midpoint

    // If target is found at the midpoint, return the index
    if (currMidValue === target) {
      return midIdx;
    }
    // If target is smaller than the midpoint value, narrow the search range to the left half
    else if (currMidValue > target) {
      right = midIdx - 1;
    }
    // If target is larger, narrow the search range to the right half
    else {
      left = midIdx + 1;
    }
  }

  // If the loop exits without finding the target, throw the 'not found' error
  throw notFound;
};
