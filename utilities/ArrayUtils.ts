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

  /**
   * Swaps two elements at two different indices within the same array
   * NOTE: added guard clauses for out of bound indices or if the same index was provided
   *
   * @param arr - The array containing the elements to swap
   * @param idx1 - The index of the first element
   * @param idx2 - The index of the second element
   */
  static swap = <T>(arr: T[], idx1: number, idx2: number): void => {
    // Guard clauses: out of bounds
    const isOutOfBounds: boolean = [idx1, idx2].some(
      (idx: number): boolean => idx < 0 || idx >= arr.length
    );

    if (isOutOfBounds) {
      throw new RangeError('One or both provided indices are out of bounds of the array!');
    }

    // Guard clause: if indices are the same, just return
    if (idx1 === idx2) return;

    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
}
