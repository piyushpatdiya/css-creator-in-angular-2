import { PropClass } from './../prop-class';
import { element } from 'protractor';
import { PropGridServiceService } from './../prop-grid-service.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColorPickerService } from 'angular2-color-picker';

@Component({
  selector: 'grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit {
  private tempColor: string = "#123bdc";
  private activeProperty : string = "";
  properties: PropClass[] = [];
  temp: any;
  tdstyle: string = "font-size:100px";
  @Output() getFinalProperties: EventEmitter<PropClass[]> = new EventEmitter();

  constructor(private _propService: PropGridServiceService, private clrService: ColorPickerService) { }

  emit() {
    this.getFinalProperties.emit(this.properties);
  }

  setColor(colorName: string) {
    for (var i = 0; i < this.properties.length; i++) {
      if (this.properties[i].name == this.activeProperty) {
        this.properties[i].value = this.tempColor;
        console.log(this.properties[i].name);
      }
      this.getFinalProperties.emit(this.properties);

      
    }
  }

  ngOnInit() {
    this.properties = this._propService.GetProperties();
    //  this.properties = this.propertiesFrom;

    //console.log("yes");
  }
  reset() {
    this.properties = this._propService.GetProperties();
    //  this.properties = this.propertiesFrom;

    //console.log("yes");
  }

  changeColor(element, index, array) {
    if (element.name == this.properties[index].name) {
      element.value = "xxx";
    }
    console.log(index);

    this.getFinalProperties.emit(this.properties);
    return element;

  }

}
