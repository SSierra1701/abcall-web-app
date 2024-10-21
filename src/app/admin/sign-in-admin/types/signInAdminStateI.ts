import { ServerErrorI } from '../../../share/types/ServerErrorI';
import { SignInAdminResponseI } from './signInAdminResponseI';

export interface SignInAdminStateI {
  isSubmitting: boolean;
  isLoading: boolean;
  serverSuccess: SignInAdminResponseI | null;
  serverError: ServerErrorI | null;
}
