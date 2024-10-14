export class RecentCounterNaive {
  #requests = []; // Private field to store all the incoming requests (timestamps in milliseconds)
  #MS_LIMIT = 3000; // The time limit in milliseconds (3000ms = 3 seconds)

  /**
   * Adds a new request at the given time and returns the number of requests
   * that occurred in the last 3000 milliseconds, including the new request.
   *
   * @param {number} time - The timestamp of the new request in milliseconds.
   * @return {number} - The number of requests that have occurred within the last 3000 milliseconds.
   */
  ping(time) {
    // Add the new request time to the requests array.
    this.#requests.push(time);

    // Calculate the oldest valid request time for the 3000ms window.
    const oldestAllowedTime = this.#peekLastRequest() - this.#MS_LIMIT;

    // Get the timestamp of the first request in the array (oldest).
    let currReqTime = this.#requests[0];

    // Remove all requests from the array that are older than 3000ms from the current request.
    // Keep shifting the array (removing the oldest element) until the first element is within the time window.
    while (currReqTime < oldestAllowedTime) {
      // For the problem constraints (n = 10^4), this is still efficient, but a queue is ideal
      this.#requests.shift(); // Remove the oldest request (this is an O(n) operation)
      currReqTime = this.#requests[0]; // Update the current first request in the array
    }

    // Return the number of valid requests (the length of the array after removal of old requests).
    return this.#getLength();
  }

  /**
   * Helper method to get the timestamp of the most recent request.
   * @return {number} - The timestamp of the most recent request.
   */
  #peekLastRequest() {
    return this.#requests.at(-1); // Access the last element in the requests array
  }

  /**
   * Helper method to return the number of requests currently stored in the array.
   * @return {number} - The length of the requests array.
   */
  #getLength() {
    return this.#requests.length; // Return the number of valid requests in the array
  }
}

/**
 * QUEUE like approach
 * JS doesn't have a native queue
 * NOTE: we could create a LinkedList + Queue Class
 * In this approach, we can use binary search to find the index that doesn't pass test
 */
export class RecentCounter {
  #queue = [];
  #MS_LIMIT = 3000; // The time limit in milliseconds (3000ms = 3 seconds)

  /**
   * Adds a new request and returns the number of requests in the past 3000 milliseconds.
   * @param {number} time
   * @return {number}
   */
  ping(time) {
    // Add the new request time to the queue (enqueue)
    this.#queue.push(time);

    // Calculate the oldest valid request time within the 3000ms window
    const oldestAllowedTime = time - this.#MS_LIMIT;

    // Use binary search to find the index of the first valid request within the time window
    const validStartIndex = this.#binarySearch(oldestAllowedTime);

    // Return the number of valid requests
    return this.#queue.length - validStartIndex;
  }

  /**
   * Binary search helper function to find the index of the first request within the time window.
   * @param {number} oldestAllowedTime - The earliest allowed time within the 3000ms window.
   * @return {number} - The index of the first request that is within the 3000ms window.
   */
  #binarySearch(oldestAllowedTime) {
    let left = 0;
    let right = this.#queue.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (this.#queue[mid] < oldestAllowedTime) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    // After the loop, `left` will be the index of the first valid request
    return left;
  }
}
