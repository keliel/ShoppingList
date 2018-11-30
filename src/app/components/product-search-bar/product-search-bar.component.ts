import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap, switchMap, catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/shared/services/product.service';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead';
import { ProductSearchResult } from 'src/app/shared/models/product-search-result';
import { ShoppingList } from 'src/app/shared/models/shopping-list';

@Component({
  selector: 'app-product-search-bar',
  templateUrl: './product-search-bar.component.html',
  styleUrls: ['./product-search-bar.component.scss']
})

export class ProductSearchBarComponent implements OnInit {

  @Input() productList: ShoppingList;

  constructor(private _service: ProductService) { }
  model: ProductSearchResult;
  searching = false;
  searchFailed = false;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._service.searchProducts(term).pipe(
          tap(() => this.searchFailed = false),
          catchError((e) => {
            console.log(e);
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  formatter = (x: { name: string }) => x.name;

  addToList(event: NgbTypeaheadSelectItemEvent): void {
    this.productList.addProduct(event.item);
  }

  ngOnInit() {
  }
}
