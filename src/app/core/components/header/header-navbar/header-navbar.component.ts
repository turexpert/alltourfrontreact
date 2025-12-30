import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountryListComponent } from '../../../../shared/components/country-list/country-list.component';
import { MegaMenuWrapperComponent } from '../../../../shared/components/wrappers/megamenu-wrapper/megamenu-wrapper.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, A11yModule, CountryListComponent, MegaMenuWrapperComponent],
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.scss'
})
export class HeaderNavbarComponent {
  isOpen: boolean = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
