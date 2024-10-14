import { Component } from '@angular/core';

@Component({
  selector: 'app-strona-dokumenty',
  templateUrl: './strona-dokumenty.component.html',
  styleUrls: ['./strona-dokumenty.component.scss']
})
export class StronaDokumentyComponent {

  dokumenty = [
    { nazwa: 'Informator przedszkolaka' },
    { nazwa: 'Karta zgłoszeń przedszkole' },
    { nazwa: 'Karta zgłoszeń żłobek' },
    { nazwa: 'Regulamin przedszkola i żłobka' },
    { nazwa: 'Umowa o świadczenie usług' },
    { nazwa: 'Karta odbioru dziecka' },
    { nazwa: 'Zgoda na udzielanie pierwszej pomocy' },
    { nazwa: 'Zgoda na przetwarzanie danych osobowych' },
    { nazwa: 'Zgoda na publikację wizerunku dziecka' },
    { nazwa: 'Plan dnia' },
    { nazwa: 'Menu' },
    { nazwa: 'Roczny kalendarz wydarzeń' },
    { nazwa: 'Polityka prywatności' }
  ];
}
