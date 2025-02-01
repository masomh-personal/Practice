export class RandomizedSet {
  #arr = [];
  #valToIdxMap = new Map();

  // Expose internal state for debugging or testing if needed.
  get arr() {
    return this.#arr;
  }

  // Private helper to swap the element at the specified index with the last element,
  // then remove the last element for O(1) deletion.
  #swapToEndAndPop(idxToSwap) {
    const arr = this.#arr;
    const lastIdx = arr.length - 1;

    // Only perform a swap and update the map if the element to remove is not the last one.
    if (idxToSwap !== lastIdx) {
      // Update the mapping for the element at the last index, which will move to idxToSwap.
      this.#valToIdxMap.set(arr[lastIdx], idxToSwap);
      [arr[idxToSwap], arr[lastIdx]] = [arr[lastIdx], arr[idxToSwap]];
    }
    // Remove the last element, which is either the element to remove (if already last)
    // or the element that was swapped.
    arr.pop();
  }

  // Private helper to return a random index within the current array bounds.
  #getRandomIdx() {
    const n = this.#arr.length;
    if (n === 0) {
      throw new Error('No elements in RandomizedSet, nothing to return!');
    }

    // Generate a random index in the range [0, n-1].
    return Math.floor(Math.random() * n);
  }

  // Inserts newVal into the set if it is not already present.
  // Returns true if the insertion was successful, false otherwise.
  insert(newVal) {
    if (this.#valToIdxMap.has(newVal)) return false;

    this.#valToIdxMap.set(newVal, this.#arr.length);
    this.#arr.push(newVal);
    return true;
  }

  // Removes valToRemove from the set if present.
  // Returns true if the removal was successful, false otherwise.
  remove(valToRemove) {
    if (!this.#valToIdxMap.has(valToRemove)) return false;

    const idxToRemove = this.#valToIdxMap.get(valToRemove);

    // Remove the element from the mapping.
    this.#valToIdxMap.delete(valToRemove);

    // Swap the element to remove with the last element and pop it from the array.
    this.#swapToEndAndPop(idxToRemove);
    return true;
  }

  // Returns a random element from the set.
  getRandom() {
    return this.#arr[this.#getRandomIdx()];
  }
}
