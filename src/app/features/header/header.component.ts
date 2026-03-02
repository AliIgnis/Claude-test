import { Component, inject, signal, HostListener } from '@angular/core';
import { I18nService, Language } from '../../core/services/i18n.service';
import { ThemeService } from '../../core/services/theme.service';
import { NavTranslations } from '../../core/models/project.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly themeService = inject(ThemeService);

  readonly mobileMenuOpen = signal(false);
  readonly scrolled = signal(false);

  readonly navLinks: { key: keyof NavTranslations; fragment: string }[] = [
    { key: 'about', fragment: 'about' },
    { key: 'skills', fragment: 'skills' },
    { key: 'projects', fragment: 'projects' },
    { key: 'education', fragment: 'education' },
    { key: 'contact', fragment: 'contact' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  setLanguage(lang: Language): void {
    this.i18n.setLanguage(lang);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
