import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { SectionWrapperComponent } from '../../../shared/components/wrappers/section-wrapper/section-wrapper.component';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { FEEDBACK_MOCK_DATA } from './feedback.data';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, SectionWrapperComponent, CarouselModule, FormsModule, ReactiveFormsModule, CarouselModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackComponent {
  @ViewChild('feedbackCarousel', { static: false, read: CarouselComponent }) feedbackCarousel!: CarouselComponent;

  feedback = FEEDBACK_MOCK_DATA;

  carouselOptions: OwlOptions = {
    loop: false,
    margin: 30,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    nav: true,
    dots: false,
    items: 2,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  };

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) { }

  initCarousel() {
    this.changeDetectorRef.detectChanges();
  }

}
