import { PropGridServiceService } from './../prop-grid-service.service';
import { element } from 'protractor';
import { ClassMaster } from './../class-master';
import { PropClass } from './../prop-class';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'prop-grid',
  templateUrl: './prop-grid.component.html',
  styleUrls: ['./prop-grid.component.css']
})
export class PropGridComponent implements OnInit {

  properties: PropClass[] = [];
  classes: ClassMaster[] = [];
  activeClass: ClassMaster;
  showSuccess: boolean = false;

  constructor(private _propGridService: PropGridServiceService) {
    this.activeClass = new ClassMaster("(none)", this.properties);

  }

  showClass(classname: string) {
    this.activeClass = this.classes.filter(x => x.ClassName == classname)[0];
    this.properties = this.activeClass.PropClasses;

  }

  addclass(classname: string) {
    if (classname) {
      this.classes.push(new ClassMaster(classname, this.properties));
      this.activeClass = this.classes.filter(x => x.ClassName == classname)[0];
      this.activeClass.PropClasses = this._propGridService.GetProperties();
      this.showSuccess = false;
    }
  }


  bindThis(classname: string) {
    var k = this.classes.indexOf(this.activeClass);
    this.classes[k] = this.activeClass;
    this.showSuccess = true;

    /*var filename = "abc.csv";
    var blob = new Blob(["a,b,c"], { "type": 'text/csv;charset=utf-8;' });
    var link = document.createElement("a");
    var url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);*/
  }

  ngOnInit() {
  }

}
