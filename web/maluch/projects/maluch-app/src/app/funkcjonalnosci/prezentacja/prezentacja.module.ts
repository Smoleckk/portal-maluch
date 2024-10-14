import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PrezentacjaRoutingModule} from './prezentacja-routing.module';
import {PrezentacjaStronaGlownaComponent} from './strony/prezentacja-strona-glowna/prezentacja-strona-glowna.component';
import {
  PrezentacjaStronaKontaktComponent
} from './strony/prezentacja-strona-kontakt/prezentacja-strona-kontakt.component';
import { FooterComponent } from './komponenty/footer/footer.component';
import { HeaderComponent } from './komponenty/header/header.component';
import { SubHeaderComponent } from './komponenty/sub-header/sub-header.component';
import { PlacowkiComponent } from './komponenty/placowki/placowki.component';
import { StronaDokumentyComponent } from './strony/strona-dokumenty/strona-dokumenty.component';
import { PrezentacjaStronaONasComponent } from './strony/prezentacja-strona-o-nas/prezentacja-strona-o-nas.component';


@NgModule({
    declarations: [
        PrezentacjaStronaGlownaComponent,
        PrezentacjaStronaKontaktComponent,
        FooterComponent,
        HeaderComponent,
        SubHeaderComponent,
        PlacowkiComponent,
        StronaDokumentyComponent,
        PrezentacjaStronaONasComponent,
    ],
    exports: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        PrezentacjaRoutingModule
    ]
})
export class PrezentacjaModule {
}
