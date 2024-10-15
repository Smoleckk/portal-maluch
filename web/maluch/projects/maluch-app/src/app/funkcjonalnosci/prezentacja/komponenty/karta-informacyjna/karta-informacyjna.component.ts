import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-karta-informacyjna',
  templateUrl: './karta-informacyjna.component.html',
  styleUrls: ['./karta-informacyjna.component.scss']
})
export class KartaInformacyjnaComponent {
  // Przyjmujemy listę tekstów do wyświetlenia w liście
  @Input() title: string = '';  // Tytuł sekcji
  @Input() contentList: string[] = [];  // Zawartość w formie listy
  @Input() description: string = '';  // Dodatkowy tekst (np. opis)
  @Input() buttonText: string = '';  // Tekst na przycisku
  @Input() imageUrl: string = '';  // URL obrazka
  @Input() zdjeciePoLewej: boolean = true // Pozycja obrazka, domyślnie po lewej stronie
  @Input() zdjeciePoPrawej: boolean = false // Pozycja obrazka, domyślnie po lewej stronie

}
