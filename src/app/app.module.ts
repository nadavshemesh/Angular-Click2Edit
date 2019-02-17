import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineEditModule } from './inline-edit/inline-edit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	// Angular
    BrowserModule,
    AppRoutingModule,

    // Custom 
    InlineEditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
