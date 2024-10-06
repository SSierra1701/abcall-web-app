import { createActionGroup, props } from '@ngrx/store';
import { SignInTeamRequestI } from '../types/signInTeamRequestI';
import { ServerErrorI } from '../../share/types/ServerErrorI';
import { SignInTeamResponseI } from '../types/signInTeamResponseI';

export const signInTeamActions = createActionGroup({
  source: 'sign-in-team',
  events: {
    signIn: props<{ request: SignInTeamRequestI }>(),
    signInSucceeded: props<{ response: SignInTeamResponseI }>(),
    signInFailed: props<{ error: ServerErrorI }>(),
  },
});
