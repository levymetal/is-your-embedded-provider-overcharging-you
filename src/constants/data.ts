export const PRICING_DATA = {
  ausnet: {
    residential: {
      supply: 1.26,
      usage: 0.2649, // block 1
      usage2: 0.2811, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
    business: {
      supply: 1.3356,
      usage: 0.3016, // block 1
      usage2: 0.3335, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
  },
  citipower: {
    residential: {
      supply: 1.2023,
      usage: 0.2171,
    },
    business: {
      supply: 1.3876,
      usage: 0.2141,
    },
  },
  jemena: {
    residential: {
      supply: 1.1491,
      usage: 0.2307,
    },
    business: {
      supply: 1.3848,
      usage: 0.2457,
    },
  },
  powercor: {
    residential: {
      supply: 1.3459,
      usage: 0.2235,
    },
    business: {
      supply: 1.4613,
      usage: 0.2257,
    },
  },
  united: {
    residential: {
      supply: 1.0634,
      usage: 0.2242,
    },
    business: {
      supply: 1.1521,
      usage: 0.2225,
    },
  },
};
