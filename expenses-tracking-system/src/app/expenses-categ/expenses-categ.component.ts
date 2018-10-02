import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expenses-categ',
  templateUrl: './expenses-categ.component.html',
  styleUrls: ['./expenses-categ.component.scss']
})
export class ExpensesCategComponent implements OnInit {
  @Input() category;

  constructor() { }

  ngOnInit() {
  }

}
