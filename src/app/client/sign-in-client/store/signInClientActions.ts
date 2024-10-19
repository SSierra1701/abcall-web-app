import { createActionGroup, props } from '@ngrx/store';
import { SignInClientRequestI } from '../types/signInClientRequestI';
import { SignInClientResponseI } from '../types/signInClientResponseI';
import { ServerErrorI } from '../../../share/types/ServerErrorI';

export const signInClientActions = createActionGroup({
  source: 'sign-in-client',
  events: {
    signIn: props<{ request: SignInClientRequestI }>(),
    signInSucceeded: props<{ response: SignInClientResponseI }>(),
    signInFailed: props<{ error: ServerErrorI }>(),
  },
});
