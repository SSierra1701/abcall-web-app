import { createFeature, createReducer, on } from '@ngrx/store';
import { SignUpUserState } from '../types/signUpUserState';
import { signUpUserActions } from './signUpUserActions';

const initialState: SignUpUserState = {
  isSubmitting: false,
  isLoading: false,
  serverSuccess: null,
  serverError: null,
};

const signUpFeature = createFeature({
  name: 'sign-up-user-reducer',
  reducer: createReducer(
    initialState,
    on(signUpUserActions.signUp, (state) => ({
      ...state,
      isSubmitting: true,
      isLoading: true,
    })),
    on(signUpUserActions.signUpSucceeded, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      serverSuccess: action.response,
    })),
    on(signUpUserActions.signUpFailed, (state, action) => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      serverError: action.error,
    }))
  ),
});

export const {
  name: signUpUserKey,
  reducer: signUpUserReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectServerSuccess,
  selectServerError,
} = signUpFeature;
