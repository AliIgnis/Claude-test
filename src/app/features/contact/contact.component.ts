import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { I18nService } from '../../core/services/i18n.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

type FormStatus = 'idle' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, ScrollAnimateDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  protected readonly i18n = inject(I18nService);
  private readonly fb = inject(FormBuilder);

  readonly formStatus = signal<FormStatus>('idle');
  readonly formErrorKey = signal<string>('');

  readonly contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  onSubmit(): void {
    this.formStatus.set('idle');

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      const emailCtrl = this.contactForm.controls.email;
      this.formErrorKey.set(
        emailCtrl.hasError('email') ? 'contact.errorEmail' : 'contact.errorRequired'
      );
      this.formStatus.set('error');
      return;
    }

    this.contactForm.reset();
    this.formStatus.set('success');

    setTimeout(() => this.formStatus.set('idle'), 5000);
  }

  getErrorMessage(): string {
    const key = this.formErrorKey();
    const keys = key.split('.');
    let result: unknown = this.i18n.translations();
    for (const k of keys) {
      if (result == null || typeof result !== 'object') return key;
      result = (result as Record<string, unknown>)[k];
    }
    return typeof result === 'string' ? result : key;
  }
}
