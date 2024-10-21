import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SingInUserService } from '../services/signInUser.service';
import { signInUserActions } from './signInUserActions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { SignInUserResponseI } from '../types/signInUserResponseI';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

export const signInUserEffect = createEffect(
  (actions$ = inject(Actions), signInService = inject(SingInUserService)) => {
    return actions$.pipe(
      ofType(signInUserActions.signIn),
      switchMap(({ request }) => {
        return signInService.signIn(request).pipe(
          map((response: SignInUserResponseI) => {
            return signInUserActions.signInSucceeded({ response: response });
          }),
          catchError((httpError: HttpErrorResponse) => {
            return of(
              signInUserActions.signInFailed({
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
      ofType(signInUserActions.signInSucceeded),
      tap(() => {
        router.navigateByUrl('/home-user/pqr');
      })
    );
  },
  { functional: true, dispatch: false }
);
