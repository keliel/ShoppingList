import { IShoppingList } from 'src/app/shared/models/i-shopping-list';
import { ProductSearchResult } from 'src/app/shared/models/product-search-result';

export class ShoppingList implements IShoppingList {
  products: ProductSearchResult[];
  id: number;
  title: string;
  isSelected = false;

  constructor(title: string) {
    this.id = Math.random() * 11;
    this.title = title;
  }

  select(): void {
    this.isSelected = true;
  }

  deselect(): void {
    this.isSelected = false;
  }

  addProduct(product: ProductSearchResult) {
    this.products.push(product);
  }

  removeProduct(code: string) {
    this.products.splice(this.products.indexOf(this.products.find(x => x.code === code)), 1);
  }
}
