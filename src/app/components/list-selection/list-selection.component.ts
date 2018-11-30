import { Component, OnInit } from '@angular/core';
import { ShoppingList } from 'src/app/shared/models/shopping-list';

@Component({
  selector: 'app-list-selection',
  templateUrl: './list-selection.component.html',
  styleUrls: ['./list-selection.component.scss']
})
export class ListSelectionComponent implements OnInit {

  shoppingLists: Array<ShoppingList> = [];

  constructor() {
    this.shoppingLists.push(new ShoppingList('My First List'));
  }

  ngOnInit() {
    if (this.shoppingLists.length > 0) {
      this.shoppingLists[0].select();
    }
  }

  selectShoppingList(list: any): void {
    this.shoppingLists.forEach((item) => item.deselect());
    list.select();
  }
}
