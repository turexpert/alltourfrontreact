import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../../shared/components/wrappers/section-wrapper/section-wrapper.component';
import { EXPERT_CARDS } from './advice-experts.data';

@Component({
  selector: 'app-advice-experts',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './advice-experts.component.html',
  styleUrl: './advice-experts.component.scss'
})
export class AdviceExpertsComponent {
  expertCards = EXPERT_CARDS;
}
