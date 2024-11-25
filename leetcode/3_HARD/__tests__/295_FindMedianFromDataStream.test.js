import { MedianFinder, MedianFinderNaive } from '../295_FindMedianFromDataStream.js';

// Test suite for MedianFinder implementations
describe('MedianFinder Implementations', () => {
  let medianFinderNaive;
  let medianFinderOptimized;

  // Initialize new MedianFinder objects for both implementations before each test case
  beforeEach(() => {
    medianFinderNaive = new MedianFinderNaive();
    medianFinderOptimized = new MedianFinder();
  });

  // Function to test both implementations with identical logic
  const testMedianFinder = (implementationName, medianFinderFactory) => {
    describe(`${implementationName}`, () => {
      let medianFinder;

      beforeEach(() => {
        medianFinder = medianFinderFactory();
      });

      describe('Basic Functionality', () => {
        it('should correctly find the median after each operation', () => {
          medianFinder.addNum(1); // arr = [1]
          medianFinder.addNum(2); // arr = [1, 2]
          let result = medianFinder.findMedian();
          let expected = 1.5; // (1 + 2) / 2
          expect(result).toBeCloseTo(expected, 5);

          medianFinder.addNum(3); // arr = [1, 2, 3]
          result = medianFinder.findMedian();
          expected = 2.0; // Middle value in [1, 2, 3]
          expect(result).toBeCloseTo(expected, 5);
        });
      });

      describe('Edge Cases', () => {
        it('should handle a single element', () => {
          medianFinder.addNum(42); // arr = [42]
          let result = medianFinder.findMedian();
          let expected = 42.0; // Only element is the median
          expect(result).toBeCloseTo(expected, 5);
        });

        it('should handle even numbers of elements', () => {
          medianFinder.addNum(10); // arr = [10]
          medianFinder.addNum(20); // arr = [10, 20]
          let result = medianFinder.findMedian();
          let expected = 15.0; // (10 + 20) / 2
          expect(result).toBeCloseTo(expected, 5);
        });

        it('should handle negative numbers', () => {
          medianFinder.addNum(-5); // arr = [-5]
          medianFinder.addNum(-10); // arr = [-10, -5]
          let result = medianFinder.findMedian();
          let expected = -7.5; // (-10 + -5) / 2
          expect(result).toBeCloseTo(expected, 5);
        });

        it('should handle a mix of positive and negative numbers', () => {
          medianFinder.addNum(-1); // arr = [-1]
          medianFinder.addNum(3); // arr = [-1, 3]
          medianFinder.addNum(2); // arr = [-1, 2, 3]
          let result = medianFinder.findMedian();
          let expected = 2.0; // Middle value in [-1, 2, 3]
          expect(result).toBeCloseTo(expected, 5);
        });

        it('should handle duplicates', () => {
          medianFinder.addNum(5); // arr = [5]
          medianFinder.addNum(5); // arr = [5, 5]
          medianFinder.addNum(5); // arr = [5, 5, 5]
          let result = medianFinder.findMedian();
          let expected = 5.0; // Median of [5, 5, 5]
          expect(result).toBeCloseTo(expected, 5);
        });
      });

      describe('Performance', () => {
        it('should handle large numbers', () => {
          medianFinder.addNum(1e5); // arr = [100000]
          medianFinder.addNum(-1e5); // arr = [-100000, 100000]
          let result = medianFinder.findMedian();
          let expected = 0.0; // (-100000 + 100000) / 2
          expect(result).toBeCloseTo(expected, 5);
        });

        it('should handle stress testing with up to 10 elements', () => {
          const nums = [9, 2, 7, 4, 6, 1, 8, 3, 10, 5];
          nums.forEach((num) => medianFinder.addNum(num));
          let result = medianFinder.findMedian();
          let expected = 5.5; // Median of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          expect(result).toBeCloseTo(expected, 5);
        });
      });
    });
  };

  // Run tests for both implementations
  testMedianFinder('Naive Approach', () => new MedianFinderNaive());
  testMedianFinder('Optimized Approach', () => new MedianFinder());
});
