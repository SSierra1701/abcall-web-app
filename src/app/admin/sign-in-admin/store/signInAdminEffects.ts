import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SingInAdminService } from '../services/signInAdmin.service';
import { signInAdminActions } from './signInAdminActions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { SignInAdminResponseI } from '../types/signInAdminResponseI';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { PersistanceService } from '../../../share/services/persistance.service';

export const signInAdminEffect = createEffect(
  (
    actions$ = inject(Actions),
    signInService = inject(SingInAdminService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(signInAdminActions.signIn),
      switchMap(({ request }) => {
        return signInService.signIn(request).pipe(
          map((response: SignInAdminResponseI) => {
            persistanceService.set('token', response.token);
            return signInAdminActions.signInSucceeded({ response: response });
          }),
          catchError((httpError: HttpErrorResponse) => {
            return of(
              signInAdminActions.signInFailed({
                error: httpError.error,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterSignIn = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(signInAdminActions.signInSucceeded),
      tap(() => {
        router.navigateByUrl('/home-admin/create-team');
      })
    );
  },
  { functional: true, dispatch: false }
);
