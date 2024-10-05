import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrezentacjaRoutingModule } from './prezentacja-routing.module';
import { PrezentacjaStronaGlownaComponent } from './strony/prezentacja-strona-glowna/prezentacja-strona-glowna.component';
import { PrezentacjaStronaKontaktComponent } from './strony/prezentacja-strona-kontakt/prezentacja-strona-kontakt.component';
import { NawigacjaGornaComponent } from '../../wspolne/nawigacja/nawigacja-gorna/nawigacja-gorna.component';


@NgModule({
  declarations: [
    PrezentacjaStronaGlownaComponent,
    PrezentacjaStronaKontaktComponent,
  ],
  imports: [
    CommonModule,
    PrezentacjaRoutingModule
  ]
})
export class PrezentacjaModule { }
