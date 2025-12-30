import { apiService } from './api';
import { Country } from '@/types/api';

export const countryService = {
  getCountries: (): Promise<Country[]> => {
    return apiService.get<Country[]>('/api/countries');
  },

  getBestCountries: (limit?: number): Promise<Country[]> => {
    const params = limit ? { limit } : undefined;
    return apiService.get<Country[]>('/api/bestcountries', params);
  },

  getBestHotelCountries: (): Promise<Country[]> => {
    return apiService.get<Country[]>('/api/besthotel-countries');
  },
};
