/**
 * STACK APPROACH
 * Time: O(n), where n is the length of the input string
 * Space: O(n), to store stacks and intermediate strings
 * @param {string} s
 * @return {string}
 */
export const decodeString = (s) => {
  let resultStr = ''; // to accumulate current section of the string as a single string
  const countStack = []; // to store repeat counts
  const stringStack = []; // to store previous sections of the string

  // Helper for checking if a character is a number
  const isNumber = (char) => !isNaN(char);

  let i = 0;
  while (i < s.length) {
    const currChar = s[i];

    if (isNumber(currChar)) {
      // Accumulate the entire number (in case it's more than one digit)
      let countNum = 0;
      while (isNumber(s[i])) {
        countNum = countNum * 10 + parseInt(s[i]); // parseInt() assumes base 10 by default
        i++;
      }
      // Push the number onto the count stack
      countStack.push(countNum);
    } else if (currChar === '[') {
      // Push the current string to the stringStack
      stringStack.push(resultStr);
      // Reset the resultStr for the new encoded part
      resultStr = '';
      i++;
    } else if (currChar === ']') {
      // Pop from the count stack and string stack
      const repeatTimes = countStack.pop();
      const prevString = stringStack.pop();
      // Repeat the current string and append to the previous string
      resultStr = prevString + resultStr.repeat(repeatTimes);
      i++;
    } else {
      // It's an alphabetic character, accumulate it directly into the result string
      resultStr += currChar;
      i++;
    }
  }

  return resultStr;
};

/**
 * RECURSIVE Approach
 * Time: O(n), where n is the length of the input string
 * Space: O(n), due to recursion and intermediate strings
 * @param {string} s
 * @return {string}
 */
export const decodeStringRecursive = (s) => {
  const decodeRec = (i) => {
    let resultStr = '';
    let countNum = 0;

    while (i < s.length) {
      const currChar = s[i];

      if (!isNaN(currChar)) {
        // It's a number
        countNum = countNum * 10 + parseInt(currChar);
      } else if (currChar === '[') {
        // Start of a nested section
        const [decodedStr, nextIndex] = decodeRec(i + 1); // Recursively decode the inner section
        resultStr += decodedStr.repeat(countNum);
        countNum = 0;
        i = nextIndex;
      } else if (currChar === ']') {
        // End of a section
        return [resultStr, i];
      } else {
        // It's a letter
        resultStr += currChar;
      }

      i++;
    }

    return [resultStr, i];
  };

  return decodeRec(0)[0]; // Start decoding from index 0
};
