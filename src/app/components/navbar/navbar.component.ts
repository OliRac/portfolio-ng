import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MultilangComponent } from '../multilang/multilang.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends MultilangComponent implements OnInit {
  constructor(private translate: TranslateService) {
    super(translate);
  }

  ngOnInit(): void {

  }
}
