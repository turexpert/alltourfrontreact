import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { PARTNERS_MOCK_DATA } from './partners.data';
import { SectionWrapperComponent } from '../../../shared/components/wrappers/section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [SectionWrapperComponent, CarouselModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  partners = PARTNERS_MOCK_DATA;
  carouselOptions: OwlOptions = {
    loop: true,
		margin: 30,
		autoWidth: true,
		center: true,
		nav: false,
		autoplaySpeed: 2000,
		autoplayTimeout: 4000,
		autoplay: true,
		autoplayHoverPause: true,
		dots: false,
  }
}
