import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANG_CODES } from 'src/app/util/lang.codes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currLang: string;

  //@Output()
  //toggleLang = new EventEmitter<string>();

  constructor(private translate: TranslateService) {
    this.configTranslation();
  }

  ngOnInit() {
    this.currLang = LANG_CODES.english;
  }

  changeLang(): void {
    if(this.currLang === LANG_CODES.english) {
      this.currLang = LANG_CODES.french;
    } else {
      this.currLang = LANG_CODES.english;
    }

    this.translate.use(this.currLang);
  }

  configTranslation(): void {
    this.translate.addLangs([LANG_CODES.english, LANG_CODES.french]);
    this.translate.setDefaultLang(LANG_CODES.english);
    this.translate.use(LANG_CODES.english);
  }
}
