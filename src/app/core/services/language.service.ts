import { Injectable, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  private readonly translocoService = inject(TranslocoService);

  readonly supportedLanguages = ["en", "fr"];
  readonly lang$ = this.translocoService.langChanges$;

  init() {
    this.syncDocument(this.translocoService.getActiveLang());
    this.lang$.subscribe((lang) => this.syncDocument(lang));
  }

  setActiveLanguage(lang: string) {
    if (!this.isLanguageSupported(lang)) return;
    this.translocoService.setActiveLang(lang);
  }

  get activeLanguage() {
    return this.translocoService.getActiveLang();
  }

  private isLanguageSupported(lang: string): lang is (typeof this.supportedLanguages)[number] {
    return (this.supportedLanguages as readonly string[]).includes(lang);
  }

  private syncDocument(lang: string) {
    document.documentElement.lang = lang;
  }
}
