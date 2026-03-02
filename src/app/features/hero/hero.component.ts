import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-hero',
  imports: [ScrollAnimateDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  protected readonly i18n = inject(I18nService);
}
