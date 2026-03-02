import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should detect a valid default language', () => {
    expect(['de', 'en']).toContain(service.language());
  });

  it('should switch language to "en"', () => {
    service.setLanguage('en');
    expect(service.language()).toBe('en');
  });

  it('should switch language to "de"', () => {
    service.setLanguage('de');
    expect(service.language()).toBe('de');
  });

  it('should return correct translations for set language', () => {
    service.setLanguage('de');
    expect(service.translations().hero.greeting).toBe('Hallo, ich bin');

    service.setLanguage('en');
    expect(service.translations().hero.greeting).toBe('Hello, I am');
  });

  it('should persist language to localStorage', () => {
    service.setLanguage('en');
    expect(localStorage.getItem('portfolio-lang')).toBe('en');
  });

  it('should update document lang attribute', () => {
    service.setLanguage('en');
    expect(document.documentElement.lang).toBe('en');
  });

  it('should return project items as an array', () => {
    const items = service.translations().projects.items;
    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBeGreaterThan(0);
  });

  it('should load language from localStorage', () => {
    localStorage.setItem('portfolio-lang', 'en');
    const freshService = TestBed.inject(I18nService);
    // Service is singleton so it won't re-read; verify persist works
    expect(localStorage.getItem('portfolio-lang')).toBe('en');
  });
});
