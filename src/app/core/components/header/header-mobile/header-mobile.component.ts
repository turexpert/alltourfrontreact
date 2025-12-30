import { animate, state, style, transition, trigger } from '@angular/animations';
import { Dialog } from '@angular/cdk/dialog';
import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoginComponent } from '../../../../feature/forms/login/login.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule, CdkMenuModule, RouterModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss',
  animations: [
    trigger('openClose',
      [
        state('closed', style({
          height: '0',
          overflow: 'hidden'
        })),

        transition('closed => open', [
          animate('300ms ease-in-out')
        ]),
        transition('open => closed', [
          animate('300ms ease-in-out')
        ])
      ])
  ]
})
export class HeaderMobileComponent {
  isOpen = false;
  dialog = inject(Dialog);

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  openDialog() {
    this.dialog.open(LoginComponent, {
      minWidth: '300px',
    });
  }
}
