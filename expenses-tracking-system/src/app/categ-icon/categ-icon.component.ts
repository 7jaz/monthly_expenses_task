import { Component, OnInit, Input } from '@angular/core';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categ-icon',
  templateUrl: './categ-icon.component.html',
  styleUrls: ['./categ-icon.component.scss']
})
export class CategIconComponent implements OnInit {
  @Input() categIcon: IconDefinition;

  constructor() { }

  ngOnInit() {
  }

}
