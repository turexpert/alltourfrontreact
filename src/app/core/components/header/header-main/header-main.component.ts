import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';

import { HeaderTopComponent } from '../header-top/header-top.component';
import { HeaderNavbarComponent } from '../header-navbar/header-navbar.component';
import { LoginComponent } from '../../../../feature/forms/login/login.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-main',
  standalone: true,
  imports: [CommonModule, HeaderNavbarComponent, HeaderTopComponent, RouterModule],
  templateUrl: './header-main.component.html',
  styleUrl: './header-main.component.scss'
})
export class HeaderMainComponent  {
  private lastScrollTop = 0;
  isHeaderHidden = false;

  dialog = inject(Dialog);


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isHeaderHidden = currentScrollTop > this.lastScrollTop;
    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }

  openDialog() {
    this.dialog.open(LoginComponent, {
      minWidth: '300px',
    });
  }
}
