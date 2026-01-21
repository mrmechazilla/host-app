import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TranslocoPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  private readonly languageService = inject(LanguageService);

  readonly supportedLanguages = this.languageService.supportedLanguages;
  readonly activeLanguage = this.languageService.activeLanguage;

  onLanguageChange(language: string): void {
    // Guard against random values coming from the DOM.
    if (this.supportedLanguages.includes(language)) {
      this.languageService.setActiveLanguage(language);
    }
  }

}
