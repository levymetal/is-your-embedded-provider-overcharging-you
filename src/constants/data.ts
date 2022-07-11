export const PRICING_DATA = {
  ausnet: {
    residential: {
      supply: 1.2994,
      usage: 0.2893, // block 1
      usage2: 0.3070, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
    business: {
      supply: 1.2994,
      usage: 0.3308, // block 1
      usage2: 0.3663, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
  },
  citipower: {
    residential: {
      supply: 1.1623,
      usage: 0.2170,
    },
    business: {
      supply: 1.3860,
      usage: 0.2166,
    },
  },
  jemena: {
    residential: {
      supply: 1.1577,
      usage: 0.2322,
    },
    business: {
      supply: 1.3087,
      usage: 0.2468,
    },
  },
  powercor: {
    residential: {
      supply: 1.3102,
      usage: 0.2333,
    },
    business: {
      supply: 1.4380,
      usage: 0.2333,
    },
  },
  united: {
    residential: {
      supply: 1.0753,
      usage: 0.2327,
    },
    business: {
      supply: 1.2191,
      usage: 0.2279,
    },
  },
};
