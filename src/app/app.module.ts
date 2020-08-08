import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { PagesModule }  from './pages/pages.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
