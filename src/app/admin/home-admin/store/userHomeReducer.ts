import { createFeature, createReducer, on } from '@ngrx/store';
import { AdminHomeState } from '../type/adminHomeState';
import { adminHomeActions } from './adminHomeActions';

const initState: AdminHomeState = {
  session: null,
};

const adminHomeFeature = createFeature({
  name: 'admin-home-reducer',
  reducer: createReducer(
    initState,
    on(adminHomeActions.loadHome, (state, action) => ({
      ...state,
      session: action.session,
    }))
  ),
});

export const {
  name: adminHomeKey,
  reducer: adminHomeReducer,
  selectSession,
} = adminHomeFeature;
