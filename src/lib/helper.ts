type Charges = {
  supply: number;
  usage: number;
  usage2?: number;
};

export function parse(value: string) {
  return Number.parseFloat(value.replace(/[^\d.]/g, '')) || 0;
}

export function format(value: number) {
  return value.toFixed(5);
}

export function getChargesIncGst(gstInclusive: boolean, supply: string, usage: string, usage2: string) {
  const gstMultiplier = gstInclusive ? 1 : 1.1;

  return {
    supply: parse(supply) * gstMultiplier,
    usage: parse(usage) * gstMultiplier,
    usage2: parse(usage2) * gstMultiplier,
  };
}

export function getRorts(charges: Charges, prices: Charges) {
  const usage = charges.usage > prices.usage;
  const usage2 = typeof charges.usage2 !== 'undefined' && charges.usage2 > prices.usage2;

  return {
    supply: charges.supply > prices.supply,
    anyUsage: usage || usage2,
    usage,
    usage2,
  };
}
