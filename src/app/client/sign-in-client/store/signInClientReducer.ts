import { createFeature, createReducer, on } from '@ngrx/store';
import { SignInClientStateI } from '../types/signInClientStateI';
import { signInClientActions } from './signInClientActions';

const initialState: SignInClientStateI = {
  isSubmitting: false,
  isLoading: false,
  serverSuccess: null,
  serverError: null,
};

const signInClientFeature = createFeature({
  name: 'sign-in-client-reducer',
  reducer: createReducer(
    initialState,
    on(signInClientActions.signIn, (state) => ({
      ...state,
      isSubmitting: true,
      isLoading: true,
    })),
    on(signInClientActions.signInSucceeded, (state, action) => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
      serverSuccess: action.response,
    })),
    on(signInClientActions.signInFailed, (state, action) => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
      serverError: action.error,
    }))
  ),
});

export const {
  name: signInClientKey,
  reducer: signInClientReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectServerSuccess,
  selectServerError,
} = signInClientFeature;
