import { SmallestInfiniteSet } from '../2336_SmallestNumberInInfiniteSet.js';

describe('SmallestInfiniteSet', () => {
  it('should handle the provided example correctly', () => {
    const smallestInfiniteSet = new SmallestInfiniteSet();

    // Add 2 back to the set (no effect since it's already in the set)
    smallestInfiniteSet.addBack(2);

    // Pop the smallest number (1)
    let result = smallestInfiniteSet.popSmallest();
    let expected = 1;
    expect(result).toBe(expected);

    // Pop the smallest number (2)
    result = smallestInfiniteSet.popSmallest();
    expected = 2;
    expect(result).toBe(expected);

    // Pop the smallest number (3)
    result = smallestInfiniteSet.popSmallest();
    expected = 3;
    expect(result).toBe(expected);

    // Add 1 back to the set
    smallestInfiniteSet.addBack(1);

    // Pop the smallest number (1, since it was added back)
    result = smallestInfiniteSet.popSmallest();
    expected = 1;
    expect(result).toBe(expected);

    // Pop the smallest number (4)
    result = smallestInfiniteSet.popSmallest();
    expected = 4;
    expect(result).toBe(expected);

    // Pop the smallest number (5)
    result = smallestInfiniteSet.popSmallest();
    expected = 5;
    expect(result).toBe(expected);
  });

  it('should handle adding numbers back correctly', () => {
    const smallestInfiniteSet = new SmallestInfiniteSet();

    // Pop several numbers
    smallestInfiniteSet.popSmallest(); // Removes 1
    smallestInfiniteSet.popSmallest(); // Removes 2
    smallestInfiniteSet.popSmallest(); // Removes 3

    // Add 2 and 3 back to the set
    smallestInfiniteSet.addBack(2);
    smallestInfiniteSet.addBack(3);

    // Pop the smallest number (2, since it was added back)
    let result = smallestInfiniteSet.popSmallest();
    let expected = 2;
    expect(result).toBe(expected);

    // Pop the smallest number (3, since it was added back)
    result = smallestInfiniteSet.popSmallest();
    expected = 3;
    expect(result).toBe(expected);

    // Pop the smallest number (4, next smallest available)
    result = smallestInfiniteSet.popSmallest();
    expected = 4;
    expect(result).toBe(expected);
  });

  it('should not add duplicate numbers back into the set', () => {
    const smallestInfiniteSet = new SmallestInfiniteSet();

    // Pop 1 and 2
    smallestInfiniteSet.popSmallest();
    smallestInfiniteSet.popSmallest();

    // Add 1 back twice
    smallestInfiniteSet.addBack(1);
    smallestInfiniteSet.addBack(1);

    // Pop the smallest number (1, only once)
    let result = smallestInfiniteSet.popSmallest();
    let expected = 1;
    expect(result).toBe(expected);

    // Pop the next smallest number (3)
    result = smallestInfiniteSet.popSmallest();
    expected = 3;
    expect(result).toBe(expected);
  });

  it('should handle adding back and popping efficiently with large inputs', () => {
    const smallestInfiniteSet = new SmallestInfiniteSet();

    // Step 1: Pop a significant portion of the numbers
    for (let i = 0; i < 500; i++) {
      smallestInfiniteSet.popSmallest(); // Removes 1 to 500
    }

    // Step 2: Add back a subset of numbers in random order
    const numbersToAddBack = [10, 15, 20, 25, 5, 30];
    numbersToAddBack.forEach((num) => {
      smallestInfiniteSet.addBack(num);
    });

    // Step 3: Pop and verify the order remains correct
    const expectedPops = [5, 10, 15, 20, 25, 30, 501]; // Added numbers first, then next smallest (501)
    for (let expected of expectedPops) {
      const result = smallestInfiniteSet.popSmallest();
      expect(result).toBe(expected);
    }

    // Step 4: Stress-test adding back large numbers and popping
    for (let i = 1000; i > 950; i--) {
      smallestInfiniteSet.addBack(i); // Add back numbers in reverse order
    }

    // Pop all remaining numbers to verify heap correctness
    let prev = -1; // To ensure the heap always pops in increasing order
    while (!smallestInfiniteSet.isEmpty()) {
      const current = smallestInfiniteSet.popSmallest();
      expect(current).toBeGreaterThan(prev); // Ensure numbers are in ascending order
      prev = current;
    }
  });
});
