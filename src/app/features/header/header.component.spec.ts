import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render logo', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.logo')?.textContent).toBe('AM');
  });

  it('should render all nav links', () => {
    const el: HTMLElement = fixture.nativeElement;
    const links = el.querySelectorAll('.nav-link');
    expect(links.length).toBe(5);
  });

  it('should toggle mobile menu', () => {
    expect(component.mobileMenuOpen()).toBe(false);
    component.toggleMobileMenu();
    expect(component.mobileMenuOpen()).toBe(true);
    component.toggleMobileMenu();
    expect(component.mobileMenuOpen()).toBe(false);
  });

  it('should close mobile menu', () => {
    component.toggleMobileMenu();
    expect(component.mobileMenuOpen()).toBe(true);
    component.closeMobileMenu();
    expect(component.mobileMenuOpen()).toBe(false);
  });

  it('should render language buttons', () => {
    const el: HTMLElement = fixture.nativeElement;
    const buttons = el.querySelectorAll('.lang-btn');
    expect(buttons.length).toBe(2);
  });

  it('should render theme toggle', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.theme-toggle')).toBeTruthy();
  });

  it('should set scrolled when scrollY > 50', () => {
    expect(component.scrolled()).toBe(false);
    // Simulate scrolling (manually trigger since we cannot scroll in tests)
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    component.onScroll();
    expect(component.scrolled()).toBe(true);
  });
});
