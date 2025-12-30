import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRotateOnScroll]',
  standalone: true
})
export class RotateOnScrollDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rotation = window.scrollY / 5;
    this.renderer.setStyle(this.el.nativeElement, 'transform', `rotate(${rotation}deg)`);
  }
}
