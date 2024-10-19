import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SignUpClientService } from '../services/signUpClient.service';
import { signUpClientActions } from './signUpClientActions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { SignUpClientResponseI } from '../types/signUpClientResponseI';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

export const signUpClientEffect = createEffect(
  (actions$ = inject(Actions), signUpService = inject(SignUpClientService)) => {
    return actions$.pipe(
      ofType(signUpClientActions.signUp),
      switchMap(({ request }) => {
        return signUpService.signUp(request).pipe(
          map((response: SignUpClientResponseI) => {
            return signUpClientActions.signUpSucceeded({ response });
          }),
          catchError((httpError: HttpErrorResponse) => {
            return of(
              signUpClientActions.signUpFailed({
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

export const redirectAfterSignUp = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(signUpClientActions.signUpSucceeded),
      tap(() => {
        router.navigateByUrl('/sign-up/client/success');
      })
    );
  },
  { functional: true, dispatch: false }
);
