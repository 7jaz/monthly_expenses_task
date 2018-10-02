import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExpensesCategComponent } from './expenses-categ/expenses-categ.component';
import { CategIconComponent } from './categ-icon/categ-icon.component';
import { CategDetailsComponent } from './categ-details/categ-details.component';
import { FootComponent } from './foot/foot.component';
import { MonthCompComponent } from './month-comp/month-comp.component';
import { ChartCompComponent } from './chart-comp/chart-comp.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ChooseCategComponent } from './choose-categ/choose-categ.component';

import { CategsService } from './categs.service';
import { NumpadComponent } from './numpad/numpad.component';
import { TotalExpensesComponent } from './total-expenses/total-expenses.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpensesCategComponent,
    CategIconComponent,
    CategDetailsComponent,
    FootComponent,
    MonthCompComponent,
    ChartCompComponent,
    AddExpenseComponent,
    ChooseCategComponent,
    NumpadComponent,
    TotalExpensesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [
    CategsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
