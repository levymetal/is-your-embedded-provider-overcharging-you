export const PRICING_DATA = {
  ausnet: {
    residential: {
      supply: 1.3251,
      usage: 0.3851, // block 1
      usage2: 0.3955, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
    business: {
      supply: 1.3251,
      usage: 0.4155, // block 1
      usage2: 0.4381, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
  },
  citipower: {
    residential: {
      supply: 1.1525,
      usage: 0.2871,
    },
    business: {
      supply: 1.3434,
      usage: 0.2834,
    },
  },
  jemena: {
    residential: {
      supply: 1.1438,
      usage: 0.3252,
    },
    business: {
      supply: 1.3057,
      usage: 0.3307,
    },
  },
  powercor: {
    residential: {
      supply: 1.3002,
      usage: 0.3292,
    },
    business: {
      supply: 1.4275,
      usage: 0.3062,
    },
  },
  united: {
    residential: {
      supply: 1.0814,
      usage: 0.3174,
    },
    business: {
      supply: 1.2405,
      usage: 0.3028,
    },
  },
};
