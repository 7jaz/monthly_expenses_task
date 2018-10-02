import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categ-details',
  templateUrl: './categ-details.component.html',
  styleUrls: ['./categ-details.component.scss']
})
export class CategDetailsComponent implements OnInit {
  @Input() categ;
  constructor() { }

  ngOnInit() {
  }

}
