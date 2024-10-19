import { createFeature, createReducer, on } from '@ngrx/store';
import { SignInAdminStateI } from '../types/signInAdminStateI';
import { signInAdminActions } from './signInAdminActions';

const initialState: SignInAdminStateI = {
  isSubmitting: false,
  isLoading: false,
  serverSuccess: null,
  serverError: null,
};

const signInAdminFeature = createFeature({
  name: 'sign-in-admin-reducer',
  reducer: createReducer(
    initialState,
    on(signInAdminActions.signIn, (state) => ({
      ...state,
      isSubmitting: true,
      isLoading: true,
    })),
    on(signInAdminActions.signInSucceeded, (state, action) => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
    })),
    on(signInAdminActions.signInFailed, (state, action) => ({
      ...state,
      isLoading: false,
      isSubmitting: false,
      serverError: action.error,
    }))
  ),
});

export const {
  name: signInAdminKey,
  reducer: signInAdminReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectServerSuccess,
  selectServerError,
} = signInAdminFeature;
