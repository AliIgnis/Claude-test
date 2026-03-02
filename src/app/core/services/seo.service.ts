import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { I18nService } from './i18n.service';
import { effect } from '@angular/core';

interface MetaConfig {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

const SEO_DATA: Record<string, MetaConfig> = {
  de: {
    title: 'Ali Mahmood | Senior Backend-Entwickler',
    description: 'Ali Mahmood - Senior Backend-Entwickler. Freelance Softwareentwicklung mit Java, Spring Boot, Docker, Kubernetes und mehr.',
    ogTitle: 'Ali Mahmood - Senior Backend-Entwickler',
    ogDescription: 'Seit über einem Jahrzehnt entwickle ich qualitative Softwarelösungen für namhafte Unternehmen in Deutschland.'
  },
  en: {
    title: 'Ali Mahmood | Senior Backend Developer',
    description: 'Ali Mahmood - Senior Backend Developer. Freelance software development with Java, Spring Boot, Docker, Kubernetes and more.',
    ogTitle: 'Ali Mahmood - Senior Backend Developer',
    ogDescription: 'For over a decade, I have been developing high-quality software solutions for renowned companies in Germany.'
  }
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly i18n = inject(I18nService);

  constructor() {
    effect(() => {
      const lang = this.i18n.language();
      this.updateMeta(SEO_DATA[lang]);
    });
  }

  private updateMeta(config: MetaConfig): void {
    this.document.title = config.title;
    this.setMeta('description', config.description);
    this.setMeta('og:title', config.ogTitle, 'property');
    this.setMeta('og:description', config.ogDescription, 'property');
    this.setMeta('og:type', 'website', 'property');
    this.setMeta('og:locale', this.i18n.language() === 'de' ? 'de_DE' : 'en_US', 'property');
  }

  private setMeta(name: string, content: string, attr: 'name' | 'property' = 'name'): void {
    let el = this.document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = this.document.createElement('meta');
      el.setAttribute(attr, name);
      this.document.head.appendChild(el);
    }
    el.content = content;
  }
}
