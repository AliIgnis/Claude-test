import { Injectable, signal, computed } from '@angular/core';
import { TranslationSet } from '../models/project.model';
import { DE_TRANSLATIONS } from '../data/de';
import { EN_TRANSLATIONS } from '../data/en';

export type Language = 'de' | 'en';

const TRANSLATIONS: Record<Language, TranslationSet> = {
  de: DE_TRANSLATIONS,
  en: EN_TRANSLATIONS
};

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly currentLang = signal<Language>(this.detectLanguage());

  readonly language = this.currentLang.asReadonly();
  readonly translations = computed(() => TRANSLATIONS[this.currentLang()]);

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage unavailable (e.g. private browsing)
    }
    document.documentElement.lang = lang;
  }

  private detectLanguage(): Language {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'de' || stored === 'en') return stored;
    } catch {
      // localStorage unavailable
    }
    const browserLang = navigator.language?.slice(0, 2);
    return browserLang === 'en' ? 'en' : 'de';
  }
}
