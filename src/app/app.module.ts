import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { SomeComponent } from './some/some.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ModalModule.forRoot() ],
  declarations: [ AppComponent, SomeComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ SomeComponent ]

})
export class AppModule { }
