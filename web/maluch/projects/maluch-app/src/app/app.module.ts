import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SzablonGlownyComponent } from './wspolne/szablony/szablon-glownwy/szablon-glowny.component';
import {NawigacjaModule} from "./wspolne/nawigacja/nawigacja.module";

@NgModule({
  declarations: [
    AppComponent,
    SzablonGlownyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NawigacjaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
