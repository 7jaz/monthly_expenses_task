import { Injectable } from '@angular/core';
import * as FA from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class CategsService {

  constructor() { }
  getCategs(){
    return[
      {"name":'Shopping',"icon":FA.faShoppingCart,"expenses":'109.99'},
      {"name":'Drinks',"icon":FA.faGlassMartini,"expenses":'238.99'},
      {"name":'Food',"icon":FA.faUtensils,"expenses":'238.99'},
      {"name":'Bills',"icon":FA.faWallet,"expenses":'238.99'},
      {"name":'Colthes',"icon":FA.faTshirt,"expenses":'29.99'}
    ]
  }

}
