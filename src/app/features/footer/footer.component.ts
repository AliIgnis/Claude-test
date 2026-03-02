import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly i18n = inject(I18nService);
  readonly currentYear = new Date().getFullYear();
}
