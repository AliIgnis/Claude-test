import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { SKILL_CATEGORIES } from '../../core/data/skills';
import { SkillCategory } from '../../core/models/project.model';

@Component({
  selector: 'app-skills',
  imports: [ScrollAnimateDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  protected readonly i18n = inject(I18nService);
  readonly categories: SkillCategory[] = SKILL_CATEGORIES;

  getCategoryLabel(key: string): string {
    return this.i18n.translations().skills.categories[key] ?? key;
  }
}
