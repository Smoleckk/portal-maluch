import {Component} from '@angular/core';

@Component({
  selector: 'app-prezentacja-strona-glowna',
  templateUrl: './prezentacja-strona-glowna.component.html',
  styleUrls: ['./prezentacja-strona-glowna.component.scss']
})
export class PrezentacjaStronaGlownaComponent {
  dlaczegoMy: string[] = [
    '12 lat doświadczenia w prowadzeniu żłobka i przedszkola na najwyższym poziomie',
    'Indywidualne podejście do każdego dziecka, małe grupy (10-15 dzieci), opiekowane przez wykwalifikowanych nauczycieli i opiekunów',
    'Trzy nowoczesne placówki: ul. Lipińska 11, ul. Skalbmierska 8A oraz ul. Nocznickiego 29B',
    'Opieka specjalistyczna: nauczyciel wychowania przedszkolnego, psycholog, logopeda, pedagog specjalny, terapeuta integracji sensorycznej oraz nauczyciel muzyki',
    'Spokojna i bezpieczna lokalizacja blisko terenów zielonych',
    'Godziny otwarcia: 7:30 – 17:30, od poniedziałku do piątku',
    'Zajęcia z języka angielskiego (3 razy w tygodniu) już od najmłodszych grup',
    'Aktywności muzyczno-rytmiczne i taneczne (3 razy w tygodniu)',
    'Logopedia: ćwiczenia buzi i języka oraz profilaktyka mowy (2 razy w tygodniu)',
    'Wsparcie psychologa: rozwijanie umiejętności społecznych, budowanie poczucia wartości i radzenie sobie z emocjami (raz w tygodniu)',
    'Dodatkowo oferujemy zajęcia z plastyki i kreatywnego myślenia, które rozwijają umiejętności artystyczne dzieci i pomagają w wyrażaniu emocji',
    'Placówka ma na celu wspieranie rozwoju fizycznego poprzez codzienne aktywności na świeżym powietrzu, zabawy ruchowe oraz gry zespołowe',
    'Zapewniamy codzienne, zdrowe posiłki, przygotowane z myślą o zbilansowanej diecie dzieci',
    'Opieka nad dziećmi w godzinach dopasowanych do potrzeb rodziców, z możliwością przedłużenia pobytu w przedszkolu',
    'Współpracujemy z rodzicami w celu ciągłego rozwoju edukacyjnego i społecznego dzieci'
  ];

  kadraPedagogiczna: string[] = [
    'Nawiązują wyjątkowy kontakt z każdym dzieckiem, budując relacje oparte na zaufaniu',
    'Dostrzegają indywidualne potrzeby i talenty dzieci, wspierając ich rozwój',
    'Stosują nowoczesne metody wychowawcze i edukacyjne, które gwarantują skuteczną naukę i rozwój emocjonalny',
    'Każdy z naszych nauczycieli posiada odpowiednie kwalifikacje oraz doświadczenie, co zapewnia wysoką jakość opieki i edukacji',
    'Kadra regularnie uczestniczy w szkoleniach, dzięki którym stale podnosi swoje kompetencje i dostosowuje metody pracy do najnowszych trendów w edukacji',
    'W naszej placówce dbamy o indywidualny rozwój każdego dziecka, a nauczyciele współpracują z rodzicami, aby jak najlepiej wspierać ich pociechy',
    'Zespół nauczycieli współpracuje ze specjalistami, takimi jak logopedzi i psychologowie, aby zagwarantować wsparcie dzieciom z różnorodnymi potrzebami'
  ];
}
