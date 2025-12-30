import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { SectionWrapperComponent } from '../../../shared/components/wrappers/section-wrapper/section-wrapper.component';
import { CarouselModule, SlidesOutputData, CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HOTELS_MOCK_DATA } from './best-hotels.data';

@Component({
  selector: 'app-best-hotels',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SectionWrapperComponent, NgSelectModule, CarouselModule],
  templateUrl: './best-hotels.component.html',
  styleUrl: './best-hotels.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BestHotelsComponent implements OnInit {

  @ViewChild('carousel', { static: false }) carousel!: CarouselComponent ;

  hotels = HOTELS_MOCK_DATA;

  countries = this.hotels
  .map(hotel => hotel.country)
  .filter((country, index, self) => self.indexOf(country) === index);

  selectedCountry = this.countries[0];

  carouselOptions: OwlOptions = {
    loop: false,
    margin: 30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    nav: true,
    dots: false,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  };

  carouselOptions2: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
  };

  ngOnInit(): void {
    this.hotels = HOTELS_MOCK_DATA.filter(x => x.country === this.selectedCountry);
  }

  onCountryChange(event: any): void {
    this.hotels = HOTELS_MOCK_DATA.filter(x => x.country === event);
  }
}
