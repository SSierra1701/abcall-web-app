import { createFeature, createReducer, on } from '@ngrx/store';
import { SignInUserStateI } from '../types/signInUserStateI';
import { signInUserActions } from './signInUserActions';

const initialState: SignInUserStateI = {
  isSubmitting: false,
  isLoading: false,
  serverSuccess: null,
  serverError: null,
};

const signInClientFeature = createFeature({
  name: 'sign-in-user-reducer',
  reducer: createReducer(
    initialState,
    on(signInUserActions.signIn, (state) => ({
      ...state,
      isSubmitting: true,
      isLoading: true,
    })),
    on(signInUserActions.signInSucceeded, (state, action) => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
    })),
    on(signInUserActions.signInFailed, (state, action) => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
    }))
  ),
});

export const {
  name: signInUserKey,
  reducer: signInUserReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectServerSuccess,
  selectServerError,
} = signInClientFeature;
