import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Partner } from '../../shared/models/api.models';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  constructor(private apiService: ApiService) {}

  /**
   * Get all partners
   * @returns Observable of Partner array
   */
  getPartners(): Observable<Partner[]> {
    return this.apiService.get<Partner[]>('/api/partners');
  }
}