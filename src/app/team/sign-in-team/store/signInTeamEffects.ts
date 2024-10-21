import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SingInTeamService } from '../services/signInTeam.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { SignInTeamResponseI } from '../types/signInTeamResponseI';
import { HttpErrorResponse } from '@angular/common/http';
import { signInTeamActions } from './signInTeamActions';
import { Router } from '@angular/router';

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
              signInTeamActions.signInFailed({
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
      ofType(signInTeamActions.signInSucceeded),
      tap(() => {
        router.navigateByUrl('/home-team/resolve-pqr');
      })
    );
  },
  { functional: true, dispatch: false }
);
