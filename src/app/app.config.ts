import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { AppRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // providers: [provideAnimations(), importProvidersFrom([BrowserAnimationsModule]), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(AppRoutes), provideClientHydration()]
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(AppRoutes),
    provideClientHydration(
      withHttpTransferCacheOptions({
        filter: req => !req.url.includes('/api')
      })
    ),
    provideHttpClient(withFetch())
  ]
};
