import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render projects from translations', () => {
    expect(component.projects.length).toBeGreaterThan(0);
  });

  it('should render timeline items in the DOM', () => {
    const el: HTMLElement = fixture.nativeElement;
    const items = el.querySelectorAll('.timeline-item');
    expect(items.length).toBe(component.projects.length);
  });

  it('should mark first project dot as current', () => {
    const el: HTMLElement = fixture.nativeElement;
    const firstDot = el.querySelector('.timeline-dot');
    expect(firstDot?.classList.contains('current')).toBe(true);
  });

  it('should render tech badges for projects with tech', () => {
    const el: HTMLElement = fixture.nativeElement;
    const badges = el.querySelectorAll('.tech-badge');
    expect(badges.length).toBeGreaterThan(0);
  });

  it('should render section heading', () => {
    const el: HTMLElement = fixture.nativeElement;
    const heading = el.querySelector('.section-heading');
    expect(heading?.textContent).toBeTruthy();
  });
});
