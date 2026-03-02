import { TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideAnimationsAsync()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render all section components', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('app-header')).toBeTruthy();
    expect(el.querySelector('app-hero')).toBeTruthy();
    expect(el.querySelector('app-about')).toBeTruthy();
    expect(el.querySelector('app-skills')).toBeTruthy();
    expect(el.querySelector('app-projects')).toBeTruthy();
    expect(el.querySelector('app-education')).toBeTruthy();
    expect(el.querySelector('app-contact')).toBeTruthy();
    expect(el.querySelector('app-footer')).toBeTruthy();
  });
});
