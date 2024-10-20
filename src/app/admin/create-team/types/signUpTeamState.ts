import { ServerErrorI } from '../../../share/types/ServerErrorI';
import { SignUpTeamResponseI } from './signUpTeamResponseI';

export interface SignUpTeamState {
  isSubmitting: boolean;
  isLoading: boolean;
  serverSuccess: SignUpTeamResponseI | null;
  serverError: ServerErrorI | null;
}
