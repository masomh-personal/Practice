/**
 * 191. Number of 1 Bits (Easy: Leetcode)
 * NOTE: set bit is the binary representation of a number 1
 * Three different approaches
 * @param {number} n
 * @return {number}
 */
const hammingWeight = (n) => {
  let resultCount = 0;

  while (n) {
    if ((n & 1) === 1) resultCount++;

    n = n >> 1;
  }

  return resultCount;
};

const hammingWeightNaive = (n) => [...n.toString(2)].filter((bin) => bin === '1').length;

// Brian Kernighan's Algorithm, which is faster by reducing the number of iterations based on the number of set bits
const hammingWeightBKA = (n) => {
  let resultCount = 0;

  while (n) {
    n &= n - 1; // Clear the least significant set bit
    resultCount++;
  }

  return resultCount;
};

/**
 * 339. Counting Bits
 * Given an integer n, return an array 'ans' of length n + 1 such that for each
 * i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of
 * i.
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
  // Initialize an array of length n + 1, filled with 0
  // resultArr[i] will hold the number of 1's in the binary representation of i
  const resultArr = Array(n + 1).fill(0);

  // Loop from 1 to n to compute the number of 1 bit for each number
  for (let i = 1; i <= n; i++) {
    // Use dynamic programming:
    // resultArr[i >> 1] gives the count for i // 2 ('i' shifted right by 1)
    // (i & 1) checks if the least significant bit is 1 (i.e., if 'i' is odd)
    resultArr[i] = resultArr[i >> 1] + (i & 1);
  }

  // Return the filled array containing the count of 1's for each number
  return resultArr;
};

const countBitsNaive = function (n) {
  const resultArr = Array(n + 1).fill(0);
  const setBitCounter = (num) => {
    let resultCount = 0;

    while (num) {
      num &= num - 1;
      resultCount++;
    }

    return resultCount;
  };

  for (let i = 1; i <= n; i++) {
    resultArr[i] = setBitCounter(i);
  }

  return resultArr;
};

/**
 * 190. Reverse Bits
 * Get reverse given 32 bits unsigned integer.
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    // Shift result left and add the least significant bit of n
    result = (result << 1) | (n & 1);

    // Shift n to the right to process the next bit
    n = n >>> 1;
  }

  // Convert result to unsigned 32-bit integer
  return result >>> 0;
};

const reverseBitsNaive = function (n) {
  const reversed = Array.from((n >>> 0).toString(2).padStart(32, '0'))
    .reverse()
    .join('');
  return parseInt(reversed, 2);
};

// ==========================================================================================
export {
  hammingWeight,
  hammingWeightBKA,
  hammingWeightNaive,
  reverseBitsNaive,
  reverseBits,
  countBits,
  countBitsNaive,
};
