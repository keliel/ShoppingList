import { ProductPriceInfo } from './product-price-info';

export interface ProductSearchResult {
  assortmentGroup: string;
  brand: string;
  bulkyProduct: boolean;
  code: string;
  contentUnit: string;
  depositAmount: Object;
  description: string;
  images: Array<Object>;
  name: string;
  numberContentUnits: number;
  posProduct?: Object;
  price: ProductPriceInfo;
  url: string;
}
