// https://www.esc.vic.gov.au/electricity-and-gas/prices-tariffs-and-benchmarks/victorian-default-offer

export const PRICING_DATA = {
  ausnet: {
    residential: {
      supply: 1.4146,
      usage: 0.3477, // block 1
      usage2: 0.3477, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
    business: {
      supply: 1.4146,
      usage: 0.3881, // block 1
      usage2: 0.3881, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
  },
  citipower: {
    residential: {
      supply: 1.2407,
      usage: 0.2733,
    },
    business: {
      supply: 1.4469,
      usage: 0.2657,
    },
  },
  jemena: {
    residential: {
      supply: 1.2301,
      usage: 0.2972,
    },
    business: {
      supply: 1.5834,
      usage: 0.3141,
    },
  },
  powercor: {
    residential: {
      supply: 1.3684,
      usage: 0.3009,
    },
    business: {
      supply: 1.5905,
      usage: 0.2927,
    },
  },
  united: {
    residential: {
      supply: 1.1648,
      usage: 0.2884,
    },
    business: {
      supply: 1.3711,
      usage: 0.2789,
    },
  },
};
