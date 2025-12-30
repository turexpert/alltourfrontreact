import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './section-wrapper.component.html',
  styleUrl: './section-wrapper.component.scss'
})
export class SectionWrapperComponent {
  @Input() public hasContainer = true;
  @Input() public hasContainerForHeader = false;
  @Input() public hasHeader = true;
}
