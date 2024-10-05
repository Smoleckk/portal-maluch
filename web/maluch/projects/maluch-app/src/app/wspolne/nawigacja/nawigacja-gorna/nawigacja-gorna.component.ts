import { Component } from '@angular/core';

@Component({
  selector: 'app-nawigacja-gorna',
  templateUrl: './nawigacja-gorna.component.html',
  styleUrls: ['./nawigacja-gorna.component.scss']
})
export class NawigacjaGornaComponent {
  isNavbarActive: boolean = false;

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }
}

