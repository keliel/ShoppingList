import { Component, OnInit, Input } from '@angular/core';
import { IShoppingList } from 'src/app/shared/models/i-shopping-list';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit {

  @Input() listToEdit: IShoppingList;
  constructor() { }

  ngOnInit() {
  }

}
