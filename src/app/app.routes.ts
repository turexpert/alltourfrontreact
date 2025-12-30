import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { CatalogComponent } from './feature/catalog/catalog.component';
import { PromotionsComponent } from './feature/promotions/promotions.component';
import { ReviewsComponent } from './feature/reviews/reviews.component';
import { AboutComponent } from './feature/about/about.component';
import { ContactComponent } from './feature/contact/contact.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'country/:slug', component: CountryPageComponent },
  { path: '**', redirectTo: '' }
];
