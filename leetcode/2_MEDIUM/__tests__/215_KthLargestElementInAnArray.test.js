import {
  findKthLargest,
  findKthLargestCountSort,
  findKthLargestNaive,
} from '../215_KthLargestElementInAnArray.js';

// test/findKthLargest.test.js

describe('Kth Largest Element in an Array', () => {
  // Test cases to cover a range of scenarios for both functions
  const testCases = [
    { nums: [3, 2, 1, 5, 6, 4], k: 2, expected: 5 },
    { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4, expected: 4 },
    { nums: [7, 10, 4, 3, 20, 15], k: 6, expected: 3 },
    { nums: [1], k: 1, expected: 1 },
    { nums: [2, 2, 2, 2], k: 2, expected: 2 },
    { nums: Array.from({ length: 10000 }, (_, i) => i + 1), k: 9999, expected: 2 },
    { nums: [-1, -2, -3, -4, -5], k: 2, expected: -2 },
    { nums: [3, -1, -2, 6, 4, 2], k: 3, expected: 3 },
  ];

  describe('findKthLargest (MaxHeap Approach)', () => {
    testCases.forEach(({ nums, k, expected }, idx) => {
      it(`should return ${expected} for test case ${idx + 1}`, () => {
        expect(findKthLargest([...nums], k)).toBe(expected); // Pass a copy of nums
      });
    });
  });

  describe('findKthLargestNaive (Sorting Approach)', () => {
    testCases.forEach(({ nums, k, expected }, idx) => {
      it(`should return ${expected} for test case ${idx + 1}`, () => {
        expect(findKthLargestNaive([...nums], k)).toBe(expected); // Pass a copy of nums
      });
    });
  });

  describe('findKthLargestNaive (Count Sort Approach - Most efficient)', () => {
    testCases.forEach(({ nums, k, expected }, idx) => {
      it(`should return ${expected} for test case ${idx + 1}`, () => {
        expect(findKthLargestCountSort([...nums], k)).toBe(expected); // Pass a copy of nums
      });
    });
  });
});
