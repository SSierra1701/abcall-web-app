import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SingInUserService } from '../services/signInUser.service';
import { signInUserActions } from './signInUserActions';
import { catchError, map, of, switchMap } from 'rxjs';
import { SignInUserResponseI } from '../types/signInUserResponseI';
import { HttpErrorResponse } from '@angular/common/http';
import { signInClientActions } from '../../../client/sign-in-client/store/signInClientActions';

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
              signInClientActions.signInFailed({
                error: httpError.error.errors,
              })
            );
          })
        );
      })
    );
  }
);
