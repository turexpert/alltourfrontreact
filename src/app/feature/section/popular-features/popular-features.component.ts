import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SectionWrapperComponent } from '../../../shared/components/wrappers/section-wrapper/section-wrapper.component';
import { POPULAR_FEATURES_ITEMS, POPULAR_FEATURES_OPTIONS } from './popular-features.data';


@Component({
  selector: 'app-popular-features',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionWrapperComponent, CarouselModule],
  templateUrl: './popular-features.component.html',
  styleUrl: './popular-features.component.scss'
})
export class PopularFeaturesComponent {
  customOptions: OwlOptions = POPULAR_FEATURES_OPTIONS;
  items = POPULAR_FEATURES_ITEMS;
}
