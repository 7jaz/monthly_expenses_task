import { Component } from '@angular/core';
import { CategsService } from './categs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 categs = [];
 constructor(private _categsService:CategsService) {
  this.categs = _categsService.getCategs();
 }

}
