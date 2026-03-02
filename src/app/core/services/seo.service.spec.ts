import { TestBed } from '@angular/core/testing';
import { SeoService } from './seo.service';
import { I18nService } from './i18n.service';

describe('SeoService', () => {
  let service: SeoService;
  let i18n: I18nService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    i18n = TestBed.inject(I18nService);
    service = TestBed.inject(SeoService);
    TestBed.flushEffects();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set German title by default', () => {
    expect(document.title).toContain('Ali Mahmood');
  });

  it('should set meta description', () => {
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    expect(meta).toBeTruthy();
    expect(meta.content).toContain('Ali Mahmood');
  });

  it('should set OG tags', () => {
    const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement;
    expect(ogTitle).toBeTruthy();
    expect(ogTitle.content).toContain('Ali Mahmood');
  });

  it('should update meta when language changes', () => {
    i18n.setLanguage('en');
    TestBed.flushEffects();
    expect(document.title).toContain('Senior Backend Developer');
  });
});
