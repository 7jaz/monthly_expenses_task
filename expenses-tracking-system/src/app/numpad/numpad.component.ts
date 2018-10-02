import { Component, OnInit } from '@angular/core';
import * as FA from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.scss']
})
export class NumpadComponent implements OnInit {
  faDel = FA.faBackspace;
  
  //numNum:number=0;

  constructor() { }
  appnum(event:Event){
    event.preventDefault();
    
    var outNum = $('#numpad-output');
    var num_button = $(event.target);
    var num_value = num_button.text();
    if(outNum.text()=='$0'){
      outNum.text('$');
    }
    outNum.append(num_value);
  }
  delnum(){
    event.preventDefault();
    var outNum = $('#numpad-output');
    var outNumStr = $('#numpad-output').text();
    if(outNumStr.length>2){
      outNumStr = outNumStr.substring(0, outNumStr.length - 1);
      outNum.text(outNumStr);
    }
    else
    {
      outNum.text("$0");
    }
  }
  appdot(){
    event.preventDefault();
    var outNum = $('#numpad-output');
    if(outNum.text().indexOf(".") < 0){
      outNum.append('.');
    }
  }
  ngOnInit() {
  }

}
