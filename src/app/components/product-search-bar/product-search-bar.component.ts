import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-search-bar',
  templateUrl: './product-search-bar.component.html',
  styleUrls: ['./product-search-bar.component.scss']
})

export class ProductSearchBarComponent implements OnInit, OnDestroy {

  public model: any;

  states = [];

  constructor() { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('Nothing to destroy');
  }

}
