import { Component } from '@angular/core';
import { RotateOnScrollDirective } from '../../../shared/directives/rotate-on-scroll.directive';

@Component({
  selector: 'app-subscribe-section',
  standalone: true,
  imports: [RotateOnScrollDirective],
  templateUrl: './subscribe-section.component.html',
  styleUrl: './subscribe-section.component.scss'
})
export class SubscribeSectionComponent {

}
