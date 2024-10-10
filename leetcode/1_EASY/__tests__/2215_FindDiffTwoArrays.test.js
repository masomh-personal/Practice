import {
  findDifference,
  findDifferenceReduce,
  findDifferenceSetFilter,
} from '../2215_FindDiffTwoArrays.js'; // Make sure to replace 'yourFileName' with the actual file name

describe('findDifference and findDifferenceReduce', () => {
  const testCases = [
    {
      nums1: [1, 2, 3],
      nums2: [2, 4, 6],
      expected: [
        [1, 3],
        [4, 6],
      ],
    },
    {
      nums1: [1, 2, 3, 3],
      nums2: [1, 1, 2, 2],
      expected: [[3], []],
    },
    {
      nums1: [1, 2, 3],
      nums2: [1, 2, 3],
      expected: [[], []],
    },
    {
      nums1: [],
      nums2: [4, 5, 6],
      expected: [[], [4, 5, 6]],
    },
    {
      nums1: [4, 5, 6],
      nums2: [],
      expected: [[4, 5, 6], []],
    },
    {
      nums1: [-1, -2, -3],
      nums2: [-2, -4, -6],
      expected: [
        [-1, -3],
        [-4, -6],
      ],
    },
    {
      nums1: Array.from({ length: 1000 }, (_, i) => i),
      nums2: Array.from({ length: 1000 }, (_, i) => i + 1000),
      expected: [
        Array.from({ length: 1000 }, (_, i) => i),
        Array.from({ length: 1000 }, (_, i) => i + 1000),
      ],
    },
  ];

  testCases.forEach(({ nums1, nums2, expected }, index) => {
    it(`findDifference - test case #${index + 1}`, () => {
      const result = findDifference(nums1, nums2);
      expect(result).toEqual(expected);
    });

    it(`findDifferenceReduce - test case #${index + 1}`, () => {
      const result = findDifferenceReduce(nums1, nums2);
      expect(result).toEqual(expected);
    });

    it(`findDifferenceFilter - test case #${index + 1}`, () => {
      const result = findDifferenceSetFilter(nums1, nums2);
      expect(result).toEqual(expected);
    });
  });
});
