import { createActionGroup, props } from '@ngrx/store';
import { SignUpTeamRequestI } from '../types/signUpTeamRequestI';
import { SignUpTeamResponseI } from '../types/signUpTeamResponseI';
import { ServerErrorI } from '../../../share/types/ServerErrorI';

export const signUpTeamActions = createActionGroup({
  source: 'Sign-up-team',
  events: {
    signUp: props<{ request: SignUpTeamRequestI }>(),
    signUpSucceeded: props<{ response: SignUpTeamResponseI }>(),
    signUpFailed: props<{ error: ServerErrorI }>(),
  },
});
