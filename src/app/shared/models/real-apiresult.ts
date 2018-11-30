import { ProductSearchResult } from './product-search-result';

export interface RealAPIResult {
  type: string;
  currentQuery: Object;
  freeTextSearch: string;
  pagination: {
    currentPage: number;
    pageSize: number;
    sort: string;
    totalPages: number;
    totalResults: number;
  };
  products: Array<ProductSearchResult>;
  sorts: Object;
}
