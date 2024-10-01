/**
 * Sliding Window Approach (Optimized)
 *
 * Time: O(n)
 * Space: O(1)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
export const maxVowels = (s, k) => {
  const vowels = new Set('aeiou');

  let vowelCounter = 0;

  // Step 1: Initialize the window with the first 'k' characters
  for (let i = 0; i < k; i++) {
    const currChar = s[i];
    if (vowels.has(currChar)) {
      vowelCounter++;
    }
  }

  // Step 2: Set initial max vowels to the current count in the window
  let maxNumVowels = vowelCounter;

  // Step 3: Slide the window from index 'k' to the end of the string
  for (let i = k; i < s.length; i++) {
    const currChar = s[i]; // New character entering the window
    const oldFirstChar = s[i - k]; // Old character leaving the window

    // Add to vowel count if the new character is a vowel
    if (vowels.has(currChar)) {
      vowelCounter++;
    }

    // Subtract from vowel count if the old character is a vowel
    if (vowels.has(oldFirstChar)) {
      vowelCounter--;
    }

    // Update the maximum number of vowels found so far
    maxNumVowels = Math.max(maxNumVowels, vowelCounter);
  }

  return maxNumVowels;
};

/**
 * Sliding Window Approach (NAIVE, bad!)
 *
 * Time: O(n * k)
 * Space: O(k)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
export const maxVowelsNaive = (s, k) => {
  const vowels = new Set('aeiou');
  if (s.length === 1) return vowels.has(s) ? 1 : 0;

  let vowelCounter = 0;
  const windowStringArr = Array(k);

  // create initial window
  for (let i = 0; i < k; i++) {
    const currChar = s[i];
    if (vowels.has(currChar)) {
      vowelCounter++;
    }

    windowStringArr[i] = currChar;
  }

  let maxNumVowels = vowelCounter;

  // keep a sliding window and check vowel counter for max at each window change
  for (let i = k; i < s.length; i++) {
    const currChar = s[i];
    windowStringArr.shift();
    windowStringArr.push(currChar);
    vowelCounter = windowStringArr.filter((char) => vowels.has(char)).length;
    maxNumVowels = Math.max(maxNumVowels, vowelCounter);
  }

  return maxNumVowels;
};
