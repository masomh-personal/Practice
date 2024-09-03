/**
 * 12. Integer to Roman (Medium)
 * Time: O(1) as it only iterates over the fixed amount of symbols
 * Space: O(1) since the space used is constant and independent of the input
 * @param {number} num - The integer to convert to a Roman numeral
 * @return {string} - The Roman numeral representation of the input integer
 */
export const intToRoman = (num) => {
  // Array of Roman numeral symbols paired with their corresponding values
  // Order matters because we need to check higher values first
  const symbolArrMap = [
    ['I', 1],
    ['IV', 4],
    ['V', 5],
    ['IX', 9],
    ['X', 10],
    ['XL', 40],
    ['L', 50],
    ['XC', 90],
    ['C', 100],
    ['CD', 400],
    ['D', 500],
    ['CM', 900],
    ['M', 1_000],
  ];

  // Reduce the array in reverse order to build the Roman numeral string
  return symbolArrMap
    .reduceRight((resultStrArr, [symbol, numCheckVal]) => {
      // Calculate how many times the current Roman symbol fits into num
      const remainder = (num / numCheckVal) | 0;

      // If remainder is positive, push the symbols into the array to be joined at end
      if (remainder) {
        resultStrArr.push(symbol.repeat(remainder));
      }

      // Reduce num by the accumulated value so far
      num %= numCheckVal;

      return resultStrArr;
    }, [])
    .join(''); // Start with an empty string
};

/**
 * Converts an integer to a Roman numeral.
 * @param {number} num - The integer to convert to a Roman numeral
 * @return {string} - The Roman numeral representation of the input integer
 */
export const intToRomanV2 = (num) => {
  // Array of Roman numeral symbols paired with their corresponding values.
  // Order matters because we need to check higher values first to correctly form the numeral.
  const symbolArrMap = [
    ['M', 1000], // 1000 -> 'M'
    ['CM', 900], // 900 -> 'CM'
    ['D', 500], // 500 -> 'D'
    ['CD', 400], // 400 -> 'CD'
    ['C', 100], // 100 -> 'C'
    ['XC', 90], // 90 -> 'XC'
    ['L', 50], // 50 -> 'L'
    ['XL', 40], // 40 -> 'XL'
    ['X', 10], // 10 -> 'X'
    ['IX', 9], // 9 -> 'IX'
    ['V', 5], // 5 -> 'V'
    ['IV', 4], // 4 -> 'IV'
    ['I', 1], // 1 -> 'I'
  ];

  const resultArr = [];

  // Iterate over each symbol and its corresponding value
  for (const [symbol, numCheckVal] of symbolArrMap) {
    // While the current number is greater than or equal to the value,
    // push the corresponding Roman symbol to the result array and reduce the number
    while (num >= numCheckVal) {
      resultArr.push(symbol); // Collect the Roman symbol
      num -= numCheckVal; // Subtract the value from the number
    }
  }

  return resultArr.join('');
};
