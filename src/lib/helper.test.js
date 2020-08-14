import {parse, format, getChargesIncGst, getRorts} from './helper';

describe('helper', () => {
  describe('parse', () => {
    it('returns a number with valid input', () => {
      expect(parse('5')).toEqual(5);
    });

    it('returns 0 with invalid input', () => {
      expect(parse('')).toEqual(0);
    });
  });

  describe('format', () => {
    it('formats a number to 5 decimal places', () => {
      expect(format(0.37)).toEqual('0.37000');
    });
  });

  describe('getChargesIncGst', () => {
    it('adds gst to charges when gstInclusive is false', () => {
      expect(getChargesIncGst(false, '1', '2', '4')).toEqual({supply: 1.1, usage: 2.2, usage2: 4.4});
    });

    it('does not add gst to charges when gstInclusive is true', () => {
      expect(getChargesIncGst(true, '1', '2', '4')).toEqual({supply: 1, usage: 2, usage2: 4});
    });
  });

  describe('getRorts', () => {
    const charges = {supply: 0, usage: 0, usage2: 0};
    const prices = {supply: 0, usage: 0, usage2: 0};

    describe('supply', () => {
      it('returns false when the charge is equal to the price', () => {
        expect(getRorts(charges, prices).supply).toBe(false);
      });

      it('returns false when the charge is less than the price', () => {
        expect(getRorts(charges, {...prices, supply: 1}).supply).toBe(false);
      });

      it('returns true when the charge is greater than the price', () => {
        expect(getRorts({...charges, supply: 1}, prices).supply).toBe(true);
      });
    });

    describe('usage', () => {
      it('returns false when the charge is equal to the price', () => {
        expect(getRorts(charges, prices)).toHaveProperty('usage', false);
      });

      it('returns false when the charge is less than the price', () => {
        expect(getRorts(charges, {...prices, usage: 1})).toHaveProperty('usage', false);
      });

      it('returns true when the charge is greater than the price', () => {
        expect(getRorts({...charges, usage: 1}, prices)).toHaveProperty('usage', true);
      });
    });

    describe('usage2', () => {
      it('returns false when the charge is equal to the price', () => {
        expect(getRorts(charges, prices)).toHaveProperty('usage2', false);
      });

      it('returns false when the charge is less than the price', () => {
        expect(getRorts(charges, {...prices, usage2: 1})).toHaveProperty('usage2', false);
      });

      it('returns true when the charge is greater than the price', () => {
        expect(getRorts({...charges, usage2: 1}, prices)).toHaveProperty('usage2', true);
      });
    });

    describe('anyUsage', () => {
      it('returns false when both charges are equal to the price', () => {
        expect(getRorts(charges, prices)).toHaveProperty('anyUsage', false);
      });

      it('returns false when both charges are less than the price', () => {
        expect(getRorts(charges, {...prices, usage: 1, usage2: 1})).toHaveProperty('anyUsage', false);
      });

      it('returns true when usage is greater than the price', () => {
        expect(getRorts({...charges, usage: 1}, prices)).toHaveProperty('anyUsage', true);
      });

      it('returns true when usage2 is greater than the price', () => {
        expect(getRorts({...charges, usage2: 1}, prices)).toHaveProperty('anyUsage', true);
      });
    });
  });
});
