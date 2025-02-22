import { productExceptSelf, productExceptSelfNaive } from '../238_ProductArrayExceptSelf.js'; // Adjust the path as necessary

// Define test cases for Basic, Edge, and Special Cases
const testCases = [
  {
    description: 'positive numbers',
    input: [1, 2, 3, 4],
    expected: [24, 12, 8, 6],
  },
  {
    description: 'array containing a zero',
    input: [1, 2, 0, 4],
    expected: [0, 0, 8, 0],
  },
  {
    description: 'array with more than one zero',
    input: [0, 1, 2, 0],
    expected: [0, 0, 0, 0],
  },
  {
    description: 'array of length 2',
    input: [3, 4],
    expected: [4, 3],
  },
  {
    description: 'negative numbers',
    input: [-1, -2, -3, -4],
    expected: [-24, -12, -8, -6],
  },
  {
    description: 'all ones',
    input: [1, 1, 1, 1],
    expected: [1, 1, 1, 1],
  },
  {
    description: 'mix of positive and negative numbers',
    input: [1, -2, 3, -4],
    expected: [24, -12, 8, -6],
  },
];

// Shared Test Runner using test.each()
function runTests(implementationName, implementationFn) {
  describe(implementationName, () => {
    describe('Basic, Edge, and Special Cases', () => {
      test.each(testCases)(
        'should return the product of array except self for $description',
        ({ input, expected }) => {
          const result = implementationFn(input);
          expect(result).toEqual(expected);
        }
      );
    });
  });
}

// Run tests for both implementations using the shared test runner
runTests('Optimal Solution', productExceptSelf);
runTests('Naive Solution', productExceptSelfNaive);

// Extreme Performance Case: Combined Test
// Naive Solution - Large Input: 5.873 SECONDS
// Optimal Solution - Large Input: 1.99 MILLISECONDS!
describe.skip('Extreme Performance Cases', () => {
  it('should handle a large input size efficiently for both implementations', () => {
    const nums = Array(100_000).fill(1);

    // Test Naive Solution
    console.time('Naive Solution - Large Input');
    const naiveResult = productExceptSelfNaive(nums);
    console.timeEnd('Naive Solution - Large Input');

    // Test Optimal Solution
    console.time('Optimal Solution - Large Input');
    const optimalResult = productExceptSelf(nums);
    console.timeEnd('Optimal Solution - Large Input');

    // Both should produce the same output
    const expected = Array(100_000).fill(1);
    expect(naiveResult).toEqual(expected);
    expect(optimalResult).toEqual(expected);
  });
});
