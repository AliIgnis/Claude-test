import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
      providers: [provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 7 skill categories', () => {
    expect(component.categories.length).toBe(7);
  });

  it('should render all categories in DOM', () => {
    const el: HTMLElement = fixture.nativeElement;
    const categories = el.querySelectorAll('.skill-category');
    expect(categories.length).toBe(7);
  });

  it('should render skill tags', () => {
    const el: HTMLElement = fixture.nativeElement;
    const tags = el.querySelectorAll('.skill-tag');
    expect(tags.length).toBeGreaterThan(0);
  });

  it('should mark highlighted skills', () => {
    const el: HTMLElement = fixture.nativeElement;
    const highlighted = el.querySelectorAll('.skill-tag.highlight');
    expect(highlighted.length).toBeGreaterThan(0);
  });

  it('should return localized category label', () => {
    const label = component.getCategoryLabel('frameworks');
    expect(label).toBeTruthy();
    expect(label).not.toBe('frameworks');
  });
});
