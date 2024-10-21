import { createFeature, createReducer, on } from '@ngrx/store';
import { UserHomeState } from '../type/userHomeState';
import { userHomeActions } from './userHomeActions';

const initState: UserHomeState = {
  session: null,
};

const userHomeFeature = createFeature({
  name: 'user-home-reducer',
  reducer: createReducer(
    initState,
    on(userHomeActions.loadHome, (state, action) => ({
      ...state,
      session: action.session,
    }))
  ),
});

export const {
  name: userHomeKey,
  reducer: userHomeReducer,
  selectSession,
} = userHomeFeature;
