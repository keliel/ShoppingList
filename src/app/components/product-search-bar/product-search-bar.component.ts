import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap, switchMap, catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-search-bar',
  templateUrl: './product-search-bar.component.html',
  styleUrls: ['./product-search-bar.component.scss']
})

export class ProductSearchBarComponent implements OnInit, OnDestroy {

  model: any;
  searching = false;
  searchFailed = false;

  private states = [];

  constructor(private _service: ProductService) { }

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
  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('Nothing to destroy');
  }

}
