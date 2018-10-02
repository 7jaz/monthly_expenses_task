import { Component, OnInit } from '@angular/core';
import { CategsService } from '../categs.service';


@Component({
  selector: 'app-choose-categ',
  templateUrl: './choose-categ.component.html',
  styleUrls: ['./choose-categ.component.scss']
})
export class ChooseCategComponent implements OnInit {
  categs = [];
  constructor(private _categsService:CategsService) { }

  selectedCateg;
  onCategClicked(event:Event){
    const clickedCateg = event.srcElement.id;
    this.selectedCateg = clickedCateg;
  }

  ngOnInit() {
    this.categs = this._categsService.getCategs();
  }

}
