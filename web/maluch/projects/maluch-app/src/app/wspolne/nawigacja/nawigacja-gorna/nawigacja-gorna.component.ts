import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-nawigacja-gorna',
  templateUrl: './nawigacja-gorna.component.html',
  styleUrls: ['./nawigacja-gorna.component.scss']
})
export class NawigacjaGornaComponent implements OnInit {
  czyRozwinac: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.czyRozwinac = false;
    });
  }

  toggleNavbar() {
    this.czyRozwinac = !this.czyRozwinac;
  }
}

