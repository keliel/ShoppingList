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
    this.shoppingLists[this.shoppingLists.length - 1].select();
  }

  selectShoppingList(list: any): void {
    this.deselectAllLists();
    list.select();
  }

  createShoppingList(): void {
    this.deselectAllLists();
    this.shoppingLists.push(new ShoppingList('New List', true));
  }

  private deselectAllLists(): void {
    this.shoppingLists.forEach((item) => item.deselect());
  }
}
