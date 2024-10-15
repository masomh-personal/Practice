/**
 * QUEUE Like Approach
 * Time: O(n) - Every senator is processed once, either banned or pushed back into the queue.
 * Space: O(n) - Two arrays are used to store the indices of senators, each up to size n.
 * @param {string} senate
 * @return {string}
 */

export const predictPartyVictory = (senate) => {
  // Mapping party initials to full party names for the final return value
  const PARTY_NAMES = {
    R: 'Radiant',
    D: 'Dire',
  };

  // Two arrays to store the indices of the Radiant and Dire senators, respectively
  const radiantQueue = [];
  const direQueue = [];

  // Populate the queues with the initial positions of Radiant and Dire senators
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') {
      radiantQueue.push(i); // Store index of Radiant senator
    } else {
      direQueue.push(i); // Store index of Dire senator
    }
  }

  // Pointers to keep track of the current Radiant and Dire senators in the queue
  let radiantPointer = 0;
  let direPointer = 0;

  // The loop continues as long as both parties still have senators in the game
  while (radiantPointer < radiantQueue.length && direPointer < direQueue.length) {
    const radiantSenator = radiantQueue[radiantPointer]; // Current Radiant senator's index
    const direSenator = direQueue[direPointer]; // Current Dire senator's index

    // The senator with the lower index gets to ban the other senator.
    // Since this is round-based and senators reappear, we increment their index by senate.length to simulate future rounds.
    // NOTE: we could use .shift() here to simulate a queue, but .shift() is expensive at O(n)
    if (radiantSenator < direSenator) {
      // Radiant senator acts first because their index is smaller
      // Ban the current Dire senator, and push the Radiant senator to the next round
      radiantQueue.push(radiantSenator + senate.length);
    } else {
      // Dire senator acts first because their index is smaller
      // Ban the current Radiant senator, and push the Dire senator to the next round
      direQueue.push(direSenator + senate.length);
    }

    // After banning one senator, we move the pointer forward to the next available senator
    radiantPointer++;
    direPointer++;
  }

  // When one of the queues is empty, the other party wins
  return radiantPointer < radiantQueue.length ? PARTY_NAMES['R'] : PARTY_NAMES['D'];
};
