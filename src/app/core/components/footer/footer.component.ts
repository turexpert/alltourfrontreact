import { Component } from '@angular/core';
import { SocialLinksComponent } from '../../../shared/components/social-links/social-links.component';
import { SocialLinkComponent } from '../../../shared/components/social-links/social-link/social-link/social-link.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BaseScreenSizeComponent } from '../responsive/base-screen-size.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent extends BaseScreenSizeComponent { }
