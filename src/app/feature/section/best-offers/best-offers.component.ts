import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SectionWrapperComponent } from '../../../shared/components/wrappers/section-wrapper/section-wrapper.component';
import { IOffer } from './best-offers.entity';
import { map, Observable, startWith, Subject, take, takeUntil, tap } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { collapsedExpandedAnimation } from '../../../shared/animations/collapsed-expanded.animation';
import { CountryService } from '../../../core/services/country.service';
import { Country } from '../../../shared/models/api.models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-best-offers',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionWrapperComponent],
  templateUrl: './best-offers.component.html',
  styleUrl: './best-offers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [collapsedExpandedAnimation]
})
export class BestOffersComponent implements OnInit, OnDestroy {
  public countryService = inject(CountryService);
  private destroy$ = new Subject<void>();


  public isCollapsed = true;
  public offers: Country[] = [];
  public visibleOffers: Country[] = [];
  public hiddenOffers: Country[] = [];


  private itemsToShowForMobile = 3;
  private itemsToShow = 6;

  constructor(private breakpointObserver: BreakpointObserver, private cd: ChangeDetectorRef) {}

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
    this.countryService.getBestCountries().pipe(
      take(1),
      tap(offer => console.log('Best countries: ', offer)),
      tap((offers) => this.offers = offers),
    ).subscribe(() => this.updateOffers(false));

    this.countryService.getBestHotelCountries().pipe(
      take(1),
      tap(offer => console.log('getBestHotelCountries: ', offer))
    ).subscribe();

    this.countryService.getCountries().pipe(
      take(1),
      tap(offer => console.log('getCountries: ', offer))
    ).subscribe();

    this.breakpointObserver.observe('(max-width: 768px)')
    .pipe(
      map(result => result.matches),
      tap(val => this.updateOffers(val)),
      startWith(false),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  private updateOffers(isMobile: boolean) {
    const items = isMobile ? this.itemsToShowForMobile : this.itemsToShow;
    if (this.offers.length <= items) {
      this.visibleOffers = this.offers;
      this.hiddenOffers = [];
    } else {
      this.visibleOffers = this.offers.slice(0, items);
      this.hiddenOffers = this.offers.slice(items);
    }
    this.cd.markForCheck();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

