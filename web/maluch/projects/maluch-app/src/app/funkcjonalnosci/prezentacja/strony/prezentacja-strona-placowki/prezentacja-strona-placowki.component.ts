import { Component } from '@angular/core';

@Component({
  selector: 'app-prezentacja-strona-placowki',
  templateUrl: './prezentacja-strona-placowki.component.html',
  styleUrls: ['./prezentacja-strona-placowki.component.scss']
})
export class PrezentacjaStronaPlacowkiComponent {

  placowki = [
    {
      nazwa: 'Placówka 1',
      adres: 'ul. Gwiazdkowa 1, Warszawa',
      godzinyOtwarcia: '7:00 - 17:00',
      opis: 'Placówka 1 znajduje się w spokojnej okolicy, oferując przestronny ogród i nowoczesne sale zabaw.',
      zdjecie: '/assets/szkola1.jpg',
      link: '/placowki/1'
    },
    {
      nazwa: 'Placówka 2',
      adres: 'ul. Bajkowa 15, Poznań',
      godzinyOtwarcia: '7:30 - 17:30',
      opis: 'Placówka 2 posiada szeroką ofertę zajęć dodatkowych oraz nowoczesne zaplecze edukacyjne.',
      zdjecie: '/assets/szkola2.jpg',
      link: '/placowki/2'
    },
    {
      nazwa: 'Placówka 3',
      adres: 'ul. Słoneczna 45, Kraków',
      godzinyOtwarcia: '7:00 - 16:30',
      opis: 'Placówka 3 specjalizuje się w rozwijaniu umiejętności językowych dzieci poprzez zabawę.',
      zdjecie: '/assets/szkola3.jpg',
      link: '/placowki/3'
    },
    {
      nazwa: 'Placówka 4',
      adres: 'ul. Kwiatowa 10, Wrocław',
      godzinyOtwarcia: '8:00 - 17:00',
      opis: 'Placówka 4 oferuje duży ogród i bogatą ofertę zajęć sportowych.',
      zdjecie: '/assets/szkola.jpg',
      link: '/placowki/4'
    }
  ];
}
