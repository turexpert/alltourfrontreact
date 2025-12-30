import { Component } from '@angular/core';
import { POPULAR_FEATURES_ITEMS } from '../popular-features/popular-features.data';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule, provideScrollbarOptions } from 'ngx-scrollbar';

@Component({
  selector: 'app-popular-features-top',
  standalone: true,
  imports: [CommonModule, NgScrollbarModule],
  templateUrl: './popular-features-top.component.html',
  styleUrl: './popular-features-top.component.scss',
  providers: [
    provideScrollbarOptions({
      visibility: 'hover',
      appearance: 'compact'
    })
  ]
})
export class PopularFeaturesTopComponent {
  items = POPULAR_FEATURES_ITEMS;
}
