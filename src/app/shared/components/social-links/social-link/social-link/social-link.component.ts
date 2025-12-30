import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {
  @Input() link: string = "#";
  @Input() img: string = "";
}
