import { createActionGroup, props } from '@ngrx/store';
import { SignInUserRequestI } from '../types/signInUserRequestI';
import { ServerErrorI } from '../../share/types/ServerErrorI';
import { SignInUserResponseI } from '../types/signInUserResponseI';

export const signInUserActions = createActionGroup({
  source: 'sign-in-user',
  events: {
    signIn: props<{ request: SignInUserRequestI }>(),
    signInSucceeded: props<{ response: SignInUserResponseI }>(),
    signInFailed: props<{ error: ServerErrorI }>(),
  },
});
