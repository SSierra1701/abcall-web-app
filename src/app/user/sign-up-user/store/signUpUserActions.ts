import { createActionGroup, props } from '@ngrx/store';
import { SignUpUserRequestI } from '../types/signUpUserRequestI';
import { SignUpUserResponseI } from '../types/signUpUserResponseI';
import { ServerErrorI } from '../../../share/types/ServerErrorI';

export const signUpUserActions = createActionGroup({
  source: 'Sign-up-user',
  events: {
    signUp: props<{ request: SignUpUserRequestI }>(),
    signUpSucceeded: props<{ response: SignUpUserResponseI }>(),
    signUpFailed: props<{ error: ServerErrorI }>(),
  },
});
