import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SzablonGlownyComponent} from "./wspolne/szablony/szablon-glownwy/szablon-glowny.component";

const routes: Routes = [
  {
    path: '',
    component: SzablonGlownyComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./funkcjonalnosci/prezentacja/prezentacja.module').then(m => m.PrezentacjaModule)

      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
