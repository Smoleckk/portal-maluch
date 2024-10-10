import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrezentacjaStronaGlownaComponent} from './strony/prezentacja-strona-glowna/prezentacja-strona-glowna.component';
import {
  PrezentacjaStronaKontaktComponent
} from "./strony/prezentacja-strona-kontakt/prezentacja-strona-kontakt.component";
import {StronaDokumentyComponent} from "./strony/strona-dokumenty/strona-dokumenty.component";

const routes: Routes = [{
  path: '',
  component: PrezentacjaStronaGlownaComponent
}, {
  path: 'kontakt', component: PrezentacjaStronaKontaktComponent
},
  {
    path: 'dokumenty',
    component: StronaDokumentyComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrezentacjaRoutingModule {
}
