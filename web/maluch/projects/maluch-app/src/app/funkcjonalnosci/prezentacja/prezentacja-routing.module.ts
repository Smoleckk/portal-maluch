import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrezentacjaStronaGlownaComponent} from './strony/prezentacja-strona-glowna/prezentacja-strona-glowna.component';
import {
  PrezentacjaStronaKontaktComponent
} from "./strony/prezentacja-strona-kontakt/prezentacja-strona-kontakt.component";
import {StronaDokumentyComponent} from "./strony/strona-dokumenty/strona-dokumenty.component";
import {PrezentacjaStronaONasComponent} from "./strony/prezentacja-strona-o-nas/prezentacja-strona-o-nas.component";
import {
  PrezentacjaStronaPlacowkiComponent
} from "./strony/prezentacja-strona-placowki/prezentacja-strona-placowki.component";
import {
  PrezentacjaStonaPlacowkiSzczegolyComponent
} from "./strony/prezentacja-stona-placowki-szczegoly/prezentacja-stona-placowki-szczegoly.component";

const routes: Routes = [{
  path: '',
  component: PrezentacjaStronaGlownaComponent
}, {
  path: 'kontakt', component: PrezentacjaStronaKontaktComponent
},
  {
    path: 'dokumenty',
    component: StronaDokumentyComponent
  },
  {
    path: 'o-nas',
    component: PrezentacjaStronaONasComponent
  },{
    path: 'placowki',
    component: PrezentacjaStronaPlacowkiComponent
  },{
    path: 'placowki/:id',
    component: PrezentacjaStonaPlacowkiSzczegolyComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrezentacjaRoutingModule {
}
