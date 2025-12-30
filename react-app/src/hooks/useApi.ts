'use client';

import { useQuery } from '@tanstack/react-query';
import { countryService } from '@/services/country.service';
import { hotelService } from '@/services/hotel.service';
import { menuService } from '@/services/menu.service';
import { partnerService } from '@/services/partner.service';

export function useCountries() {
  return useQuery({
    queryKey: ['countries'],
    queryFn: () => countryService.getCountries(),
  });
}

export function useBestCountries(limit?: number) {
  return useQuery({
    queryKey: ['bestCountries', limit],
    queryFn: () => countryService.getBestCountries(limit),
  });
}

export function useBestHotelCountries() {
  return useQuery({
    queryKey: ['bestHotelCountries'],
    queryFn: () => countryService.getBestHotelCountries(),
  });
}

export function useHotels(params?: { countryId?: number; stars?: number; hotelCategoryId?: number }) {
  return useQuery({
    queryKey: ['hotels', params],
    queryFn: () => hotelService.getHotels(params),
  });
}

export function useBestHotels(params?: { countryId?: number; resortId?: number; limit?: number }) {
  return useQuery({
    queryKey: ['bestHotels', params],
    queryFn: () => hotelService.getBestHotels(params),
  });
}

export function useMenu() {
  return useQuery({
    queryKey: ['menu'],
    queryFn: () => menuService.getMenu(),
  });
}

export function usePartners() {
  return useQuery({
    queryKey: ['partners'],
    queryFn: () => partnerService.getPartners(),
  });
}
