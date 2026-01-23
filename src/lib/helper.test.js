import {round, parse, format, getChargesIncGst, getRorts, getDelta} from './helper';

describe('helper', () => {
  describe('round', () => {
    it('rounds a number to 5 decimal places by default', () => {
      expect(round(8.234626551)).toEqual(8.23463);
    });

    it('rounds a number to the precision arg', () => {
      expect(round(726.23461, 1)).toEqual(726.2);
    });

    it('rounds floats correctly', () => {
      expect(round(3 * 1.1)).toEqual(3.3);
    });
  });

  describe('parse', () => {
    it('returns a number with valid input', () => {
      expect(parse('5')).toEqual(5);
    });

    it('returns 0 with invalid input', () => {
      expect(parse('')).toEqual(0);
    });
  });

  describe('format', () => {
    it('formats a number to 5 decimal places by default', () => {
      expect(format(0.37)).toEqual('0.37000');
    });

    it('formats a number to the precision arg', () => {
      expect(format(0.332, 2)).toEqual('0.33');
    });
  });

  describe('getChargesIncGst', () => {
    it('adds gst to charges when gstInclusive is false', () => {
      expect(getChargesIncGst(false, '1', '2', '3')).toEqual({supply: 1.1, usage: 2.2, usage2: 3.3});
    });

    it('does not add gst to charges when gstInclusive is true', () => {
      expect(getChargesIncGst(true, '1', '2', '3')).toEqual({supply: 1, usage: 2, usage2: 3});
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

      it('returns false when the price does not have usage2', () => {
        expect(getRorts({...charges, usage2: 1}, {...prices})).toHaveProperty('usage2', true);
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

  describe('getDelta', () => {
    const charges = {supply: 0, usage: 0, usage2: 0};
    const prices = {supply: 0, usage: 0, usage2: 0};

    it('returns cost on supply', () => {
      expect(getDelta('residential', {...charges, supply: 1}, prices)).toEqual(365);
    });

    describe('residential', () => {
      it('returns cost on usage', () => {
        expect(getDelta('residential', {...charges, usage: 1}, prices)).toEqual(4000);
      });

      describe('ausnet', () => {
        it('returns cost on usage', () => {
          expect(
            getDelta('residential', {...charges, usage: 1, usage2: 2}, {...prices, block1AnnualKWh: 1020 * 4}),
          ).toEqual(4000);
        });
      });
    });

    describe('business', () => {
      it('returns cost on usage', () => {
        expect(getDelta('business', {...charges, usage: 1}, prices)).toEqual(20000);
      });

      describe('ausnet', () => {
        it('returns cost on usage', () => {
          expect(
            getDelta('business', {...charges, usage: 1, usage2: 2}, {...prices, block1AnnualKWh: 1020 * 4}),
          ).toEqual(35920);
        });
      });
    });
  });
});
