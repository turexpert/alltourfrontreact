import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheControlInterceptor } from './cache-control.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: CacheControlInterceptor, multi: true }
];
