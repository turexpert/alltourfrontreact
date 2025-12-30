import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Hotel, BestHotel } from '../../shared/models/api.models';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  constructor(private apiService: ApiService) {}

  /**
   * Get all hotels with optional filtering
   * @param countryId Optional filter by country ID
   * @param stars Optional filter by hotel stars
   * @param hotelCategoryId Optional filter by hotel category ID
   * @returns Observable of Hotel array
   */
  getHotels(countryId?: number, stars?: number, hotelCategoryId?: number): Observable<Hotel[]> {
    const params: any = {};
    
    if (countryId) params.country_id = countryId;
    if (stars) params.stars = stars;
    if (hotelCategoryId) params.hotelcategory_id = hotelCategoryId;
    
    return this.apiService.get<Hotel[]>('/api/hotels', params);
  }

  /**
   * Get best hotels with optional filtering
   * @param countryId Optional filter by country ID
   * @param resortId Optional filter by resort ID
   * @param limit Optional limit of hotels to return (default 10)
   * @returns Observable of BestHotel array
   */
  getBestHotels(countryId?: number, resortId?: number, limit?: number): Observable<BestHotel[]> {
    const params: any = {};
    
    if (countryId) params.country_id = countryId;
    if (resortId) params.resort_id = resortId;
    if (limit) params.limit = limit;
    
    return this.apiService.get<BestHotel[]>('/api/besthotels', params);
  }
}