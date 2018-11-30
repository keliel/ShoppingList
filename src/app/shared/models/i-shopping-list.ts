import { ProductSearchResult } from './product-search-result';

export interface IShoppingList {
  id: number;
  title: string;
  products: Array<ProductSearchResult>;
}
