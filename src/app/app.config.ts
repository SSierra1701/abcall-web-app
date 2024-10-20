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
import * as signUpUserEffect from './user/sign-up-user/store/signUpUserEffects';
import * as signUpClientEffect from './client/sign-up-client/store/signUpClientEffects';
import * as signInClientEffect from './client/sign-in-client/store/signInClientEffects';
import * as signInUserEffect from './user/sign-in-user/store/signInUserEffects';
import * as signInAdminEffect from './admin/sign-in-admin/store/signInAdminEffects';
import * as signUpTeamEffect from './admin/create-team/store/signUpTeamEffects';

import {
  signUpClientKey,
  signUpClientReducer,
} from './client/sign-up-client/store/signUpClientReducer';

import {
  signInClientKey,
  signInClientReducer,
} from './client/sign-in-client/store/signInClientReducer';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  signUpUserKey,
  signUpUserReducer,
} from './user/sign-up-user/store/signUpUserReducer';
import {
  signInUserKey,
  signInUserReducer,
} from './user/sign-in-user/store/signInUserReducer';
import {
  signInAdminKey,
  signInAdminReducer,
} from './admin/sign-in-admin/store/signInAdminReducer';
import {
  adminHomeKey,
  adminHomeReducer,
} from './admin/home-admin/store/adminHomeReducer';
import {
  signUpTeamKey,
  signUpTeamReducer,
} from './admin/create-team/store/signUpTeamReducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideStore(),
    provideEffects(
      signUpClientEffect,
      signInClientEffect,
      signUpUserEffect,
      signInUserEffect,
      signInAdminEffect,
      signUpTeamEffect
    ),
    provideState(signInClientKey, signInClientReducer),
    provideState(signUpClientKey, signUpClientReducer),
    provideState(signUpUserKey, signUpUserReducer),
    provideState(signInUserKey, signInUserReducer),
    provideState(signInAdminKey, signInAdminReducer),
    provideState(adminHomeKey, adminHomeReducer),
    provideState(signUpTeamKey, signUpTeamReducer),
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
