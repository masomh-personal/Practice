import { predictPartyVictory } from '../649_Dota2Senate.js';

describe('predictPartyVictory', () => {
  describe('Basic tests', () => {
    it('should return "Radiant" when input is "RD"', () => {
      const senate = 'RD';
      const result = predictPartyVictory(senate);
      expect(result).toBe('Radiant');
    });

    it('should return "Dire" when input is "RDD"', () => {
      const senate = 'RDD';
      const result = predictPartyVictory(senate);
      expect(result).toBe('Dire');
    });
  });

  describe('Edge cases', () => {
    it('should return "Radiant" when input is "R"', () => {
      const senate = 'R';
      const result = predictPartyVictory(senate);
      expect(result).toBe('Radiant');
    });

    it('should return "Dire" when input is "D"', () => {
      const senate = 'D';
      const result = predictPartyVictory(senate);
      expect(result).toBe('Dire');
    });
  });

  describe('Larger cases', () => {
    it('should return "Radiant" for larger input', () => {
      const senate = 'RRRDD';
      const result = predictPartyVictory(senate);
      expect(result).toBe('Radiant');
    });

    it('should return "Dire" for larger input with more Dire members', () => {
      const senate = 'DDRRD';
      const result = predictPartyVictory(senate);
      expect(result).toBe('Dire');
    });

    it('should handle long alternating sequence', () => {
      const senate = 'RD'.repeat(5000); // Length 10,000
      const result = predictPartyVictory(senate);
      expect(result).toBe('Radiant');
    });
  });
});
