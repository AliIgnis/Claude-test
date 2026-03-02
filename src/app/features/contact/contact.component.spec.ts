import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    expect(component.contactForm.valid).toBe(false);
  });

  it('should be valid with correct data', () => {
    component.contactForm.setValue({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Hello'
    });
    expect(component.contactForm.valid).toBe(true);
  });

  it('should set error status on invalid submit', () => {
    component.onSubmit();
    expect(component.formStatus()).toBe('error');
  });

  it('should set success status on valid submit', () => {
    component.contactForm.setValue({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Hello'
    });
    component.onSubmit();
    expect(component.formStatus()).toBe('success');
  });

  it('should reset form on successful submit', () => {
    component.contactForm.setValue({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Hello'
    });
    component.onSubmit();
    expect(component.contactForm.value.name).toBe('');
  });

  it('should set email error key for invalid email format', () => {
    component.contactForm.setValue({
      name: 'Test',
      email: 'invalid-email',
      message: 'Hello'
    });
    component.onSubmit();
    expect(component.formErrorKey()).toBe('contact.errorEmail');
  });

  it('should render form fields', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('#form-name')).toBeTruthy();
    expect(el.querySelector('#form-email')).toBeTruthy();
    expect(el.querySelector('#form-message')).toBeTruthy();
  });
});
