import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {appServices} from './services';
import {appDirectives} from './directives';
import {appPipes} from './pipes';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ...appDirectives,
    ...appPipes,
  ],
  providers: [
    ...appServices,
    ...appPipes,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
