// https://www.esc.vic.gov.au/electricity-and-gas/prices-tariffs-and-benchmarks/victorian-default-offer

export const PRICING_DATA = {
  ausnet: {
    residential: {
      supply: 1.2824,
      usage: 0.3198, // block 1
      usage2: 0.3198, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
    business: {
      supply: 1.2939,
      usage: 0.3423, // block 1
      usage2: 0.3423, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
  },
  citipower: {
    residential: {
      supply: 1.2114,
      usage: 0.2596,
    },
    business: {
      supply: 1.5219,
      usage: 0.2477,
    },
  },
  jemena: {
    residential: {
      supply: 1.2713,
      usage: 0.2747,
    },
    business: {
      supply: 1.6709,
      usage: 0.2878,
    },
  },
  powercor: {
    residential: {
      supply: 0.2822,
      usage: 0.3009,
    },
    business: {
      supply: 1.6978,
      usage: 0.2736,
    },
  },
  united: {
    residential: {
      supply: 1.1912,
      usage: 0.2735,
    },
    business: {
      supply: 1.54,
      usage: 0.2561,
    },
  },
};
