import { Component, inject, OnInit } from '@angular/core';
import { PopularFeaturesComponent } from '../section/popular-features/popular-features.component';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from '../../shared/components/wrappers/section-wrapper/section-wrapper.component';
import { BestOffersComponent } from '../section/best-offers/best-offers.component';
import { BestHotelsComponent } from '../section/best-hotels/best-hotels.component';
import { PartnersComponent } from '../section/partners/partners.component';
import { TicketRecommendationComponent } from '../section/ticket-recommendation/ticket-recommendation.component';
import { EliteFormatComponent } from '../section/elite-format/elite-format.component';
import { AdviceExpertsComponent } from '../section/advice-experts/advice-experts.component';
import { FeedbackComponent } from '../section/feedback/feedback.component';
import { SubscribeSectionComponent } from '../section/subscribe-section/subscribe-section.component';
import { OfficesSectionComponent } from '../section/offices-section/offices-section.component';
import { map, Observable, startWith } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HomeBannerComponent } from '../section/banners/home-banner/home-banner.component';
import { BaseScreenSizeComponent } from '../../core/components/responsive/base-screen-size.component';
import { PopularFeaturesTopComponent } from '../section/popular-features-top/popular-features-top.component';
import { HotelService } from '../../core/services/hotel.service';
import { Hotel } from '../../shared/models/api.models';
import { MenuService } from '../../core/services/menu.service';

const Components = [
  HomeBannerComponent,
  PopularFeaturesComponent,
  PopularFeaturesTopComponent,
  BestOffersComponent,
  BestHotelsComponent,
  PartnersComponent,
  TicketRecommendationComponent,
  EliteFormatComponent,
  AdviceExpertsComponent,
  FeedbackComponent,
  SubscribeSectionComponent,
  OfficesSectionComponent,
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ...Components],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseScreenSizeComponent implements OnInit {
  public hotelService = inject(HotelService);
  public menuService = inject(MenuService);
  hotels$: Observable<Hotel[]> = this.hotelService.getHotels();

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(hotels => {
      console.log('Hotels:', hotels);
    });

    this.menuService.getMenu().subscribe(menu => {
      console.log('Menu:', menu);
    });
  }

}
