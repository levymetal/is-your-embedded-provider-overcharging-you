type Charges = {
  supply: number;
  usage: number;
  usage2: number;
};

type Prices = {
  block1AnnualKWh?: number;
  supply: number;
  usage: number;
  usage2?: number;
};

export function round(value: number, precision: number = 5) {
  var multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}

export function parse(value: string) {
  return Number.parseFloat(value.replace(/[^\d.]/g, '')) || 0;
}

export function format(value: number, fractionDigits: number = 5) {
  return value.toFixed(fractionDigits);
}

export function getChargesIncGst(gstInclusive: boolean, supply: string, usage: string, usage2: string) {
  const gstMultiplier = gstInclusive ? 1 : 1.1;

  return {
    supply: round(parse(supply) * gstMultiplier),
    usage: round(parse(usage) * gstMultiplier),
    usage2: round(parse(usage2) * gstMultiplier),
  };
}

export function getRorts(charges: Charges, prices: Prices) {
  const usage = charges.usage > prices.usage;
  const usage2 = typeof prices.usage2 !== 'undefined' && charges.usage2 > prices.usage2;

  return {
    supply: charges.supply > prices.supply,
    anyUsage: usage || usage2,
    usage,
    usage2,
  };
}

export function getCost(customerType: 'residential' | 'business', charges: Charges, prices: Prices) {
  const averageKWh = customerType === 'residential' ? 4000 : 20000;
  const supply = (charges.supply - prices.supply) * 365;
  let kWh = averageKWh;
  let kWh2 = 0;

  if (typeof prices.block1AnnualKWh !== 'undefined' && averageKWh > prices.block1AnnualKWh) {
    kWh = prices.block1AnnualKWh;
    kWh2 = averageKWh - kWh;
  }

  const usage = (charges.usage - prices.usage) * kWh;
  const usage2 = (charges.usage2 - prices.usage2) * kWh2 || 0;
  const cost = round(Math.max(supply, 0), 0) + round(Math.max(usage + usage2, 0), 0);

  return cost;
}
