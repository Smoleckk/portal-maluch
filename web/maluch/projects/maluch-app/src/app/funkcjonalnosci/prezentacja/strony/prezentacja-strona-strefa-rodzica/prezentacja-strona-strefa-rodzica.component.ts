import {Component} from '@angular/core';

@Component({
  selector: 'app-prezentacja-strona-strefa-rodzica',
  templateUrl: './prezentacja-strona-strefa-rodzica.component.html',
  styleUrls: ['./prezentacja-strona-strefa-rodzica.component.scss']
})
export class PrezentacjaStronaStrefaRodzicaComponent {
  // Lista wyprawki
  wyprawka: string[] = [
    'Bidon',
    'Obuwie na zmianę',
    'Ubrania na zmianę (dopasowane do pory roku)',
    'Poduszka i kocyk'
  ];

  // Cennik
  cennik: string = `
    Poznaj czesne – zadzwoń: +48 730 012 254
    Zniżka dla rodzeństwa 10%
    Stawka dzienna za wyżywienie – 20 zł
    W ramach czesnego oferujemy: dwujęzyczność metodą immersji językowej, autorski program rozwoju inteligencji emocjonalnej...
  `;

  // Lista zasad przyprowadzania dziecka
  przyprowadzanie: string[] = [
    'Godziny przyprowadzania: Dzieci należy przyprowadzać do przedszkola w godzinach od 7:00 do 8:30.',
    'Punktualność: Rodzice są zobowiązani do przestrzegania wyznaczonych godzin. Przyprowadzenie dziecka po godzinie 8:30 może skutkować trudnościami w rozpoczęciu zajęć dydaktycznych.',
    'Bezpieczeństwo: Dziecko należy oddać bezpośrednio pod opiekę nauczyciela lub wyznaczonego pracownika przedszkola. Nie wolno zostawiać dzieci samych w szatni lub na terenie przedszkola.',
    'Stan zdrowia dziecka: Przed przyprowadzeniem dziecka rodzice powinni upewnić się, że dziecko jest zdrowe. Dzieci z objawami choroby, takimi jak gorączka, kaszel czy katar, nie powinny być przyprowadzane do przedszkola.',
    'Komunikacja z nauczycielami: W razie potrzeby rodzice mogą przekazać nauczycielowi ważne informacje dotyczące dziecka.'
  ];

  // Lista zasad odbioru dziecka
  odbior: string[] = [
    'Godziny odbioru: Dzieci należy odbierać w godzinach ustalonych przez przedszkole, tj. do godziny 17:00.',
    'Punktualność: Rodzice są zobowiązani do punktualnego odbierania dzieci. Spóźnienia powodują nałożenie umownej kary finansowej.',
    'Upoważnienia: Dziecko może być odebrane tylko przez osoby upoważnione przez rodziców. Osoby odbierające dziecko muszą okazać dowód tożsamości na prośbę pracowników przedszkola.',
    'Bezpieczeństwo: Dziecko należy odebrać bezpośrednio od nauczyciela lub wyznaczonego pracownika przedszkola.',
    'Informowanie o zmianach: W przypadku jakichkolwiek zmian dotyczących osoby odbierającej dziecko, rodzice powinni niezwłocznie poinformować o tym przedszkole.'
  ];
  // Informacje o posiłkach
  posilki: string[] = [
    'Śniadanie: 8:30 - 9:00',
    'Drugie śniadanie: 10:30 - 11:00',
    'Obiad: 12:30 - 13:00',
    'Podwieczorek: 15:00 - 15:30'
  ];
}
