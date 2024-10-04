class MinHeap347 {
  #heap = [];

  // Public Methods

  /**
   * Insert a new value into the heap while maintaining the heap property.
   * If the heap size exceeds the specified limit, remove the smallest element.
   * @param {[number, number]} mapEntry - The value to be inserted, [key, frequency].
   * @param {number} k - The size limit of the heap.
   */
  insert(mapEntry, k) {
    this.#heap.push(mapEntry);

    const n = this.#heap.length;
    if (n > 1) {
      this.#bubbleUp(n - 1);
    }

    // If the heap exceeds size k, remove the smallest element
    if (this.#heap.length > k) {
      this.extractMin();
    }
  }

  /**
   * Extract the minimum value from the heap and return it.
   * The last element replaces the root, and the heap is restructured by "bubbling down".
   * @returns {[number, number]} - The extracted map entry [key, frequency].
   */
  extractMin() {
    if (this.#heap.length === 0) return null;

    this.#swap(0, this.#heap.length - 1);
    const min = this.#heap.pop();
    this.#bubbleDown(0);

    return min;
  }

  getHeapArr() {
    return this.#heap;
  }

  // Private Methods

  #swap(idx1, idx2) {
    [this.#heap[idx1], this.#heap[idx2]] = [this.#heap[idx2], this.#heap[idx1]];
  }

  #getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  #getChildrenIndices(idx) {
    return [2 * idx + 1, 2 * idx + 2];
  }

  #bubbleUp(childIdx) {
    while (childIdx > 0) {
      let parentIdx = this.#getParentIdx(childIdx);

      const [, parentFreq] = this.#heap.at(parentIdx);
      const [, childFreq] = this.#heap.at(childIdx);

      // MinHeap: If the parent is smaller, the heap property is satisfied
      if (parentFreq <= childFreq) break;

      this.#swap(parentIdx, childIdx);
      childIdx = parentIdx;
    }
  }

  #bubbleDown(parentIdx) {
    while (parentIdx < this.#heap.length) {
      let [leftChildIdx, rightChildIdx] = this.#getChildrenIndices(parentIdx);

      let parentFreq = this.#heap.at(parentIdx)[1];
      let leftChildFreq =
        leftChildIdx < this.#heap.length ? this.#heap.at(leftChildIdx)[1] : Infinity;
      let rightChildFreq =
        rightChildIdx < this.#heap.length ? this.#heap.at(rightChildIdx)[1] : Infinity;

      if (parentFreq <= leftChildFreq && parentFreq <= rightChildFreq) break;

      const smallerChildIdx = leftChildFreq < rightChildFreq ? leftChildIdx : rightChildIdx;

      this.#swap(parentIdx, smallerChildIdx);

      parentIdx = smallerChildIdx;
    }
  }
}

/**
 * MinHeap implementation to find the top K frequent elements
 * Time: O(n log k)
 * Space: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export const topKFrequentMinHeap = (nums, k) => {
  if (nums.length === 1) return [nums[0]];

  const minHeap = new MinHeap347();
  const freqMap = nums.reduce((acc, num) => acc.set(num, (acc.get(num) ?? 0) + 1), new Map());

  // Insert each entry [num, frequency] into the min heap, ensuring it never exceeds size k
  for (const mapEntry of freqMap) {
    minHeap.insert(mapEntry, k);
  }

  // Extract the top K frequent elements from the heap
  return minHeap.getHeapArr().map(([key]) => key);
};

/**
 * Naive approach using frequency map and sorting
 * Time: O(n log n)
 * Space: O(n)
 * @param {number[]} nums - Array of integers
 * @param {number} k - Number of most frequent elements to return
 * @return {number[]} - Top k most frequent elements
 */
export const topKFrequentNaive = (nums, k) => {
  // Edge case: if nums contains only one element, return that element as the result
  if (nums.length === 1) return [nums[0]];

  // Step 1: Create a frequency map using reduce.
  // The map will store each number as the key and its frequency as the value.
  // Example: [1,1,1,2,2,3] -> Map {1 => 3, 2 => 2, 3 => 1}
  const freqMapEntries = nums
    .reduce((acc, num) => acc.set(num, (acc.get(num) ?? 0) + 1), new Map())
    .entries(); // Convert the map into an iterable of key-value pairs (entries).

  // Step 2: Convert the frequency map to an array, sort it by frequency in descending order.
  // The array will be sorted by the value (frequency) part of each entry.
  // Example: [[1, 3], [2, 2], [3, 1]] -> sorted -> [[1, 3], [2, 2], [3, 1]]
  return Array.from(freqMapEntries)
    .sort(([, a], [, b]) => b - a) // Sort by frequency (a and b are the values, i.e., the frequencies)
    .map(([key]) => key) // Extract the keys (numbers) from the sorted entries
    .slice(0, k); // Return only the first k elements (top k frequent numbers)
};

/**
 * Optimal bucket sort approach to find the top K frequent elements
 * Time Complexity: O(n), where n is the number of elements in the input array.
 * Space Complexity: O(n), where n is the size of the input array.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export const topKFrequentBucketSort = (nums, k) => {
  if (nums.length === 1) return [nums[0]];

  // Step 1: Calculate the frequency of each element
  const freqMap = nums.reduce((acc, num) => acc.set(num, (acc.get(num) ?? 0) + 1), new Map());

  // Step 2: Create an array of buckets where the index represents frequency
  // Example: [1,1,1,1,1,1] length = 6 and the frequency is 6, so buckets[6] = [1]
  const maxBucketArrSize = nums.length + 1;
  const buckets = Array.from({ length: maxBucketArrSize }, () => []); // Initialize all buckets with empty arrays

  // Step 3: Place each number into the bucket that corresponds to its frequency
  for (const [numKey, freqVal] of freqMap) {
    buckets[freqVal].push(numKey); // Directly push into the bucket since it's already initialized
  }

  // Step 4: Collect the top K frequent elements by iterating the buckets from the highest frequency (backwards)
  // Multiple numbers can have the same frequency, but we need exactly K elements
  const result = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
      if (result.length >= k) break; // Stop once we have enough elements
    }
  }

  return result.slice(0, k); // Ensure we return exactly k elements
};
