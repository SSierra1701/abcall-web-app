import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SingInTeamService } from '../services/signInTeam.service';
import { signInTeamActions } from './signInTeamActions';
import { catchError, map, of, switchMap } from 'rxjs';
import { SignInTeamResponseI } from '../types/signInTeamResponseI';
import { HttpErrorResponse } from '@angular/common/http';
import { signInClientActions } from '../../client/sign-in-client/store/signInClientActions';

export const signInTeamEffect = createEffect(
  (actions$ = inject(Actions), signInService = inject(SingInTeamService)) => {
    return actions$.pipe(
      ofType(signInTeamActions.signIn),
      switchMap(({ request }) => {
        return signInService.signIn(request).pipe(
          map((response: SignInTeamResponseI) => {
            return signInTeamActions.signInSucceeded({ response: response });
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
