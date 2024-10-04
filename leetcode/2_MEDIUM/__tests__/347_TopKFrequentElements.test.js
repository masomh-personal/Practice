import {
  topKFrequentMinHeap,
  topKFrequentNaive,
  topKFrequentBucketSort,
} from '../347_TopKFrequentElements.js';

describe('Top K Frequent Elements', () => {
  // Test data
  const nums1 = [1, 1, 1, 2, 2, 3]; // Test case with different frequencies
  const nums2 = [4, 4, 4, 6, 6, 2, 2, 2, 2]; // Test case with top element having frequency 4
  const nums3 = [1, 2, 3, 4, 5]; // All elements have the same frequency (1)
  const nums4 = [10000]; // Single element test case

  const top2 = 2; // For selecting top 2 frequent elements
  const top1 = 1; // For selecting top 1 frequent element
  const top3 = 3; // For selecting top 3 frequent elements

  describe('MinHeap approach', () => {
    it('should return the top 2 frequent elements using MinHeap approach', () => {
      const result = topKFrequentMinHeap(nums1, top2);
      expect(result).toEqual(expect.arrayContaining([1, 2])); // The result can be [1, 2] in any order
    });

    it('should handle a case where k = 1 using MinHeap approach', () => {
      const result = topKFrequentMinHeap(nums2, top1);
      expect(result).toEqual(expect.arrayContaining([2])); // The most frequent element is 2
    });

    it('should handle a case where all elements have the same frequency using MinHeap approach', () => {
      const result = topKFrequentMinHeap(nums3, top3);
      expect(result.length).toBe(top3);
      expect(result.every((e) => nums3.includes(e))).toBe(true); // Check that the result elements are from nums3
    });

    it('should handle a single element using MinHeap approach', () => {
      const result = topKFrequentMinHeap(nums4, top1);
      expect(result).toEqual([10000]);
    });
  });

  describe('Naive approach', () => {
    it('should return the top 2 frequent elements using naive approach', () => {
      const result = topKFrequentNaive(nums1, top2);
      expect(result).toEqual(expect.arrayContaining([1, 2])); // The result can be [1, 2] in any order
    });

    it('should handle a case where k = 1 using naive approach', () => {
      const result = topKFrequentNaive(nums2, top1);
      expect(result).toEqual(expect.arrayContaining([2])); // The most frequent element is 2
    });

    it('should handle a case where all elements have the same frequency using naive approach', () => {
      const result = topKFrequentNaive(nums3, top3);
      expect(result.length).toBe(top3);
      expect(result.every((e) => nums3.includes(e))).toBe(true); // Check that the result elements are from nums3
    });

    it('should handle a single element using naive approach', () => {
      const result = topKFrequentNaive(nums4, top1);
      expect(result).toEqual([10000]);
    });
  });

  describe('Optimal bucket sort approach', () => {
    it('should return the top 2 frequent elements using bucket sort approach', () => {
      const result = topKFrequentBucketSort(nums1, top2);
      expect(result).toEqual(expect.arrayContaining([1, 2])); // The result can be [1, 2] in any order
    });

    it('should handle a case where k = 1 using bucket sort approach', () => {
      const result = topKFrequentBucketSort(nums2, top1);
      expect(result).toEqual(expect.arrayContaining([2])); // The most frequent element is 2
    });

    it('should handle a case where all elements have the same frequency using bucket sort approach', () => {
      const result = topKFrequentBucketSort(nums3, top3);
      expect(result.length).toBe(top3);
      expect(result.every((e) => nums3.includes(e))).toBe(true); // Check that the result elements are from nums3
    });

    it('should handle a single element using bucket sort approach', () => {
      const result = topKFrequentBucketSort(nums4, top1);
      expect(result).toEqual([10000]);
    });
  });
});
