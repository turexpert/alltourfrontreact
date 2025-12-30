import { Component, Input, ViewChild } from '@angular/core';
import { SocialLinkComponent } from '../../../../shared/components/social-links/social-link/social-link/social-link.component';
import { CdkMenuModule, CdkMenuTrigger } from '@angular/cdk/menu';

@Component({
  selector: 'app-header-top',
  standalone: true,
  imports: [SocialLinkComponent, CdkMenuModule],
  templateUrl: './header-top.component.html',
  styleUrl: './header-top.component.scss'
})
export class HeaderTopComponent {
  @ViewChild(CdkMenuTrigger) menuTrigger!: CdkMenuTrigger;

  @Input() set isHeaderHidden(hide: boolean) {
    if(hide) {
      this.menuTrigger?.close();
    }
  }
}
