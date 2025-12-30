import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask'
import { SectionWrapperComponent } from '../../../shared/components/wrappers/section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-ticket-recommendation',
  standalone: true,
  imports: [CommonModule, SectionWrapperComponent, NgxMaskDirective, ReactiveFormsModule],
  templateUrl: './ticket-recommendation.component.html',
  styleUrl: './ticket-recommendation.component.scss',
  providers: [
    provideNgxMask(),
  ],
})
export class TicketRecommendationComponent {
  dashed = Array.from({ length: 9 }, (_, i) => i + 1);

  formGroup: FormGroup;
  placeholder = 'Введите ваш телефон';
  formSubmitted = false;


  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form Submitted', this.formGroup.value);
      this.formSubmitted = true;
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  focus(x: boolean) {
    this.placeholder = x ? 'Начните вводить код оператора' : 'Введите ваш телефон';
  }

  toggleGap() {
    const container = document.querySelector('.flex-container');
    container?.classList.toggle('expanded');
  }

}
