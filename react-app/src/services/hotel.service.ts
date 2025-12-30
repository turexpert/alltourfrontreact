import { apiService } from './api';
import { Hotel, BestHotel } from '@/types/api';

interface HotelParams {
  countryId?: number;
  stars?: number;
  hotelCategoryId?: number;
}

interface BestHotelParams {
  countryId?: number;
  resortId?: number;
  limit?: number;
}

export const hotelService = {
  getHotels: (params?: HotelParams): Promise<Hotel[]> => {
    const queryParams: Record<string, number> = {};
    
    if (params?.countryId) queryParams.country_id = params.countryId;
    if (params?.stars) queryParams.stars = params.stars;
    if (params?.hotelCategoryId) queryParams.hotelcategory_id = params.hotelCategoryId;
    
    return apiService.get<Hotel[]>('/api/hotels', queryParams);
  },

  getBestHotels: (params?: BestHotelParams): Promise<BestHotel[]> => {
    const queryParams: Record<string, number> = {};
    
    if (params?.countryId) queryParams.country_id = params.countryId;
    if (params?.resortId) queryParams.resort_id = params.resortId;
    if (params?.limit) queryParams.limit = params.limit;
    
    return apiService.get<BestHotel[]>('/api/besthotels', queryParams);
  },
};
