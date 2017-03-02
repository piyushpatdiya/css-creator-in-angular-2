import {Input, Output}  from '@angular/core';
import { PropClass } from './prop-class';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PropGridServiceService {
  PropList : PropClass[];

  constructor() { }

  GetProperties()
  {
    this.PropList = [
      new PropClass("background-color","color","color","red"),
      new PropClass("margin-top","margin","margin","2px"),
      new PropClass("foreground-color","color","color","green"),
      new PropClass("margin-bottom","margin","margin","1px"),
    ];

    //this.PropList = this.PropList.filter(this.groupProp);
    
    return this.PropList;
  }



  groupProp(element,index,array)
  {    
    return (element.type == 'margin');
  }

}


