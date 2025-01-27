import { isHappy, isHappyFloyd } from '../202_HappyNumber.js';

describe('Leetcode #202: Happy Number', () => {
  const implementations = [
    { name: 'HashSet "seen" check', fn: isHappy },
    { name: "Floyd's Cycle Detection", fn: isHappyFloyd },
  ];

  implementations.forEach(({ name, fn }) => {
    describe(`${name} implementation`, () => {
      describe('Happy number cases', () => {
        it('Should return true for a happy number 19', () => {
          const result = fn(19);
          expect(result).toBe(true);
        });

        it('Should return true for a happy number 1 (edge case)', () => {
          const result = fn(1);
          expect(result).toBe(true);
        });

        it('Should return true for a large happy number 986543210', () => {
          const result = fn(986543210);
          expect(result).toBe(true);
        });
      });

      describe('Non-happy number cases', () => {
        it('Should return false for a number 2 which is not happy', () => {
          const result = fn(2);
          expect(result).toBe(false);
        });

        it('Should return false for a larger number 116 which is not happy', () => {
          const result = fn(116);
          expect(result).toBe(false);
        });
      });
    });
  });
});
