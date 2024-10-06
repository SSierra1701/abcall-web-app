import { createFeature, createReducer, on } from '@ngrx/store';
import { ClientHomeState } from '../type/clientHomeState';
import { clientHomeActions } from './clientHomeActions';

const initState: ClientHomeState = {
  session: null,
};

const clientHomeFeature = createFeature({
  name: 'client-home-reducer',
  reducer: createReducer(
    initState,
    on(clientHomeActions.loadHome, (state, action) => ({
      ...state,
      session: action.session,
    }))
  ),
});

export const {
  name: clientHomeKey,
  reducer: clientHomeReducer,
  selectSession,
} = clientHomeFeature;
