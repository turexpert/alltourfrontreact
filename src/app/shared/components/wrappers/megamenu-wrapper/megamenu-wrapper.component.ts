import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-megamenu-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './megamenu-wrapper.component.html',
  styleUrl: './megamenu-wrapper.component.scss'
})
export class MegaMenuWrapperComponent {
  @Input() itemName = "";

  isOpen: boolean = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
