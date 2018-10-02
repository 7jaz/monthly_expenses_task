import { Component, OnInit } from '@angular/core';
import { CategsService } from '../categs.service';

@Component({
  selector: 'app-total-expenses',
  templateUrl: './total-expenses.component.html',
  styleUrls: ['./total-expenses.component.scss']
})
export class TotalExpensesComponent implements OnInit {
  
  categs = [];

  totalExp='Total Expenses';

  constructor(private _categsService:CategsService) {
   }

  ngOnInit() {
    this.categs = this._categsService.getCategs();
    }

}
