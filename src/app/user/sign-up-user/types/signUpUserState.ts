import { ServerErrorI } from '../../../share/types/ServerErrorI';
import { SignUpUserResponseI } from './signUpUserResponseI';

export interface SignUpUserState {
  isSubmitting: boolean;
  isLoading: boolean;
  serverSuccess: SignUpUserResponseI | null;
  serverError: ServerErrorI | null;
}
