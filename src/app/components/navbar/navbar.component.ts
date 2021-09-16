import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  burger: HTMLElement;
  menu: HTMLElement;

  constructor(private translate: TranslateService) {

  }

  ngOnInit(): void {
    this.burger = document.getElementById("burger");
    this.menu = document.getElementById("menu");
  }

  toggleBurgerMenu() {
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }
}
