import { ServerErrorI } from '../../../share/types/ServerErrorI';
import { SignInTeamResponseI } from './signInTeamResponseI';

export interface SignInTeamStateI {
  isSubmitting: boolean;
  isLoading: boolean;
  serverSuccess: SignInTeamResponseI | null;
  serverError: ServerErrorI | null;
}
