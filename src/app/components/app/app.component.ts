import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANG_CODES } from 'src/app/util/lang.codes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    this.configTranslation();
  }

  toggleLang(): void {
    this.getCurrentLang() === LANG_CODES.english ? this.setCurrentLang(LANG_CODES.french) : this.setCurrentLang(LANG_CODES.english);
  }

  configTranslation(): void {
    this.translate.addLangs([LANG_CODES.english, LANG_CODES.french]);
    this.translate.setDefaultLang(LANG_CODES.english);
    this.translate.use(LANG_CODES.english);
  }

  getCurrentLang(): string {
    return this.translate.currentLang;
  }

  setCurrentLang(langCode: string): void {
    this.translate.use(langCode);
  }
}
