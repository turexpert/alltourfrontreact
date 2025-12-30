import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'at-country-page',
  standalone: true,
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss'
})
export class CountryPageComponent {
  private route = inject(ActivatedRoute);

  countrySlug = this.route.snapshot.paramMap.get('slug')!;
}
