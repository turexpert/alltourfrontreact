import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Country } from '../../shared/models/api.models';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private apiService: ApiService) {}

  /**
   * Get all countries
   * @returns Observable of Country array
   */
  getCountries(): Observable<Country[]> {
    return this.apiService.get<Country[]>('/api/countries');
  }

  /**
   * Get best countries
   * @param limit Optional limit of countries to return
   * @returns Observable of BestCountry array
   */
  getBestCountries(limit?: number): Observable<Country[]> {
    const params = limit ? { limit: limit } : undefined;
    return this.apiService.get<Country[]>('/api/bestcountries', params);
  }

  /**
   * Get countries with best hotels
   * @returns Observable of Country array
   */
  getBestHotelCountries(): Observable<Country[]> {
    return this.apiService.get<Country[]>('/api/besthotel-countries');
  }
}
