import { createActionGroup, props } from '@ngrx/store';
import { SignUpClientRequestI } from '../types/signUpClientRequestI';
import { SignUpClientResponseI } from '../types/signUpClientResponseI';
import { ServerErrorI } from '../../share/types/ServerErrorI';

export const signUpClientActions = createActionGroup({
  source: 'Sign-up-client',
  events: {
    signUp: props<{ request: SignUpClientRequestI }>(),
    signUpSucceeded: props<{ response: SignUpClientResponseI }>(),
    signUpFailed: props<{ error: ServerErrorI }>(),
  },
});
