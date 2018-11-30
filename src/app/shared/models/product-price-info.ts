export interface ProductPriceInfo {
  basePrice: {
    basePrice: number;
    basePriceBaseFactor: number;
    basePriceUnit: string
  };
  currencyIso: string;
  formattedValue: string;
  priceType: string;
  value: number;
}
