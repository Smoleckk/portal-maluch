import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-placowki',
  templateUrl: './placowki.component.html',
  styleUrls: ['./placowki.component.scss']
})
export class PlacowkiComponent {
  @Input() kolorTla = '';
  @Input() czyWyswietlicMapy = false;


}
