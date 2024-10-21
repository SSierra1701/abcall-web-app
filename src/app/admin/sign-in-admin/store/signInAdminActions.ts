import { createActionGroup, props } from '@ngrx/store';
import { SignInAdminRequestI } from '../types/signInAdminRequestI';
import { SignInAdminResponseI } from '../types/signInAdminResponseI';
import { ServerErrorI } from '../../../share/types/ServerErrorI';

export const signInAdminActions = createActionGroup({
  source: 'sign-in-admin',
  events: {
    signIn: props<{ request: SignInAdminRequestI }>(),
    signInSucceeded: props<{ response: SignInAdminResponseI }>(),
    signInFailed: props<{ error: ServerErrorI }>(),
  },
});
