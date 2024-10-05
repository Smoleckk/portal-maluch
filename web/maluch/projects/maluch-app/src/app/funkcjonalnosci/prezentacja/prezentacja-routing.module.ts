import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrezentacjaStronaGlownaComponent} from './strony/prezentacja-strona-glowna/prezentacja-strona-glowna.component';

const routes: Routes = [{
  path: '',
  component: PrezentacjaStronaGlownaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrezentacjaRoutingModule {
}
