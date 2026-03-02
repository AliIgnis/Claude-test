import {
  Directive,
  ElementRef,
  inject,
  OnInit,
  OnDestroy,
  input
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  host: {
    '[class.animate-on-scroll]': 'true',
    '[class.visible]': 'isVisible',
    '[style.transition-delay]': 'delay()'
  }
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  delay = input('0s');

  isVisible = false;

  private readonly el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    if (!('IntersectionObserver' in window)) {
      this.isVisible = true;
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
