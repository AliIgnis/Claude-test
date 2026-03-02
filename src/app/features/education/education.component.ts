import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-education',
  imports: [ScrollAnimateDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  protected readonly i18n = inject(I18nService);

  readonly languages = [
    { name: 'Deutsch', level: 'Muttersprachler / Native', percent: 100 },
    { name: 'English', level: 'Verhandlungssicher / Business fluent', percent: 90 }
  ];
}
