/**
 * Time: O(log n) - because of binary search
 * Space: O(1) - constant space as we are not creating an array, just simply using integers
 * @param {number} n
 * @param {function} guess
 * @return {number}
 */
export const guessNumber = (n, guess) => {
  let left = 1;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const guessResult = guess(mid);

    switch (guessResult) {
      case 0:
        return mid; // correct guess
      case -1:
        right = mid - 1; // the target is smaller
        break;
      case 1:
        left = mid + 1; // the target is larger
        break;
    }
  }
};
