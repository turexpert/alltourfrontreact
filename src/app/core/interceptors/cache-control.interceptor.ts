import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Injectable()
export class CacheControlInterceptor implements HttpInterceptor {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Log platform information for debugging
    console.log('Request intercepted on:', isPlatformServer(this.platformId) ? 'server' : 'client');

    // Only modify API requests
    if (request.url.includes('api')) {
      // Add timestamp to prevent caching
      const timestamp = new Date().getTime();
      const separator = request.url.includes('?') ? '&' : '?';
      const urlWithTimestamp = `${request.url}${separator}_t=${timestamp}`;

      // Clone the request with cache-busting headers
      const modifiedRequest = request.clone({
        url: urlWithTimestamp,
        setHeaders: {
          'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });

      console.log('Modified URL with timestamp:', urlWithTimestamp);
      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}
