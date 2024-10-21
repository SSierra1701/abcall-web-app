import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SingInClientService } from '../services/signInClient.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { SignInClientResponseI } from '../types/signInClientResponseI';
import { HttpErrorResponse } from '@angular/common/http';
import { signInClientActions } from './signInClientActions';
import { Router } from '@angular/router';

export const signInClientEffect = createEffect(
  (actions$ = inject(Actions), signInService = inject(SingInClientService)) => {
    return actions$.pipe(
      ofType(signInClientActions.signIn),
      switchMap(({ request }) => {
        return signInService.signIn(request).pipe(
          map((response: SignInClientResponseI) => {
            return signInClientActions.signInSucceeded({ response: response });
          }),
          catchError((httpError: HttpErrorResponse) => {
            return of(
              signInClientActions.signInFailed({
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
      ofType(signInClientActions.signInSucceeded),
      tap(() => {
        router.navigateByUrl('/home-client/indicators');
      })
    );
  },
  { functional: true, dispatch: false }
);
