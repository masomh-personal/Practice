export default class ArrayUtils {
  /**
   * Creates a random INTEGER array of size 'size' in no particular order.
   * Defaults:
   * - size: 10
   * - intCeiling: size * 10
   *
   * @param size - The size of the array (default: 10).
   * @param intCeiling - The upper bound for the random integers (default: size * 10).
   * @returns An array of random integers.
   */
  static createRandomIntegerArr = (size: number = 10, intCeiling: number = size * 10): number[] => {
    const MAX_ARR_SIZE: number = 1e6;
    if (size > MAX_ARR_SIZE) {
      throw new RangeError(`Provided size: ${size} is too large and may cause stack overflow`);
    }

    const arr: number[] = new Array(size);

    for (let i = 0; i < size; i++) {
      arr[i] = Math.floor(Math.random() * intCeiling);
    }

    return arr;
  };
}
