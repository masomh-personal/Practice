import {
  singleNumber as singleNumberXOR,
  singleNumberV2 as singleNumberHashMap,
} from '../136_Singlenumber.js';

describe('Leetcode #136: Single Number', () => {
  const testCases = [
    { description: 'All other numbers appear twice', nums: [2, 2, 1], expected: 1 },
    {
      description: 'Multiple duplicates in an unordered array',
      nums: [4, 1, 2, 1, 2],
      expected: 4,
    },
    { description: 'Single negative number with duplicates', nums: [-1, -2, -2], expected: -1 },
    { description: 'Mix of positive and negative numbers', nums: [-3, 1, -3, 2, 2], expected: 1 },
    { description: 'Only one element in the array', nums: [42], expected: 42 },
    { description: 'Large unordered array', nums: [7, 3, 5, 7, 3, 5, 9], expected: 9 },
  ];

  const implementations = [
    { name: 'XOR approach (O(1) space)', fn: singleNumberXOR },
    { name: 'HashMap Counter approach (O(n) space)', fn: singleNumberHashMap },
  ];

  implementations.forEach(({ name, fn }) => {
    describe(`Using ${name}`, () => {
      testCases.forEach(({ description, nums, expected }) => {
        it(`should return ${expected} when ${description}`, () => {
          const result = fn(nums);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
