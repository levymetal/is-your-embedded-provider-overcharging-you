// https://www.esc.vic.gov.au/electricity-and-gas/prices-tariffs-and-benchmarks/victorian-default-offer

export const PRICING_DATA = {
  ausnet: {
    residential: {
      supply: 1.3354,
      usage: 0.3536, // block 1
      usage2: 0.3617, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
    business: {
      supply: 1.3354,
      usage: 0.3837, // block 1
      usage2: 0.3945, // block 2
      block1AnnualKWh: 1020 * 4, // up to 1020kWh used in a quarterly period
    },
  },
  citipower: {
    residential: {
      supply: 1.1673,
      usage: 0.2575,
    },
    business: {
      supply: 1.3583,
      usage: 0.2529,
    },
  },
  jemena: {
    residential: {
      supply: 1.2105,
      usage: 0.3054,
    },
    business: {
      supply: 1.4055,
      usage: 0.3182,
    },
  },
  powercor: {
    residential: {
      supply: 1.3163,
      usage: 0.3045,
    },
    business: {
      supply: 1.4594,
      usage: 0.2797,
    },
  },
  united: {
    residential: {
      supply: 1.0955,
      usage: 0.2884,
    },
    business: {
      supply: 1.2865,
      usage: 0.2742,
    },
  },
};
