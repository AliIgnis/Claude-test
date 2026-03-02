import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-projects',
  imports: [ScrollAnimateDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  protected readonly i18n = inject(I18nService);

  get projects(): Project[] {
    return this.i18n.translations().projects.items;
  }

  trackByCompany(_index: number, project: Project): string {
    return project.company;
  }
}
