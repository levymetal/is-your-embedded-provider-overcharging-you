export const PRICING_DATA = {
  ausnet: {
    residential: {
      supply: 1.1643,
      usage: 0.2703, // block 1
      usage2: 0.2882, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
    business: {
      supply: 1.1643,
      usage: 0.2955, // block 1
      usage2: 0.3302, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
  },
  citipower: {
    residential: {
      supply: 1.133,
      usage: 0.214,
    },
    business: {
      supply: 1.3567,
      usage: 0.2218,
    },
  },
  jemena: {
    residential: {
      supply: 1.0675,
      usage: 0.2344,
    },
    business: {
      supply: 1.2264,
      usage: 0.2405,
    },
  },
  powercor: {
    residential: {
      supply: 1.2918,
      usage: 0.224,
    },
    business: {
      supply: 1.4197,
      usage: 0.2288,
    },
  },
  united: {
    residential: {
      supply: 0.9824,
      usage: 0.24,
    },
    business: {
      supply: 1.0463,
      usage: 0.2444,
    },
  },
};
