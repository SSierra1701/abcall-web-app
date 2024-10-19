import { createActionGroup, props } from '@ngrx/store';
import { SignInUserRequestI } from '../types/signInUserRequestI';
import { SignInUserResponseI } from '../types/signInUserResponseI';
import { ServerErrorI } from '../../../share/types/ServerErrorI';

export const signInUserActions = createActionGroup({
  source: 'sign-in-user',
  events: {
    signIn: props<{ request: SignInUserRequestI }>(),
    signInSucceeded: props<{ response: SignInUserResponseI }>(),
    signInFailed: props<{ error: ServerErrorI }>(),
  },
});
