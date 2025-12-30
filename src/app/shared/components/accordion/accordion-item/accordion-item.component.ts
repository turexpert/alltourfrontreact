import { Component, EventEmitter, Input, Output } from '@angular/core';
import { openCloseAnimation } from '../../../animations/open-close.animation';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss',
  animations: [openCloseAnimation]
})
export class AccordionItemComponent {
  private _isOpen: boolean = false;

  @Output() toggle = new EventEmitter<boolean>();

  @Input()
  get isOpen(): boolean {
    return this._isOpen;
  }

  set isOpen(value: boolean) {
    if (this._isOpen !== value) {
      this._isOpen = value;
      this.toggle.emit(this._isOpen);
    }
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
