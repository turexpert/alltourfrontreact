import { apiService } from './api';
import { Partner } from '@/types/api';

export const partnerService = {
  getPartners: (): Promise<Partner[]> => {
    return apiService.get<Partner[]>('/api/partners');
  },
};
