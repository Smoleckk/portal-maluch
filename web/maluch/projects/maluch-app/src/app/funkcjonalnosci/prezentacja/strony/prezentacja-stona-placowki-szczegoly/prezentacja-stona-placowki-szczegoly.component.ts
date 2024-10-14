import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-prezentacja-stona-placowki-szczegoly',
  templateUrl: './prezentacja-stona-placowki-szczegoly.component.html',
  styleUrls: ['./prezentacja-stona-placowki-szczegoly.component.scss']
})
export class PrezentacjaStonaPlacowkiSzczegolyComponent implements OnInit {
  placowka: any;
  placowki = [{
    id: 1,
    nazwa: 'Przedszkole i Żłobek Gwiazdeczka',
    adres: 'ul. Gwiazdkowa 1, Gdańsk',
    godzinyOtwarcia: '7:00 - 17:00',
    opis: 'Gwiazdeczka to placówka, w której każde dziecko może rozwijać swoje talenty w przyjaznej atmosferze. Nasza kadra pedagogiczna posiada odpowiednie kwalifikacje oraz doświadczenie, co pozwala nam zapewnić dzieciom najwyższy poziom opieki.',
    opisPelny: 'Przedszkole i Żłobek Gwiazdeczka oferuje kompleksową opiekę oraz edukację najmłodszych dzieci. Nasze zajęcia są dostosowane do potrzeb i możliwości rozwojowych dzieci. Dbamy o to, aby każde dziecko czuło się u nas bezpiecznie i komfortowo. Nasi doświadczeni nauczyciele wspierają rozwój dzieci poprzez zabawę, kreatywne zajęcia i różnorodne aktywności. U nas znajdziesz przestronny ogród, w którym dzieci mogą bawić się na świeżym powietrzu, a także nowoczesne sale dydaktyczne, które stymulują ich rozwój. Oferujemy bogaty program edukacyjny, w tym naukę języka angielskiego oraz różnorodne zajęcia artystyczne i ruchowe. Nasze podejście opiera się na indywidualnym podejściu do każdego dziecka, co sprzyja jego rozwojowi i samodzielności.',
    dlaczegoWarto: 'Wybierając przedszkole i żłobek Gwiazdeczka, zyskują Państwo pewność, że dzieci są pod opieką wykwalifikowanej kadry. Oferujemy bogaty program edukacyjny, który rozwija ich umiejętności i pasje. Nasze placówki są dobrze wyposażone w materiały dydaktyczne, a nauczyciele stosują nowoczesne metody nauczania, co sprawia, że nauka jest przyjemnością. Dodatkowo, organizujemy różnorodne wydarzenia, które angażują rodziców oraz rozwijają umiejętności społeczne dzieci.',
    zdjecie: '/assets/szkola.jpg',
    frame: 'https://www.google.com/maps/embed?pb=...',
    link: '/placowki/1'
  }];

  warunkiLokalowe = {
    tytul: 'Warunki lokalowe',
    opis: [
      'Sale przedszkola są przestronne i jasne, dobrze doświetlone światłem naturalnym. Wnętrza zostały zaprojektowane przez architekta w ten sposób, by inspirowały do działań, pobudzały wyobraźnię, stwarzały przyjazne środowisko do zabawy i nauki oraz pobudzały pozytywne emocje.',
      'Przestrzeń powinna być tłem dla rozwoju dzieci. Nie powinna dominować, ale dawać poczucie komfortu i warunki do ćwiczenia wyobraźni i estetyki. Wnętrze nie powinno mieć nadmiaru bodźców.',
      'W tym celu kolorystyka sal jest stonowana, by nie rozpraszać dziecka, z nielicznymi mocniejszymi akcentami kolorystycznymi. Już same zabawki oraz ubranka dzieci wprowadzają dużo bodźców kolorystycznych. Staramy się również stosować jak najwięcej jasnych drewnianych mebli oraz zabawek i pomocy edukacyjnych z drewna i w stonowanej kolorystyce, estetycznie wykonanych. Bliska jest nam estetyka skandynawska.',
      'Cała przestrzeń przedszkola jest bezpieczna i nowoczesna oraz sprzyja nauce, rozwojowi i zabawie. Nasze placówki są regularnie kontrolowane pod kątem bezpieczeństwa i higieny, aby zapewnić dzieciom komfortowe warunki.'
    ]
  };

  lokal = {
    tytul: 'Lokal',
    opis: [
      'Lokal przedszkola mieści się w nowoczesnym kameralnym budynku biurowo-usługowym o projekcie kaskadowym z drewnianymi tarasami i przestronnymi oknami. Zaprojektowany z rozmachem i oddechem, otoczony zielenią, z rozległymi przestrzeniami wspólnymi i miejscami do rekreacji. Zapewniamy również parkingi, szatnie oraz prysznice dla rowerzystów.',
      'Prosta lekka konstrukcja z doświetlonymi i przestronnymi wnętrzami. Przedszkole dysponuje dużą przestrzenią 403 m² z przestronnymi i jasnymi salami, które są idealnie przystosowane do potrzeb dzieci. '
    ],
    punkty: [
      'cztery sale dydaktyczne',
      'sala ruchowa',
      'sala do pracy z logopedą lub do pracy indywidualnej',
      'łazienki dostosowane dla każdej grupy',
      'kuchnia i zaplecze socjalne',
      'szatnia'
    ]
  };

