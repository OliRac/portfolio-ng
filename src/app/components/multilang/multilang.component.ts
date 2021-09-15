import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-multilang',
  templateUrl: './multilang.component.html',
  styleUrls: ['./multilang.component.css']
})
export class MultilangComponent implements OnInit {
  @Input()
  language: string;

  constructor(private translateService: TranslateService) {

  }

  ngOnInit(): void {
  }
}
