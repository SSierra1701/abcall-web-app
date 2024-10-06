import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore, provideState } from '@ngrx/store';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as signUpClientEffect from './sign-up-client/store/signUpClientEffects';
import * as signInClientEffect from './sign-in-client/store/signInClientEffects';
import {
  signUpClientKey,
  signUpClientReducer,
} from './sign-up-client/store/signUpClientReducer';

import {
  signInClientKey,
  signInClientReducer,
} from './sign-in-client/store/signInClientReducer';

import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideStore(),
    provideEffects(signUpClientEffect, signInClientEffect),
    provideState(signInClientKey, signInClientReducer),
    provideState(signUpClientKey, signUpClientReducer),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      traceLimit: 75,
    }),
  ],
};
