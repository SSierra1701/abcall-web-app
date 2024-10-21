import { ServerErrorI } from '../../../share/types/ServerErrorI';
import { SignInUserResponseI } from './signInUserResponseI';

export interface SignInUserStateI {
  isSubmitting: boolean;
  isLoading: boolean;
  serverSuccess: SignInUserResponseI | null;
  serverError: ServerErrorI | null;
}
