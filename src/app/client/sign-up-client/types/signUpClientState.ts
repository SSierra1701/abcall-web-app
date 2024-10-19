import { ServerErrorI } from '../../../share/types/ServerErrorI';
import { SignUpClientResponseI } from './signUpClientResponseI';

export interface SignUpClientState {
  isSubmitting: boolean;
  isLoading: boolean;
  serverSuccess: SignUpClientResponseI | null;
  serverError: ServerErrorI | null;
}
