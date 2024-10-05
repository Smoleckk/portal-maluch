import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NawigacjaGornaComponent} from './nawigacja-gorna/nawigacja-gorna.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [

    NawigacjaGornaComponent
  ],
  exports: [
    NawigacjaGornaComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class NawigacjaModule {
}

