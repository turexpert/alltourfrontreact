import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  template: ''
})
export class BaseScreenSizeComponent implements OnDestroy {
  isMobile$: Observable<boolean>;
  private destroy$ = new Subject<void>();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile$ = this.breakpointObserver.observe('(max-width: 768px)')
      .pipe(
        map(result => result.matches),
        startWith(false),
        takeUntil(this.destroy$)
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
