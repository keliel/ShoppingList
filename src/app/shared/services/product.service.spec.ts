import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  it('Should return ProductSearchResult', () => {
    const service: ProductService = TestBed.get(ProductService);
    const reply: any = service.getProductByCode('679632_1_1');
    expect(reply).toBeDefined();
    expect(typeof reply).toBe('ProductSearchResult');
  });
});
