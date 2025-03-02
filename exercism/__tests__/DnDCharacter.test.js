import { Character, abilityModifier } from '../DnDCharacter.js';

describe('D&D Character', () => {
  describe('Ability modifier', () => {
    it('ability modifier for score 3 is -4', () => {
      expect(abilityModifier(3)).toEqual(-4);
    });

    it('ability modifier for score 4 is -3', () => {
      expect(abilityModifier(4)).toEqual(-3);
    });

    it('ability modifier for score 5 is -3', () => {
      expect(abilityModifier(5)).toEqual(-3);
    });

    it('ability modifier for score 6 is -2', () => {
      expect(abilityModifier(6)).toEqual(-2);
    });

    it('ability modifier for score 7 is -2', () => {
      expect(abilityModifier(7)).toEqual(-2);
    });

    it('ability modifier for score 8 is -1', () => {
      expect(abilityModifier(8)).toEqual(-1);
    });

    it('ability modifier for score 9 is -1', () => {
      expect(abilityModifier(9)).toEqual(-1);
    });

    it('ability modifier for score 10 is 0', () => {
      expect(abilityModifier(10)).toEqual(0);
    });

    it('ability modifier for score 11 is 0', () => {
      expect(abilityModifier(11)).toEqual(0);
    });

    it('ability modifier for score 12 is 1', () => {
      expect(abilityModifier(12)).toEqual(1);
    });

    it('ability modifier for score 13 is 1', () => {
      expect(abilityModifier(13)).toEqual(1);
    });

    it('ability modifier for score 14 is 2', () => {
      expect(abilityModifier(14)).toEqual(2);
    });

    it('ability modifier for score 15 is 2', () => {
      expect(abilityModifier(15)).toEqual(2);
    });

    it('ability modifier for score 16 is 3', () => {
      expect(abilityModifier(16)).toEqual(3);
    });

    it('ability modifier for score 17 is 3', () => {
      expect(abilityModifier(17)).toEqual(3);
    });

    it('ability modifier for score 18 is 4', () => {
      expect(abilityModifier(18)).toEqual(4);
    });

    it('ability score less than 3 throws error', () => {
      expect(() => abilityModifier(2)).toThrow(new Error('Ability scores must be at least 3'));
    });

    it('ability score greater than 18 throws error', () => {
      expect(() => abilityModifier(19)).toThrow(new Error('Ability scores can be at most 18'));
    });
  });

  it('random ability within range', () => {
    // Due to randomness, let's test 100x
    for (let i = 0; i < 1e2; i++) {
      const rolledScore = Character.rollAbility();
      expect(rolledScore).toBeLessThanOrEqual(18);
      expect(rolledScore).toBeGreaterThanOrEqual(3);
    }
  });

  describe('Random character abilities', () => {
    it('random character is valid - strength', () => {
      const Masom = new Character();
      expect(Masom.strength).toBeLessThanOrEqual(18);
      expect(Masom.strength).toBeGreaterThanOrEqual(3);
    });

    it('random character is valid - dexterity', () => {
      const Masom = new Character();
      expect(Masom.dexterity).toBeLessThanOrEqual(18);
      expect(Masom.dexterity).toBeGreaterThanOrEqual(3);
    });

    it('random character is valid - constitution', () => {
      const Masom = new Character();
      expect(Masom.constitution).toBeLessThanOrEqual(18);
      expect(Masom.constitution).toBeGreaterThanOrEqual(3);
    });

    it('random character is valid - intelligence', () => {
      const Masom = new Character();
      expect(Masom.intelligence).toBeLessThanOrEqual(18);
      expect(Masom.intelligence).toBeGreaterThanOrEqual(3);
    });

    it('random character is valid - wisdom', () => {
      const Masom = new Character();
      expect(Masom.wisdom).toBeLessThanOrEqual(18);
      expect(Masom.wisdom).toBeGreaterThanOrEqual(3);
    });

    it('random character is valid - charisma', () => {
      const Masom = new Character();
      expect(Masom.charisma).toBeLessThanOrEqual(18);
      expect(Masom.charisma).toBeGreaterThanOrEqual(3);
    });

    it('random character is valid - hitpoints', () => {
      const Masom = new Character();
      expect(Masom.hitpoints).toEqual(10 + abilityModifier(Masom.constitution));
    });

    it('each ability is only calculated once', () => {
      const Masom = new Character();
      expect(Masom.strength).toEqual(Masom.strength);
      expect(Masom.dexterity).toEqual(Masom.dexterity);
      expect(Masom.constitution).toEqual(Masom.constitution);
      expect(Masom.intelligence).toEqual(Masom.intelligence);
      expect(Masom.wisdom).toEqual(Masom.wisdom);
      expect(Masom.charisma).toEqual(Masom.charisma);
    });
  });
});
