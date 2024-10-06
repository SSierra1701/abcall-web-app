import { ServerErrorI } from '../../share/types/ServerErrorI';
import { SignInClientResponseI } from './signInClientResponseI';

export interface SignInClientStateI {
  isSubmitting: boolean;
  isLoading: boolean;
  serverSuccess: SignInClientResponseI | null;
  serverError: ServerErrorI | null;
}
