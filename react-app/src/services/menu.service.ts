import { apiService } from './api';
import { MenuItem } from '@/types/api';

export const menuService = {
  getMenu: (): Promise<MenuItem[]> => {
    return apiService.get<MenuItem[]>('/api/menu');
  },
};