  ogrodek = {
    tytul: 'Ogródek',
    opis: 'Lokal przedszkola dysponuje własnym ogródkiem o powierzchni 280 m². To idealne miejsce do zabawy na świeżym powietrzu, które pozwala dzieciom na odkrywanie przyrody oraz rozwijanie swoich umiejętności społecznych i ruchowych. Ogródek jest wyposażony w różnorodne sprzęty i zabawki, które stymulują aktywność fizyczną dzieci, a także pozwalają na organizowanie różnorodnych zajęć na świeżym powietrzu.'
  };

  parking = {
    tytul: 'Parking samochodowy',
    opis: 'Dla rodziców dowożących dzieci samochodem, przygotowany jest bezpłatny 20-minutowy parking rotacyjny w garażu, pod lokalem przedszkola. To wygodne rozwiązanie, które ułatwia codzienne dowożenie dzieci do przedszkola. Dodatkowo, przy budynku znajduje się przestronny parking dla odwiedzających, co zapewnia komfort wszystkim użytkownikom.'
  };

  kadra = {
    tytul: 'Kadra z pasją',
    opis: [
      'Nasza kadra została dobrana pod kątem podejścia do dzieci, umiejętności pedagogicznych i dydaktycznych. Kluczem w doborze naszych nauczycieli etatowych, jak i nauczycieli zajęć dodatkowych była pasja do wykonywanego zawodu oraz chęć pracy z dziećmi. Chcemy, by dzięki temu dzieci miały zapewnioną doskonałą opiekę osób, które traktują je po partnersku i w indywidualny sposób.',
      'Stąd cała nasza kadra jest zespołem osób, które z radością i zaangażowaniem wykonują swoją pracę, która jest ich pasją. Nasi nauczyciele dobierają sprawdzone programy nauczania, jak również poszukują nowoczesnych metod pracy oraz doskonalą systematycznie swój warsztat pracy biorąc udział w szkoleniach. A wszystko to, by dzieci powierzone nam w opiekę miały zapewniony atrakcyjny nowoczesny program nauczania i z radością przekraczały progi naszego przedszkola każdego dnia.'
    ]
  };

  dyrektor = {
    tytul: 'Dyrektor przedszkola',
    opis: 'Monika Bajko, dyrektor przedszkola Happy Kids\' Academy Warszawa Mokotów, zarządza placówką z pasją i zaangażowaniem. Jej doświadczenie oraz podejście do dzieci i rodziców tworzy przyjazną atmosferę w przedszkolu, co sprzyja efektywnej współpracy oraz otwartości na potrzeby każdej rodziny.'
  };

  nauczyciele = {
    tytul: 'Nasi Nauczyciele',
    nauczycieleList: [
      {
        imie: 'Kinga',
        opis: 'Kinga to doświadczony nauczyciel, który z pasją prowadzi zajęcia w języku polskim. Jej podejście do dzieci jest pełne empatii i zrozumienia, co pozwala na budowanie pozytywnych relacji. Kinga organizuje ciekawe projekty edukacyjne, które angażują dzieci w twórcze działania i wspierają ich rozwój.'
      },
      {
        imie: 'Ania',
        opis: 'Ania to specjalistka w zakresie wczesnej edukacji, z doświadczeniem w pracy z dziećmi w różnym wieku. Jej kreatywność oraz umiejętność tworzenia inspirującego środowiska sprawiają, że dzieci z radością uczestniczą w zajęciach. Ania prowadzi również warsztaty artystyczne, rozwijając talenty plastyczne dzieci.'
      },
      {
        imie: 'Marek',
        opis: 'Marek to nauczyciel, który wprowadza dzieci w świat matematyki poprzez zabawę. Jego lekcje są pełne interakcji i radości, co sprawia, że dzieci chętnie rozwiązują zagadki matematyczne. Marek kładzie duży nacisk na rozwój umiejętności logicznego myślenia.'
      }
      // Można dodać więcej nauczycieli
    ]
  };

  organizacja = {
    tytul: 'Organizacja',
    godzinyOtwarcia: 'Nasze przedszkole jest otwarte od 7:30 do 18:00 przez cały rok, z wyjątkiem przerw na święta i dni ustawowo wolne od pracy. Dbamy o to, by dzieci mogły korzystać z różnorodnych zajęć w atrakcyjnych godzinach, dostosowanych do potrzeb rodziców.',
    opis: 'Przedszkole czynne jest przez cały rok, z wyjątkiem przerwy wakacyjnej, która trwa dwa tygodnie w lipcu. Dzieci mają zapewnioną opiekę w okresie ferii zimowych, co pozwala rodzicom na elastyczne planowanie urlopów. Regularnie organizujemy dni otwarte oraz spotkania z rodzicami, aby zapewnić dobrą komunikację i informowanie o postępach dzieci.'
  };

  grupy = {
    tytul: 'Grupy',
    opis: 'W roku szkolnym 2021/2022 prowadzimy 4 grupy przedszkolne, dostosowane do wieku i potrzeb dzieci. Każda grupa pracuje pod okiem wykwalifikowanej kadry, która stara się dostosować program do indywidualnych potrzeb każdego dziecka.',
    grupyList: [
      'Grupa 1: 2,5/3-latki',
      'Grupa 2: 4-latki',
      'Grupa 3: 5-latki',
      'Grupa 4: 5/6-latki'
    ]
  };


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.placowka = this.placowki.find(p => p.id === id);
  }
}
