import { createFeature, createReducer, on } from '@ngrx/store';
import { SignInTeamStateI } from '../types/signInTeamStateI';
import { signInTeamActions } from './signInTeamActions';

const initialState: SignInTeamStateI = {
  isSubmitting: false,
  isLoading: false,
  serverSuccess: null,
  serverError: null,
};

const signInTeamFeature = createFeature({
  name: 'sign-in-team-reducer',
  reducer: createReducer(
    initialState,
    on(signInTeamActions.signIn, (state) => ({
      ...state,
      isSubmitting: true,
      isLoading: true,
    })),
    on(signInTeamActions.signInSucceeded, (state, action) => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
      serverSuccess: action.response,
    })),
    on(signInTeamActions.signInFailed, (state, action) => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
      serverError: action.error,
    }))
  ),
});

export const {
  name: signInTeamKey,
  reducer: signInTeamReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectServerSuccess,
  selectServerError,
} = signInTeamFeature;
