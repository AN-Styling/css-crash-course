import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { PsuedoComponent } from './components/psuedo/psuedo.component';
import { FlexboxJustifyComponent } from './components/flexbox-justify/flexbox-justify.component';
import { FontsComponent } from './components/fonts/fonts.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexboxComponent,
    PsuedoComponent,
    FlexboxJustifyComponent,
    FontsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
