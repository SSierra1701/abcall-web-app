import { createFeature, createReducer, on } from '@ngrx/store';
import { SignUpClientState } from '../types/signUpClientState';
import { signUpClientActions } from './signUpClientActions';

const initialState: SignUpClientState = {
  isSubmitting: false,
  isLoading: false,
  serverSuccess: null,
  serverError: null,
};

const signUpFeature = createFeature({
  name: 'sign-up-client-reducer',
  reducer: createReducer(
    initialState,
    on(signUpClientActions.signUp, (state) => ({
      ...state,
      isSubmitting: true,
      isLoading: true,
    })),
    on(signUpClientActions.signUpSucceeded, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      serverSuccess: action.response,
    })),
    on(signUpClientActions.signUpFailed, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      serverError: action.error,
    }))
  ),
});

export const {
  name: signUpClientKey,
  reducer: signUpClientReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectServerSuccess,
  selectServerError,
} = signUpFeature;
