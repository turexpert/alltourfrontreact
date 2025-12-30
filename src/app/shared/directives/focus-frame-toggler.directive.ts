import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[focus-frame-toggler]',
  standalone: true,
})
export class FocusFrameTogglerDirective {
  private readonly className: string = 'isKeyDown';

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.removeClass();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.isTabKey(event)) {
      this.addClass();
    }
  }

  private addClass(): void {
    document.body.classList.add(this.className);
  }

  private removeClass(): void {
    document.body.classList.remove(this.className);
  }

  private isTabKey(event: KeyboardEvent): boolean {
    return event.key === 'Tab';
  }

  isKeyDown(): boolean {
    return document.body.classList.contains(this.className);
  }
}
