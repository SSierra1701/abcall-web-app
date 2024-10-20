import { createFeature, createReducer, on } from '@ngrx/store';
import { SignUpTeamState } from '../types/signUpTeamState';
import { signUpTeamActions } from './signUpTeamActions';

const initialState: SignUpTeamState = {
  isSubmitting: false,
  isLoading: false,
  serverSuccess: null,
  serverError: null,
};

const signUpFeature = createFeature({
  name: 'sign-up-team-reducer',
  reducer: createReducer(
    initialState,
    on(signUpTeamActions.signUp, (state) => ({
      ...state,
      isSubmitting: true,
      isLoading: true,
    })),
    on(signUpTeamActions.signUpSucceeded, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      serverError: null,
      serverSuccess: action.response,
    })),
    on(signUpTeamActions.signUpFailed, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      serverError: action.error,
    }))
  ),
});

export const {
  name: signUpTeamKey,
  reducer: signUpTeamReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectServerSuccess,
  selectServerError,
} = signUpFeature;
