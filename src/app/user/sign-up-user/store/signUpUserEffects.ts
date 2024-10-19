import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SignUpUserService } from '../services/signUpUser.service';
import { signUpUserActions } from './signUpUserActions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { SignUpUserResponseI } from '../types/signUpUserResponseI';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

export const signUpUserEffect = createEffect(
  (actions$ = inject(Actions), signUpService = inject(SignUpUserService)) => {
    return actions$.pipe(
      ofType(signUpUserActions.signUp),
      switchMap(({ request }) => {
        return signUpService.signUp(request).pipe(
          map((response: SignUpUserResponseI) => {
            return signUpUserActions.signUpSucceeded({ response });
          }),
          catchError((httpError: HttpErrorResponse) => {
            return of(
              signUpUserActions.signUpFailed({
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
      ofType(signUpUserActions.signUpSucceeded),
      tap(() => {
        router.navigateByUrl('/sign-up/user/success');
      })
    );
  },
  { functional: true, dispatch: false }
);
