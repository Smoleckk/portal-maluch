import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NawigacjaGornaComponent} from './nawigacja-gorna/nawigacja-gorna.component';
import {RouterLink} from "@angular/router";
import { NawigacjaMediaSpolecznoscioweComponent } from './nawigacja-media-spolecznosciowe/nawigacja-media-spolecznosciowe.component';


@NgModule({
  declarations: [

    NawigacjaGornaComponent,
     NawigacjaMediaSpolecznoscioweComponent
  ],
  exports: [
    NawigacjaGornaComponent,
    NawigacjaMediaSpolecznoscioweComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class NawigacjaModule {
}

