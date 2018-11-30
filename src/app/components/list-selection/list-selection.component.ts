import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-selection',
  templateUrl: './list-selection.component.html',
  styleUrls: ['./list-selection.component.scss']
})
export class ListSelectionComponent implements OnInit {

  shoppingLists = [{
    id: 54845,
    title: 'what',
    isSelected: true
  }, {
    id: 54875,
    title: 'what1',
    isSelected: false
  }, {
    id: 58845,
    title: 'what2',
    isSelected: false
  }];

  constructor() { }

  ngOnInit() {
  }

}
