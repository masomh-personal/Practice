export const abilityModifier = (constitution) => {
  const MAX_ALLOWED = 18;
  const MIN_ALLOWED = 3;

  // Ensure constitution score is within valid D&D range
  if (constitution < MIN_ALLOWED) {
    throw new Error(`Ability scores must be at least ${MIN_ALLOWED}`);
  }

  if (constitution > MAX_ALLOWED) {
    throw new Error(`Ability scores can be at most ${MAX_ALLOWED}`);
  }

  // Standard D&D ability modifier formula: (score - 10) / 2, rounded down
  return Math.floor((constitution - 10) / 2);
};

export class Character {
  #DEFAULT_HP = 10; // Base hitpoints before applying constitution modifier

  // Map to store ability scores, initialized to 0
  #STATS_MAP = new Map([
    ['str', 0],
    ['dex', 0],
    ['con', 0],
    ['int', 0],
    ['wis', 0],
    ['cha', 0],
    ['hp', 0],
  ]);

  constructor() {
    this.#init();
  }

  #init() {
    // Roll for each ability score except HP
    for (const stat of ['str', 'dex', 'con', 'int', 'wis', 'cha']) {
      const rolledScore = Character.rollAbility();
      this.#STATS_MAP.set(stat, rolledScore);
    }

    // Calculate HP using constitution modifier
    const constModifier = abilityModifier(this.constitution);
    this.#STATS_MAP.set('hp', this.#DEFAULT_HP + constModifier);
  }

  static rollAbility(allowedRolls = 4, maxDiceVal = 6) {
    let score = 0;
    let min = Infinity;

    // Simulate rolling `allowedRolls` number of dice and summing the highest 3
    for (let i = 0; i < allowedRolls; i++) {
      const randomScore = Math.floor(Math.random() * maxDiceVal) + 1; // Rolls a number between 1 and maxDiceVal (default 6)
      score += randomScore;
      min = Math.min(randomScore, min); // Track the lowest roll
    }

    return score - min; // Drop the lowest roll to calculate ability score
  }

  // Getters for ability scores
  get strength() {
    return this.#STATS_MAP.get('str');
  }
  get dexterity() {
    return this.#STATS_MAP.get('dex');
  }
  get constitution() {
    return this.#STATS_MAP.get('con');
  }
  get intelligence() {
    return this.#STATS_MAP.get('int');
  }
  get wisdom() {
    return this.#STATS_MAP.get('wis');
  }
  get charisma() {
    return this.#STATS_MAP.get('cha');
  }
  get hitpoints() {
    return this.#STATS_MAP.get('hp');
  }
}
