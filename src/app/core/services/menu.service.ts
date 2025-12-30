import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { MenuItem } from '../../shared/models/api.models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private apiService: ApiService) {}

  /**
   * Get menu items
   * @returns Observable of MenuItem array
   */
  getMenu(): Observable<MenuItem[]> {
    return this.apiService.get<MenuItem[]>('/api/menu');
  }
}