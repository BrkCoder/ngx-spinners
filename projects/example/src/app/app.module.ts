import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxSpinnersModule} from 'ngx-spinners';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnersModule,
    NgxSpinnersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
