import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a valid default theme', () => {
    expect(['light', 'dark']).toContain(service.theme());
  });

  it('should toggle theme', () => {
    const initial = service.theme();
    service.toggle();
    const toggled = service.theme();
    expect(toggled).not.toBe(initial);
    expect(['light', 'dark']).toContain(toggled);
  });

  it('should toggle back to original', () => {
    const initial = service.theme();
    service.toggle();
    service.toggle();
    expect(service.theme()).toBe(initial);
  });

  it('should set data-theme attribute on document', () => {
    TestBed.flushEffects();
    const theme = document.documentElement.getAttribute('data-theme');
    expect(theme).toBeTruthy();
    expect(['light', 'dark']).toContain(theme!);
  });

  it('should persist theme to localStorage after toggle', () => {
    service.toggle();
    TestBed.flushEffects();
    const stored = localStorage.getItem('portfolio-theme');
    expect(stored).toBeTruthy();
    expect(['light', 'dark']).toContain(stored!);
  });
});
