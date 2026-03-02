import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  imports: [ScrollAnimateDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  protected readonly i18n = inject(I18nService);

  readonly highlights = [
    { key: 'experience' as const, icon: '\u25CF' },
    { key: 'location' as const, icon: '\u25CF' },
    { key: 'freelance' as const, icon: '\u25CF' }
  ];
}
