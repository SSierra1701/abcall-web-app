import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SignUpTeamService } from '../services/signUpTeam.service';
import { signUpTeamActions } from './signUpTeamActions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { SignUpTeamResponseI } from '../types/signUpTeamResponseI';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PersistanceService } from '../../../share/services/persistance.service';

export const signUpTeamEffect = createEffect(
  (
    actions$ = inject(Actions),
    signUpService = inject(SignUpTeamService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(signUpTeamActions.signUp),
      switchMap(({ request }) => {
        const token = persistanceService.get('token');
        return signUpService.signUp(request, token).pipe(
          map((response: SignUpTeamResponseI) => {
            return signUpTeamActions.signUpSucceeded({ response });
          }),
          catchError((httpError: HttpErrorResponse) => {
            return of(
              signUpTeamActions.signUpFailed({
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
      ofType(signUpTeamActions.signUpSucceeded),
      tap(() => {
        router.navigateByUrl('home-admin/create-team/success');
      })
    );
  },
  { functional: true, dispatch: false }
);
