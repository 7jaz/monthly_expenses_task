import { Component, OnInit } from '@angular/core';
import * as $ from'jquery';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

  constructor() { }

  close(){
    const addExpenseDiv = document.getElementById('add-expense');
    addExpenseDiv.classList.toggle('slide-down');
  }  
  addExpense(){
    this.close();
  }

  ngOnInit() {
  }

}
