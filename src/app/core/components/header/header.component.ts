
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable, startWith } from 'rxjs';
import { HeaderMainComponent } from './header-main/header-main.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderMainComponent, HeaderMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobile$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile$ = this.breakpointObserver.observe('(max-width: 768px)')
    .pipe(
      map(result => result.matches),
      startWith(false)
    );
  }
}
