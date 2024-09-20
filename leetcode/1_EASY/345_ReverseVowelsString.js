/**
 * Two-Pointer Approach
 * Time: O(n) - Single pass through the string
 * Space: O(n) - Due to the array created from the string
 * @param {string} s
 * @return {string}
 */
export const reverseVowels = (s) => {
  // Set containing vowels for quick lookup
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  // Helper function to check if a character is a vowel
  const isVowel = (char) => vowels.has(char);

  // Convert string to array to modify characters
  const sArr = [...s];

  let left = 0;
  let right = sArr.length - 1;

  // Two-pointer approach to swap vowels
  while (left < right) {
    const leftChar = sArr[left];
    const rightChar = sArr[right];

    // Swap if both left and right characters are vowels
    if (isVowel(leftChar) && isVowel(rightChar)) {
      [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
      left++;
      right--;
    } else {
      // Move the pointers when they are not vowels
      if (!isVowel(leftChar)) left++;
      if (!isVowel(rightChar)) right--;
    }
  }

  // Join the array back into a string and return the result
  return sArr.join('');
};

/**
 * NON two pointer approach
 * Time: O(n)
 * Space: O(n)
 * @param {string} s
 * @return {string}
 */
export const reverseVowelsNaive = (s) => {
  if (s.length === 1) return s;

  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const sArr = [...s];
  const foundVowelsReversedStack = sArr.filter((char) => vowels.has(char));

  for (let i = 0; i < sArr.length; i++) {
    if (vowels.has(sArr.at(i))) {
      sArr[i] = foundVowelsReversedStack.pop();
    }
  }

  return sArr.join('');
};
