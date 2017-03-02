import { PropGridServiceService } from './prop-grid-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PropGridComponent } from './prop-grid/prop-grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import {ColorPickerModule} from 'angular2-color-picker';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PropGridComponent,
    GridItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ColorPickerModule,
    AlertModule.forRoot()
  ],
  providers: [PropGridServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
