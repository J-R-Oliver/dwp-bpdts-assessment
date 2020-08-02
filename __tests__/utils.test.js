const { withinDistanceLondon } = require('../utils/utils');

describe('utils', () => {
  describe('withinDistanceLondon', () => {
    it('should return a boolean', () => {
      const person = {
        latitude: 53.958332,
        longitude: -1.080278
      };

      expect(typeof withinDistanceLondon(person)).toBe('boolean');
    });

    it('should return true when person is within 50 miles of London', () => {
      const person = {
        latitude: 51.51482,
        longitude: -0.065053
      };

      expect(withinDistanceLondon(person)).toBe(true);
    });

    it('should return false when person is outside of 50 miles of London', () => {
      const person = {
        latitude: 53.958332,
        longitude: -1.080278
      };

      expect(withinDistanceLondon(person)).toBe(false);
    });

    it('should not mutate input', () => {
      const person = {
        latitude: 53.958332,
        longitude: -1.080278
      };

      const personControl = { ...person };

      withinDistanceLondon(person);
      expect(person).toStrictEqual(personControl);
    });
  });
});
