import { Component, OnInit } from '@angular/core';
import * as FA from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss']
})
export class FootComponent implements OnInit {
  faBChart = FA.faChartBar;
  faPChart = FA.faChartPie;
  faPayment = FA.faWallet;
  faSettings = FA.faCog;

  constructor() { }

  openAddExpense(){
    const addExpenseDiv = document.getElementById('add-expense');
    const numOutput = document.getElementById('numpad-output');
    const categs = document.getElementsByClassName('selected');    

    addExpenseDiv.classList.toggle('slide-down');
    numOutput.innerHTML="$0";
    categs[0].classList.toggle('selected');
  }  

  ngOnInit() {
  }

}
