import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductSearchResult } from '../models/product-search-result';
import { map } from 'rxjs/operators';
import { RealAPIResult } from '../models/real-apiresult';

const REAL_API_URL = 'http://api.efood.real.de/api/v2/real';
const RELATIVE_PRODUCTS_PATH = '/products';
const RELATIVE_SEARCH_PATH = '/search';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  /**
   * Returns concatenated url to search for products using real API.
   */
  private static getFullSearchUrl(): string {
    return REAL_API_URL + RELATIVE_PRODUCTS_PATH + RELATIVE_SEARCH_PATH;
  }

  /**
   * Returns formatted version of query parameter argument for real API.
   */
  private static getQueryParams(term: string, sort: string = 'price-asc', cat: number = 1): string {
    return `${term}:${sort}:category:${cat}`;
  }

  /**
   * Returns parameters object to search for products on real API.
   */
  private static getProductSearchParams(query: string, currentPage: number = 0, pageSize: number = 20): HttpParams {
    return new HttpParams({ fromObject: { query: query, currentPage: currentPage.toString(), pageSize: pageSize.toString() } });
  }

  getProductByCode(code: string): ProductSearchResult {
    throw new Error('Method not implemented.');
  }

  getAllProducts(): Array<ProductSearchResult> {
    throw new Error('Method not implemented.');
  }

  searchProducts(term: string): Observable<Array<ProductSearchResult>> {
    if (term.length <= 1) {
      return of([]);
    }
    const queryParams = ProductService.getQueryParams(term);
    const searchParams = ProductService.getProductSearchParams(queryParams);

    return this.http
      .get<RealAPIResult>(ProductService.getFullSearchUrl(), {
        params: searchParams
      }).pipe(map(response => {
        return response.products;
      })
      );
  }
}
